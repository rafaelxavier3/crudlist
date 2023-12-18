import "./card.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function Card({ post, DeletePost }) {
  const navigate = useNavigate();

  function passId() {
    DeletePost(post.id);
  }

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.title}</h2>
        <div className="icons">
          <AiOutlineDelete onClick={passId} size={23} cursor="pointer" />
          <AiOutlineEdit
            onClick={() => navigate(`/updatePost/${post.id}`)}
            size={23}
            cursor="pointer"
          />
        </div>
      </header>
      <p>{post.description}</p>
    </article>
  );
}
