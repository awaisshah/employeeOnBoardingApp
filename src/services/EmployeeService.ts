import axios from "axios";

const API_BASE = "https://run.mocky.io/v3";
export const fetchAllOrganizations = async () => {
  const response = await axios.get(
    `${API_BASE}/00691aae-692e-4028-bf0a-585147fca47b`
  );
  return response.data;
};

export const fetchOrganizations = async (name: string) => {
  const response = await axios.get(
    `${API_BASE}/00691aae-692e-4028-bf0a-585147fca47b?q=${name}`
  );
  return response.data;
};

export const fetchDepartments = async (orgKey: string) => {
  const response = await axios.get(
    `${API_BASE}/ce9708e8-9595-49e0-a577-cafec3ac3a28?orgKey=${orgKey}`
  );
  return response.data;
};
export const fetchAllDepartments = async () => {
  const response = await axios.get(
    `${API_BASE}/ce9708e8-9595-49e0-a577-cafec3ac3a28`
  );
  return response.data;
};

export const fetchAllDivisions = async () => {
  const response = await axios.get(
    `${API_BASE}/2f6727dd-6fd2-4069-9b84-a15b5dcf2383`
  );
  return response.data;
};
export const fetchDivisions = async (departmentKey: string) => {
  const response = await axios.get(
    `${API_BASE}/2f6727dd-6fd2-4069-9b84-a15b5dcf2383?departmentKey=${departmentKey}`
  );
  return response.data;
};
