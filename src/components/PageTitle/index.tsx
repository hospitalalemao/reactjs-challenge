import DatePickerComponent from '../DatePickerComponent';
import PageTitleContainer from './styles';

export default function PageTitle({
  title,
  withDatePicker,
}: {
  title: string;
  withDatePicker: boolean;
}) {
  return (
    <PageTitleContainer>
      <h1>{title}</h1>
      {withDatePicker && <DatePickerComponent />}
    </PageTitleContainer>
  );
}
