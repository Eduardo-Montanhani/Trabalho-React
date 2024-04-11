import { FormEvent, useState } from "react";
import axios from "axios";
import { Menu } from "../../components/Menu";
import { FormContainer } from "./styles";

export const Contato = () => {


  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [areatext, setAreatext] = useState("");

  function criarTarefa(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = '';

    axios.post('http://localhost:3000/pessoas', {nome, telefone, email, cidade, areatext })
      .then((res) => {
        console.log(res.data);
        limparCampos();
      })
      .catch(err => console.error(err));
  }

  function limparCampos() {
    setNome("");
    setTelefone("");
    setEmail("");
    setCidade("");
    setAreatext("");
  }

  return (
    <>
      <Menu />
      <body>
        <FormContainer onSubmit={criarTarefa}>
          <div>
            <h1>Contato</h1>
            <h2>Obrigado por entrar em contato, agradeçemos qualquer sugestão ou melhoria.</h2>

            <label htmlFor="nome">Digite seu nome</label>
            <input type="text" id="nome" required placeholder="Digite o seu nome:" name="nome" value={nome} onChange={e => setNome(e.target.value)} />

            <label htmlFor="telefone">Digite seu número de telefone</label>
            <input type="number" id="telefone" required placeholder="Número de telefone:" name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />

            <label htmlFor="email">Digite seu e-mail</label>
            <input type="email" id="email" required placeholder="Digite seu e-mail:" name="email" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="cidade">Selecione sua cidade</label>
            <select id="cidade" required value={cidade} onChange={e => setCidade(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Umuarama">Umuarama</option>
              <option value="Altonia">Altonia</option>
              <option value="Curitiba">Curitiba</option>
            </select>
            <br />
            <label htmlFor="areatext">Digite sua mensagem</label>
            <textarea id="areatext" value={areatext} onChange={e => setAreatext(e.target.value)}></textarea>

            <button type="submit">Enviar</button>
          </div>
        </FormContainer>
      </body>
    </>
  )
}


