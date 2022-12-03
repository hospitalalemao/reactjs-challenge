import { Box, Subtitle, MainValue, DiffValue } from './styles';

export default function InformationCard({
  title = '',
  value = 0,
  valueDiff = '',
  positiveIsGood = true,
}: InformationCardProps) {
  const isGood =
    typeof valueDiff === 'string'
      ? valueDiff.includes('-') !== positiveIsGood
      : valueDiff >= 0 === positiveIsGood;
  return (
    <Box>
      <Subtitle>{title}</Subtitle>
      <MainValue>{value}</MainValue>
      <DiffValue isGood={isGood}>{valueDiff}</DiffValue>
    </Box>
  );
}

interface InformationCardProps {
  title: string;
  value: number | string;
  valueDiff?: number | string;
  positiveIsGood?: boolean;
}

InformationCard.defaultProps = {
  valueDiff: '',
  positiveIsGood: true,
};
