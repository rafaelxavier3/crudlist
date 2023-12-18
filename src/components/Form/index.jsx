import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import "./form.scss";

const postSchema = yup.object({
  title: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
});

export function Form({ title, textButton, onAction }) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  async function getDataUpdate() {
    const response = await api.get(`./posts/${id}`);
    reset(response.data);
  }

  useEffect(() => {
    getDataUpdate();
  }, []);

  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")} />
        {errors.title?.message}
      </div>

      <div className="field">
        <textarea placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
