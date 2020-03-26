import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsaap, setWhatsaap] = useState("");
  const [city, setCity] = useState("");
  const [uf, setuf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      city,
      whatsaap,
      uf
    };
    try {
      const response = await api.post("ongs", data);

      alert(`Seu ID de acesso:${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro,tente novamente");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="BE the Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadatro,entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link " to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsaap}
            onChange={e => setWhatsaap(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={e => setuf(e.target.value)}
              style={{ widht: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
