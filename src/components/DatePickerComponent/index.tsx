import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import { format, subDays } from 'date-fns';
import { forwardRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { setDateFilter } from '../../features/dateFilter';
import DatePickerButton from './styles';

registerLocale('pt', pt);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CustomInput = forwardRef(({ value, onClick }, ref) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <DatePickerButton onClick={onClick} ref={ref}>
    <h3>{format(new Date(value), 'dd/MM/yyyy')}</h3>
    <FaCalendarAlt />
  </DatePickerButton>
));
CustomInput.displayName = 'CustomInputDataPicker';

export default function DatePickerComponent() {
  // @ts-expect-error: Unreachable code error
  const { date } = useSelector((state) => state.dateFilter);
  const dispatch = useDispatch();
  const YEAR = 2020;
  const MONTH = 1;
  const DAY = 22;
  const maxDate = subDays(new Date(), 1);
  const minDate = new Date(YEAR, MONTH, DAY);

  const handleChange = (selectedDate: string) => {
    dispatch(setDateFilter(selectedDate));
  };

  return (
    <DatePicker
      withPortal
      locale="pt"
      minDate={minDate}
      maxDate={maxDate}
      selected={new Date(date)}
      showDisabledMonthNavigation
      onChange={(selectedDate) => handleChange((selectedDate || '').toString())}
      customInput={<CustomInput />}
    />
  );
}
