namespace TODO {
  type GetTodosResponse = {
    username: string;
    age: number;
    photoUrl: string;
  }[];
  type GetTodosRequest = void;
  type PostTodosResponse = {
    username: string;
    age: number;
    photoUrl: string;
  }[];
  type PostTodosRequest = {
    username: string;
    age: number;
    photoUrl: string;
  };
}
