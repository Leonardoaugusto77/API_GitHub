import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

import Git from "./Assets/Imgs/git.png";
import "./index.css";

export default function App() {
  const [login, setLogin] = useState("");

  return (
    <>
      <div className="main_container">
        <img src={Git} width="150px" alt="Logo do GitHub" />
        <h1>Api GitHub</h1>
        <div className="search_container">
          <input
            type="text"
            className="input_value search_input"
            placeholder="Digite o usuário desejado!!!"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <div className="search_button">
            <Link to={`/${login}/repositories`}>
              <MdSearch className="mdSearch" size={35} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
