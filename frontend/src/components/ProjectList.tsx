"use client";

import { useState, useEffect } from "react";
import { api, Project } from "../services/api";
import ImageSequenceViewer from "./ImageSequenceViewer";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await api.getProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const project = await api.createProject(newProject);
      setProjects([...projects, project]);
      setNewProject({ name: "", description: "" });
      setError(null);
    } catch (err) {
      setError("Failed to create project");
    }
  };

  const handleImageUpload = async (projectId: string, files: FileList) => {
    try {
      await api.uploadImages(projectId, Array.from(files));
      await loadProjects(); // Reload to get updated image list
      setError(null);
    } catch (err) {
      setError("Failed to upload images");
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      await api.deleteProject(projectId);
      setProjects(projects.filter((project) => project.id !== projectId));
      setError(null);
    } catch (err) {
      setError("Failed to delete project");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleCreateProject} className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="w-full p-2 text-black border rounded"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            className="w-full p-2 border text-black rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded p-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
            {project.description && (
              <p className="text-gray-600 mt-2">{project.description}</p>
            )}
            <div className="mt-4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) =>
                  e.target.files &&
                  handleImageUpload(project.id, e.target.files)
                }
                className="mb-4"
              />
              <div className="grid grid-cols-3 gap-4">
                {/* {project.images &&
                  project.images.map((image) => (
                    <img
                      key={image.id}
                      src={`http://localhost:3001${image.url}`}
                      alt={`Project ${project.name} image ${image.sequence}`}
                      className="w-full h-48 object-cover rounded"
                    />
                  ))} */}
              </div>
              {/* New Image Sequence Viewer */}
              {project.images && project.images.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Image Sequence</h3>
                  <ImageSequenceViewer
                    images={project.images.map((img) => img.url)}
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
