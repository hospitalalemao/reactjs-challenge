import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import { subDays } from 'date-fns';
import { setDateFilter } from '../../features/dateFilter';

registerLocale('pt', pt);

export default function DatePickerComponent() {
  const { date } = useSelector((state) => state.dateFilter);
  const dispatch = useDispatch();
  const YEAR = 2020;
  const MONTH = 1;
  const DAY = 22;
  const maxDate = subDays(new Date(), 1);
  const minDate = new Date(YEAR, MONTH, DAY);

  return (
    <DatePicker
      locale="pt"
      minDate={minDate}
      maxDate={maxDate}
      selected={new Date(date)}
      showDisabledMonthNavigation
      onChange={(selectedDate) =>
        dispatch(setDateFilter((selectedDate || '').toString()))
      }
    />
  );
}
