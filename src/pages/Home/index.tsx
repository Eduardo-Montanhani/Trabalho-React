
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { Menu } from "../../components/Menu"
import { CardBody } from "./styles"
import { Title } from "./styles"
import { TitlePreco } from "./styles"
import { TitlePromo } from "./styles"
import { Button } from "./styles"
import { TextButton } from "./styles"
import axios, { AxiosError } from "axios"


interface IreqCard {
  "id": number;
  "produto": string;
  "preco": string;
  "promo": string;
  "id_categoria": string;
  "promoNumber": string;
  "imgg": string;
  "imgp": string;


}

export const Home = () => {
  const [dataCard, setDataCard] = useState<IreqCard[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cards')
      .then((res) => {
        setDataCard(res.data);
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
          paddingRight: '6%'
        }}
      >
        <h2>Produtos em destaque:</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {
            dataCard.map((card) => {
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  produto={card.produto}
                  preco={card.preco}
                  promo={card.promo}
                  imgg={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + card.imgg}
                />
              )
            })
          }

        </div>
      </div>

    </>

  )
}
