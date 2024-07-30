import { api as index } from "..";

const ENDPOINT = import.meta.env.VITE_BACKEND_API_ENDPOINT;

export interface Todo {
  username: string;
  age: number;
  photoUrl: string;
}
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TODO.GetTodosResponse, TODO.GetTodosRequest>({
      query: () => ({
        url: `${ENDPOINT}`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodos: builder.mutation<TODO.PostTodosResponse, TODO.PostTodosRequest>({
      query: (data) => ({
        url: `${ENDPOINT}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery } = api;
export const { usePostTodosMutation } = api;
