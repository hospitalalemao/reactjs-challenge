import { useSpring, animated } from 'react-spring';
import ReactTooltip from 'react-tooltip';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import formatNumber from '../../utils/formatNumber';
import * as S from './styles';
import * as Global from '../GlobalStyledComponents';

export default function InformationCard({
  title = '',
  value = 0,
  valueDiff = 0,
  positiveIsGood = false,
  isOnlyInt = true,
}: InformationCardProps) {
  const isGood = valueDiff >= 0 === positiveIsGood;

  const { number } = useSpring({
    reset: false,
    from: { number: value / 2 },
    to: { number: value },
    delay: 100,
  });
  const helperText =
    'Esse valor representa a diferença<br />entre a data atual<br /> em relação ao dia anterior';
  const formattedValueDiff = formatNumber(Math.abs(valueDiff));

  const animatedNumber = number.interpolate((val) =>
    formatNumber(isOnlyInt ? Math.floor(val) : val)
  );

  return (
    <Global.Box>
      <>
        <S.TitleCard>{title}</S.TitleCard>
        <S.MainValue isGood={isGood}>
          <animated.div>{animatedNumber}</animated.div>
        </S.MainValue>
        <S.DiffValue isGood={isGood} data-tip={helperText}>
          <span>{valueDiff >= 0 ? <FaArrowUp /> : <FaArrowDown />}</span>
          {formattedValueDiff}
        </S.DiffValue>
        <ReactTooltip place="bottom" type="dark" multiline />
      </>
    </Global.Box>
  );
}

interface InformationCardProps {
  title: string;
  value: number;
  valueDiff?: number;
  positiveIsGood?: boolean;
  isOnlyInt?: boolean;
}

InformationCard.defaultProps = {
  valueDiff: '',
  positiveIsGood: true,
  isOnlyInt: true,
};
