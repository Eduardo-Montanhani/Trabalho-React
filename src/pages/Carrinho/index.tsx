import { useNavigate } from "react-router-dom"
import { Menu } from "../../components/Menu";
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles";
import { FaTrash } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { Produto } from "../Produtos";
import { formataValorBR } from "../../services/format";

export const Carrinho = () => {
  const navigate = useNavigate();

  const [dataCarrinho, setDataCarrinho] = useState<Array<ICarrinho>>([])

  const [valorTotal, setValorTotal] = useState<number>(0)

  const atualizarValorTotal = useCallback(
    (carrinho: Array<ICarrinho>) => {
      let total = 0
      carrinho.forEach((produto) => {
        total = produto.total + total
      })
      setValorTotal(total)
    }, [])

  useEffect(() => {
    let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')

    let carrinho: Array<ICarrinho> = []

    if (typeof lsCarrinho === 'string') {
      carrinho = JSON.parse(lsCarrinho)
    }

    if (carrinho.length > 0) {
      setDataCarrinho(carrinho)
      atualizarValorTotal(carrinho)
    }
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
        <h2>Carrinho de compras</h2>

        <Table>
          <thead>
            <THtr>
              <THTh></THTh>
              <THTh
                style={{
                  minWidth: 300
                }}>
                Nome do Produto</THTh>
              <THTh>Quantidade</THTh>
              <THTh>Valor Unit</THTh>
              <THTh>Valor Total</THTh>
              <THTh>Ações</THTh>
            </THtr>
          </thead>
          <tbody>
            {
              dataCarrinho.map((produto) => {
                return (
                  <TBTr key={produto.id}>
                    <Td>{
                     <img src={
                      'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'
                      +
                      produto.imgp
                    }/>
                    }</Td>
                    <Td width={300}>{produto.produto}</Td>
                    <Td>{produto.quantidade}</Td>
                    <Td>{formataValorBR(produto.promo)}</Td>
                    <Td>{formataValorBR(produto.total)}</Td>
                    <Td>
                      <Button
                        type="button"
                      >
                        <TextButton >
                          <FaTrash />
                        </TextButton>
                      </Button>
                    </Td>
                  </TBTr>
                )
              })
            }

          </tbody>
          <tfoot>
            <TBTr>
              <Td width={300}>Valor Total:</Td>
              <Td></Td>
              <Td></Td>
              <Td>{formataValorBR(valorTotal)}</Td>
              <Td></Td>
            </TBTr>
          </tfoot>
        </Table>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Button
            type="button">
            <TextButton>Limpar Carrinho</TextButton>
          </Button>
          <Button
            type="button"
            bgColor="green">
            <TextButton>Finalizar pedido</TextButton>
          </Button>

        </div>
      </div>
    </>
  )
}
