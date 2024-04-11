import { useNavigate, useParams } from "react-router-dom" //parametros da url - routes.tsx
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles"
import { SyntheticEvent, useCallback, useEffect, useState } from "react"
import axios from "axios"

interface IProduto {
  id: number;
  produto: string; //valores string ou undefined
  preco: string;
  promo: string;
  id_categoria: number;
  promoNumber: string;
  imgg: string;
  imgp: string;
}

export const Produto = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [produto, setProduto] = useState<IProduto>()
  //tudo que começa com use é um hooks
  useEffect(() => {
    axios.get('http://localhost:3000/cards?id=' + id)
      .then((dados) => {
        //console.log(dados.data)
        setProduto(dados.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  },[id])

  const onSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & { //onde vem os dados do formulario
      quantidade: { value: number}
    }

    if(produto) {
      let qtd = target.quantidade.value

      if (qtd > 0) {
        let objProduto = {
          ...produto, //joga toda variavel produto para ele
          quantidade: qtd,
          total: Number(produto.promo) * qtd
        }
        // localStorage uma memoria do navegador que a gente consegue adicionar valores e dados
        let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')

        let carrinho: Array<ICarrinho> = []

        if(typeof lsCarrinho === 'string') {
          carrinho = JSON.parse(lsCarrinho)
        }

        if (carrinho.length > 0) {

          carrinho.push(objProduto)

          localStorage.setItem(
            '@1pitchau:carrinho',
            JSON.stringify(carrinho) //array de obj produto

          )

        } else {
          localStorage.setItem(
            '@1pitchau:carrinho',
            JSON.stringify([objProduto]) //array de obj produto

          )
        }

        navigate('/carrinho')

      }
    }

  }, [produto])

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
          produto ?
            <>
              <h1>Produto</h1>
              <Row>
                <Col4>
                  <img
                    style={{
                      width: '100%'
                    }}
                    src={
                      'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'
                      +
                      produto.imgg
                    }
                  />
                </Col4>
                <Col6>
                  <h3>{produto.produto}</h3>
                  <p
                    style={{
                      textDecoration: 'line-through'
                    }}
                  >{produto.preco}</p>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: 'red'
                    }}
                  >R${produto.promo}</p>

                  <form
                  onSubmit={onSubmit}>
                    <Input
                      type="number"
                      name="quantidade"
                      defaultValue={1}
                      min="1"
                      required
                    />
                    <Button
                    type="submit"
                    >
                      <TextButton>
                        Adicionar ao Carrinho
                      </TextButton>
                    </Button>
                  </form>
                </Col6>
              </Row>
            </>
            :
            <h2>Nenhum produto encontrado!</h2>
        }



      </div>
    </>
  )
}
