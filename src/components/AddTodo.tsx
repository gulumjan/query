import { useEffect, useState } from "react";
import { useGetTodosQuery, usePostTodosMutation } from "../redux/api/todo";

const AddTodo = () => {
  const { data: todos, refetch, getTodos } = useGetTodosQuery();
  const [postTodos] = usePostTodosMutation();
  // const [value, setValue] = useState<string>("");

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
      refetch();
    }
  };
  console.log(todos);

  const fetchTodos = async () => {
    await getTodos();
  };
  useEffect(() => {
    fetchTodos();
  }, []);

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
          <ul key={index}>
            <h5 style={{ color: "#fff" }}>{el.username}</h5>
            <h5 style={{ color: "#fff" }}>{el.age}</h5>
            <>
              <img src={el.photoUrl} alt={el.username} width={50} />
            </>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
