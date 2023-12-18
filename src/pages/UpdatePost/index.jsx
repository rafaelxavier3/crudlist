import { Form } from "../../components/Form";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect } from "react";

export function UpdatePost() {
  const navigate = useNavigate();
  const { id } = useParams();

  function handleUpdatePost(data) {
    api.put(`/posts/${id}`, data);
    navigate("/");
  }

  return (
    <div>
      <Form
        title={"Atualizar tarefa"}
        textButton={"Editar"}
        onAction={handleUpdatePost}
      />
    </div>
  );
}
