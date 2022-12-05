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

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <DatePickerButton onClick={onClick} ref={ref}>
    <h3>{format(new Date(value), 'dd/MM/yyyy')}</h3>
    <FaCalendarAlt />
  </DatePickerButton>
));
CustomInput.displayName = 'CustomInputDataPicker';

export default function DatePickerComponent() {
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
