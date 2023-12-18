import "./header.scss";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/yellow.svg";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={logoImg} />
      <button onClick={() => navigate("/createPost")}>Add new task</button>
    </div>
  );
}
