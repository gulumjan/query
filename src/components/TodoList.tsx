// import { SubmitHandler, useForm } from "react-hook-form";
// import { useGetTodosQuery } from "../redux/api/todo";
import AddTodo from "./AddTodo";
import scss from "./TodoList.module.scss";

const TodoList = () => {
  return (
    <div className={scss.TodoList}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>Todo List</h1>
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
