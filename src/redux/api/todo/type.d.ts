namespace TODO {
  type GetTodosResponse = ITodo[];

  type GetTodosRequest = void;
  type PostTodosResponse = ITodo[];

  type PostTodosRequest = ITodo;

  type DeleteTodoResponse = [];

  type DeleteTodoRequest = number;

  type GetTodosByIdResponse = ITodo;

  type GetTodosByIdRequest = number;
}
