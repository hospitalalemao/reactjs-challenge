import { Dna } from 'react-loader-spinner';
import * as Global from '../GlobalStyledComponents';

export default function Loading() {
  return (
    <Global.CenterContainer>
      <Dna
        visible
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <Global.Title>Carregando...</Global.Title>
    </Global.CenterContainer>
  );
}
