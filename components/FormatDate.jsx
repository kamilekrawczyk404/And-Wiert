import React from "react";

const getNameOfDay = (date) => {
  return ["Nd.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."][date.getDay()];
};

const getNameOfMonth = (date) => {
  return [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ][date.getMonth()];
};
const FormatDate = ({ dateAsString, className = "" }) => {
  const date = new Date(dateAsString);

  const formatted = `${getNameOfDay(date)} ${date.getDate()} ${getNameOfMonth(
    date,
  )}, ${date.getFullYear()}, ${date.getHours()}:${date.getSeconds()}`;
  return <span className={className}>{formatted}</span>;
};

export default FormatDate;
