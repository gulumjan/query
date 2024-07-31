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
    getTodosById: builder.query<
      TODO.GetTodosByIdResponse,
      TODO.GetTodosByIdRequest
    >({
      query: (_id) => ({
        url: `${ENDPOINT}/${_id}`,
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
    deleteTodos: builder.mutation<
      TODO.DeleteTodoResponse,
      TODO.DeleteTodoRequest
    >({
      query: ({ _id }) => ({
        url: `${ENDPOINT}/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  usePostTodosMutation,
  useGetTodosByIdQuery,
  useDeleteTodosMutation,
  useGetTodosQuery,
} = api;
