import React from "react";
import * as s from "./styles";
import NotFound from "../../assets/images/notfound.svg";
import Loading from "../../assets/images/logo_animated.svg";
import Erro from "../../assets/images/logo_animated.svg";
import Ok from "../../assets/images/logo_animated.svg";
export default function StatusNotification({ text, type = "OK", marginTop }) {
  const types = { LOADING: {img:Loading, alt:"Carregando conteudo."},
   NOT_FOUND: {img:NotFound, alt:"Nada encontrado."}, ERROR: {img:Erro,alt:"Algo errado aconteceu."}, OK: {img:Ok, alt:"Status ok."} };

  return (
    <s.StatusNotification style={{marginTop: marginTop}}>
      <p>
        <img src={types[type].img} alt={types[type].alt} />
        {text}
      </p>
    </s.StatusNotification>
  );
}
