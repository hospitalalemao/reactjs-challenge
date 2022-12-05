# Hospital Alemão Oswaldo Cruz - Challenge Front-End ReactJS

Fala Dev! Esse repositório é destinado a entrega do desafio de Front-End em ReactJS.

## Descrição do desafio 
- Desenvolver uma aplicação em ReactJS que deverá consumir uma API fornecida através do RapidAPI ou Any-API (https://rapidapi.com/collection/list-of-free-apis / https://any-api.com/). A escolha da API é livre;
- Clonar o repositório do HAOC referente a este desafio;
- Criar um branch com o nome "*front-end-SEUNOME*";
- Realizar um pull request da sua branch com o projeto finalizado.

## Pré-requisitos:
- Utilizar Redux
- Componentização
- Consumir a API com Axios

## Diferenciais:
- Utilizar TypeScript
- Visual agradável e limpo

## O que será avaliado:
- Implementação
- Arquitetura, organização e padrões
- Clareza no código
- Comentários no código
- Instruções no readme (MD) para subida do projeto

Caso tenha ficado com alguma dúvida, entre em contato com [desenvolvimento@haoc.com.br](mailto:desenvolvimento@haoc.com.br)

Boa sorte!

# Descrição do projeto
 
A ideia deste [projeto](https://reactjs-challenge-ashen.vercel.app/) foi desenvolver um dashboard sobre a pandemia da COVID-19, utilizando a [Covid 19 Statistics API](https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics) fornecida pela [RapidAPI](https://rapidapi.com/collection/list-of-free-apis).
 
O sistema apresenta informações sobre a quantidade de casos, recuperados e óbitos causados pela doença. Foram implementadas duas telas: Lista dos Países e Detalhes das informações de um determinado país. Na tela da lista dos países é exibida uma lista com o nome e a bandeira de cada país. Essa lista pode ser filtrada pela barra de pesquisa localizada no canto superior direito. 
 
A tela dos detalhes contém as informações de um determinado país. São exibidas as informações: de casos, diferença do número de casos em relação a data anterior, recuperados, diferença do número de recuperados em relação a data anterior, de óbitos, do número de óbitos em relação a data anterior, taxa de fatalidade e diferença da taxa de fatalidade em relação a data anterior. Além disso, é apresentada uma tabela com os estados do país selecionado, no qual é possível ordenar os itens da tabela de forma crescente e decrescente os seguintes campos: nome, casos, recuperados e óbitos. Ao clicar em um dos estados listados na tabela, as informações deste estado aparecem de forma mais detalhada ao lado direito da tabela. Todas as informações podem ser filtradas para uma determinada data, este filtro está localizado no canto superior direito da tela.  
 
## Desenvolvimento
 
- Instalação das dependências:
```
npm install
```
- Acessar a aplicação na porta 3000:
```
npm run dev
```
