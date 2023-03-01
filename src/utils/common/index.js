import {monthNames} from '../../constants/monthNames';

export const getFormattedDateFromUtcDate = (utcDate) => {
  const date = new Date(utcDate);
  return `${date.getDate()}
      ${monthNames[date.getMonth()]}, 
      ${date.getFullYear()}, ${date.getTimezoneOffset()}`;
};
