import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Button, CardBody, TextButton, Title, TitlePreco, TitlePromo } from "./styles";
import { Link, useNavigate } from "react-router-dom";

interface PropsCard {
  "id"?: number;
  "produto"?: string;
  "preco"?: string;
  "promo"?: string;
  "id_categoria"?: string;
  "promoNumber"?: string;
  "imgg"?: string;
  "imgp"?: string;
}

export const Card = (props: PropsCard) => {
  const navigate = useNavigate();
  return (
    <>

        <CardBody>
          <img src={props.imgg} alt=""/>
          <Title>{props.produto}</Title>
          <TitlePreco>R${props.preco}</TitlePreco>
          <TitlePromo>R${props.promo}</TitlePromo>
                        <Button
                        onClick={() => {
                          navigate('/produto/' + props.id)
                        }}>
                          <TextButton>
                             Detalhes
                          </TextButton>
                        </Button>
        </CardBody>
    </>
  );
};

export default Card;
