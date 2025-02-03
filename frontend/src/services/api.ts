import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export interface Project {
  id: string;
  name: string;
  description?: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: string;
  url: string;
  sequence: number;
  projectId: string;
  createdAt: string;
  updatedAt: string;
}

export const api = {
  // Project APIs
  async createProject(data: { name: string; description?: string }) {
    const response = await axios.post<Project>(
      `${API_BASE_URL}/projects`,
      data
    );
    return response.data;
  },

  async getProjects() {
    const response = await axios.get<Project[]>(`${API_BASE_URL}/projects`);
    return response.data;
  },

  async getProject(projectId: string) {
    const response = await axios.get<Project>(
      `${API_BASE_URL}/projects/${projectId}`
    );
    return response.data;
  },

  // Image APIs
  async uploadImages(projectId: string, images: File[]) {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    const response = await axios.post<Image[]>(
      `${API_BASE_URL}/projects/${projectId}/images`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
  deleteProject: async (projectId: string) => {
    const response = await axios.delete(
      `${API_BASE_URL}/projects/${projectId}`
    );
    if (!response.ok) {
      throw new Error("Failed to delete project");
    }
  },
};
