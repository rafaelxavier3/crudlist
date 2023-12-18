import { Form } from "../../components/Form";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const navigate = useNavigate();

  function handleCreatePost(data) {
    api.post("/posts", data);
    navigate("/");
    reset();
  }

  return (
    <div>
      <Form
        title={"Criar tarefa"}
        textButton={"Criar"}
        onAction={handleCreatePost}
      />
    </div>
  );
}
