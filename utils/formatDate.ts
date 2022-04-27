const formatDateToTable = (date: Date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};

export default formatDateToTable;