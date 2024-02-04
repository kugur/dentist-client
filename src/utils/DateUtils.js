const dateToString = (date) => {
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  } else {
    return date;
  }
};

export { dateToString };
