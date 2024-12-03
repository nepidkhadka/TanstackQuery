import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Student } from "../../utils/types";
import { createStudent, updateStudent } from "../../services/api";
import { QUERY_KEYS } from "../../utils/constant";

export const useAddStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Student) => createStudent(data),
    mutationKey: [QUERY_KEYS.ADDSTUDENT],
    onMutate: () => {
      console.log("onMutate");
    },
    onError: () => {
      console.log("onError");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] });
    },
    // onSettled: (data, error, variables) => { // data is response from server & variables are the data we provided
    onSettled: (variables) => {
      console.log(
        variables?.id,
        variables?.phoneNumber,
        variables?.studentEmail,
        variables?.studentName
      );
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Student) => updateStudent(data),
    mutationKey: [QUERY_KEYS.UPDATESTUDENT],
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.STUDENT, { id: variables.id }],
        });
      }
    },
  });
};
