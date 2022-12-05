const formatNumber = (number: number) => {
  return new Intl.NumberFormat('pt-BR').format(number);
};
export default formatNumber;
