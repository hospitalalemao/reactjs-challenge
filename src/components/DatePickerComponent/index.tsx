import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import { format, subDays } from 'date-fns';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { setDateFilter } from '../../features/dateFilter';
import * as S from './styles';

registerLocale('pt', pt);

export default function DatePickerComponent() {
  const { date } = useSelector((state) => state.dateFilter);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const YEAR = 2020;
  const MONTH = 1;
  const DAY = 22;
  const maxDate = subDays(new Date(), 1);
  const minDate = new Date(YEAR, MONTH, DAY);

  const handleChange = (selectedDate: string) => {
    dispatch(setDateFilter(selectedDate));
    setIsOpen(!isOpen);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <S.DatePickerContainer>
      <S.DatePickerButton onClick={handleClick}>
        <h3>{format(new Date(date), 'dd/MM/yyyy')}</h3>
        <FaCalendarAlt />
      </S.DatePickerButton>
      {isOpen && (
        <DatePicker
          inline
          locale="pt"
          minDate={minDate}
          maxDate={maxDate}
          selected={new Date(date)}
          showDisabledMonthNavigation
          onChange={(selectedDate) =>
            handleChange((selectedDate || '').toString())
          }
        />
      )}
    </S.DatePickerContainer>
  );
}
