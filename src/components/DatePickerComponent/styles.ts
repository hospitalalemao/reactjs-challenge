import styled from 'styled-components';
import { ButtonHeader } from '../Table/styles';

const DatePickerButton = styled(ButtonHeader)`
  color: var(--title-color);
  & > h3 {
    margin-right: 10px;
  }
`;

export default DatePickerButton;
