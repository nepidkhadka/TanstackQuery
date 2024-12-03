import axios from "axios";
import { Student } from "../utils/types";

const BASE_API_URL = import.meta.env?.VITE_BACKEND_URL || "";
if (!BASE_API_URL) {
  throw new Error("VITE_BACKEND_URL is not defined");
}
const axiosInstance = axios.create({ baseURL: BASE_API_URL });

// export const getStudents = async (): Promise<Student[]> => {
export const getStudents = async () => {
  try {
    // return(await axiosInstance.get<Student[]>("/student")).data;
    // const res = await fetch(`${BASE_API_URL}/student`);
    // const data = await res.json();
    // return data;
    // const response = await axiosInstance.get<Student[]>("/student");
    const { data } = await axiosInstance.get<Student[]>("/student");
    // return data.slice(0, 5); // We can transform the data as per nedded
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.message);
    } else {
      console.error("Non-Axios error: ", error);
    }
    throw error;
  }
};

// get student by id
export const getStudentById = async (id: string): Promise<Student> => {
  try {
    const response = await axiosInstance.get<Student>(`/student/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.message);
    } else {
      console.error("Non-Axios error: ", error);
    }
    throw error;
  }
};

// add student
export const createStudent = async (data: Student) => {
  try {
    const response = await axiosInstance.post<Student>(`/student/`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.message);
    } else {
      console.error("Non-Axios error: ", error);
    }
    throw error;
  }
};

// update student
export const updateStudent = async (data: Student) => {
  try {
    const response = await axiosInstance.put<Student>(
      `/student/${data.id}`,
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.message);
    } else {
      console.error("Non-Axios error: ", error);
    }
    throw error;
  }
};
