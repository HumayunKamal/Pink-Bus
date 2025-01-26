const getDefaultMaxDate = (): string => {
  const today = new Date(); // Store the current date
  const currentDay = today.getDate(); // Get today's date
  const daysToAdd =
    currentDay > 25
      ? 35
      : currentDay > 20
        ? 40
        : currentDay > 10
          ? 50
          : new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() -
            currentDay;

  return new Date(today.setDate(currentDay + daysToAdd))
    .toISOString()
    .split("T")[0];
};

const getMonthMaxDate = (month: number): string =>
  new Date(new Date().setMonth(new Date().getMonth() + month))
    .toISOString()
    .split("T")[0];

export { getDefaultMaxDate, getMonthMaxDate };
