import * as Global from '../../components/GlobalStyledComponents';

export default function PageNotFound() {
  return (
    <Global.CenterContainer>
      <h1>Erro 404</h1>
      <h3>Nenhuma página foi encontrada nessa rota.</h3>
      <h3> Tente acessar outra página.</h3>
    </Global.CenterContainer>
  );
}
