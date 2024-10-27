const monthsBr = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export function formatPeriodBr(period: string) {
  const [month, year] = period.split('-');

  const monthName = monthsBr[parseInt(month, 10) - 1];
  return `${monthName} de ${year}`;
}
