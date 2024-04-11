import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface ContatosComID {
  id: number;
  nome: string;
  telefone: number;
  email: string;
  cidade: string;
  areatext: string;
}

export const Lista = () => {
  const [dataLista, setDataLista] = useState<ContatosComID[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/pessoas')
      .then((res) => {
        setDataLista(res.data);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      })
  }, []);

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <h2>Lista de Contatos</h2>
        <Table>
          <thead>
            <THtr>
              <THTh>Nomes do Cliente</THTh>
              <THTh></THTh>
              <THTh></THTh>
            </THtr>
          </thead>
          <tbody>
            {dataLista.map((contato) => (
              <TBTr>
                <Td>{contato.nome}</Td>
                <Td>
                  <Button onClick={() => {
                          navigate('/contatos/' + contato.id)
                        }}>
                    Detalhes
                  </Button>
                </Td>
              </TBTr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
