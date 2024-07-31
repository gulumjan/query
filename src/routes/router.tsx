import { createBrowserRouter } from "react-router-dom";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  },
  {
    path: "/item/:itemId",
    element: <TodoItem />,
  },
]);
