import { Dna } from 'react-loader-spinner';
import LoadingComponentContainer from './styles';
import * as Global from '../InformationCard/styles';

export default function LoadingComponent() {
  return (
    <LoadingComponentContainer>
      <Dna
        visible
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <Global.Title>Carregando...</Global.Title>
    </LoadingComponentContainer>
  );
}
