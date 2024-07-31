import { useParams } from "react-router-dom";
import {
  useDeleteTodosMutation,
  useGetTodosByIdQuery,
} from "../redux/api/todo";
import scss from "./TodoItem.module.scss";

const TodoItem = () => {
  const { itemId } = useParams();
  const { data } = useGetTodosByIdQuery(Number(itemId));
  const [deleteTodos] = useDeleteTodosMutation();

  console.log(itemId);

  console.log(data, "data");

  const removeTodos = async (_id: number) => {
    await deleteTodos(_id);
  };
  return (
    <>
      <h1>TodoItem Page</h1>;
      <div className={scss.TodoItem}>
        <div className={scss.container}>
          <div className={scss.content}>
            {data && (
              <div>
                <img style={{ width: "100%" }} src={data.photoUrl} alt="" />
                <p>Name : {data.username}</p>
                <p> Age :{data.age}</p>
                <button
                  style={{ padding: "8px 28px " }}
                  onClick={() => removeTodos(data._id!)}
                >
                  delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
