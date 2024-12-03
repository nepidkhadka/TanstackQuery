import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../utils/constant";
import { getStudentById, getStudents } from "../../services/studentsApi";
import { Student } from "../../utils/types";

export const useStudents = () => {
  return useQuery<Student[]>({
    queryKey: [QUERY_KEYS.STUDENTS],
    queryFn: getStudents,
  });
};

export const useStudent = (id: string) => {
  return useQuery<Student>({
    // queryKey: [QUERY_KEYS.STUDENT,id],
    queryKey: [QUERY_KEYS.STUDENT, { id }],
    queryFn: () => getStudentById(id),
  });
};
