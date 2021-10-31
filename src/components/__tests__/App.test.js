import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  // expect(div.innerHTML).toContain("Comment Box");

  expect(div).toHaveAnInstanceOf(CommentBox);

  ReactDOM.unmountComponentAtNode(div);
});

//////////////////////////////////////////////////////////////////////////////////////////////////
/* 1- todo o bloco de código dentro da função global IT é fornecido pela lib JSDOM do Jest que emula o ambiente do navegador, necessário para a execução de códigos com react. Sendo assim ele cria uma instância de uma div em HTML, dentro somente do nosso terminal para podermos ter o resultado. */
/* 2- ReactDOM olha pra dentro da DIV criada em APP  e verifica. */
/* 3- Para garantir perfomance, em cada teste gerado o unmountCompomenteAtNode apaga a situação do componente da div, recuperando memória do computador. */
/* instale o Enzyme API na versão mais atual do react -> yarn add enzyme enzyme-adapter-react-16 */
//////////////////////////////////////////////////////////////////////////////////////////////////
