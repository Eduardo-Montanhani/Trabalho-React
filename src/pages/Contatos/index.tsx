import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaTrash } from "react-icons/fa"

interface IContatos {
  id: number;
  nome?: string;
  telefone: string;
  email: string;
  cidade: string
  areatext: string
}

export const Contatos = () => {
  const { id } = useParams()
  const [contato, setContato] = useState<IContatos>()

  useEffect(() => {
    axios.get('http://localhost:3000/pessoas?id=' + id)
      .then((response) => {
        setContato(response.data[0])
      })
      .catch((error) => {
        console.error('Erro ao carregar contato:', error)
      })
  }, [])

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
        {
          contato ?
            <>
              <h2>Detalhes Clientes</h2>

              <Table>
                <thead>
                  <THtr>
                    <THTh
                      style={{
                        minWidth: 300
                      }}>
                      Nome</THTh>
                    <THTh>Telefone</THTh>
                    <THTh>Email</THTh>
                    <THTh>Cidade</THTh>
                    <THTh>Observação</THTh>
                  </THtr>
                </thead>
                <tbody>
                  <TBTr>
                    <Td width={300}>{contato.nome}</Td>
                    <Td>{contato.telefone}</Td>
                    <Td>{contato.email}</Td>
                    <Td>{contato.cidade}</Td>
                    <Td>{contato.areatext}</Td>
                  </TBTr>
                </tbody>
              </Table>
            </>
            :
            <h2>Nenhum Contato encontrado!</h2>
        }

      </div>
    </>
  )
}
