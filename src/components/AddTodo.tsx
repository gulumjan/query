import { useState } from "react";
import {
  useDeleteTodosMutation,
  useGetTodosQuery,
  usePostTodosMutation,
} from "../redux/api/todo";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const { data: todos = [] } = useGetTodosQuery();
  const [postTodos] = usePostTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [photoUrl, setPhotoUrl] = useState<string>("");

  const handleSend = async () => {
    if (username && age && photoUrl) {
      const todo: TODO.PostTodosRequest = { username, age, photoUrl };
      await postTodos(todo);
      setUsername("");
      setAge(0);
      setPhotoUrl("");
    }
  };
  console.log(todos);

  const handleLink = (_id: number) => {
    navigate(`/item/${_id}`);
  };

  const removeTodos = async (_id: number) => {
    await deleteTodos(_id);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
        />
        <input
          placeholder="Age"
          onChange={(e) => setAge(Number(e.target.value))}
          type="number"
        />
        <input
          placeholder="Photo URL"
          onChange={(e) => setPhotoUrl(e.target.value)}
          value={photoUrl}
          type="text"
        />
        <button onClick={handleSend}>Send</button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {todos?.map((el, index) => (
          <div
            style={{ display: "flex", flexWrap: "wrap", marginTop: "26px" }}
            key={index}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "423px",
                height: "auto",
                alignItems: "center",
                border: "1px solid #000",
              }}
            >
              <img style={{ width: "100%" }} src={el.photoUrl} alt="" />
              <p>Name : {el.username}</p>
              <p> Age :{el.age}</p>

              <div style={{ display: "flex", padding: "7px 0", gap: "8px" }}>
                <button
                  style={{ padding: "8px 28px " }}
                  onClick={() => removeTodos(el._id!)}
                >
                  delete
                </button>
                <button
                  style={{ padding: "8px 28px " }}
                  onClick={() => handleLink(el._id!)}
                >
                  get by id
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
