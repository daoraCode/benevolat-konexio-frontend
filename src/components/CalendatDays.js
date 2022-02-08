import React, { useContext } from "react";
import styled from "styled-components";
import { ListSessionsContext } from "../context/ListSessions";

import moment from "moment";
import "moment/dist/locale/fr";

const CalendarDay = styled.div`
  width: 125px;
  height: 90px;
  position: relative;
  /* border: 1px solid #a6a6a6; */
  margin: 8px;
  border-radius: 5px;
  background: ${(props) =>
    props.isSessionDay ? "#81b5d4" : "rgba(196, 196, 196, 0.25)"};
  /* color: white; */
  
  &:hover {
    /* color: white; */
    background-color: ${(props) =>
      props.isSessionDay ? "#025e96" : "rgba(0, 0, 0, 0.1)"};
  }
`;

const CalendarContent = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`;

const CalendarNumber = styled.p`
  /* color: ${(props) => (props.isSessionDay ? "#ffffff" : "#000000")}; */
  /* color: #000000; */
  position: absolute;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 9999px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  top: 7px;
`;

const CalendatDays = () => {
  const { session } = useContext(ListSessionsContext);

  let fistDayOfMonth = new Date(
    moment(session.startDate).year(),
    moment(session.startDate).month(),
    1
  );
  let weekdayOfFirstDay = fistDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      fistDayOfMonth.setDate(fistDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      fistDayOfMonth.setDate(
        fistDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      fistDayOfMonth.setDate(fistDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth:
        fistDayOfMonth.getMonth() === moment(session.startDate).month(),
      date: new Date(fistDayOfMonth),
      month: fistDayOfMonth.getMonth(),
      number: fistDayOfMonth.getDate(),
      selected:
        moment(fistDayOfMonth).format("YYYY-MM-DD") ===
        moment(session.startDate).format("YYYY-MM-DD"),
      year: fistDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  const isSessionDay = (day) => {
    const date = moment(day.date).format("YYYY-MM-DD");
    const startDate = moment(session.startDate).format("YYYY-MM-DD");
    const endDate = moment(session.endDate).format("YYYY-MM-DD");

    if (day.currentMonth) {
      const isBetween = moment(date).isBetween(startDate, endDate);
      const isSameStart = moment(date).isSame(startDate);
      const isSameEnd = moment(date).isSame(endDate);

      return isBetween || isSameEnd || isSameStart;
    }
  };

  const reserveDay = () => {
    
  }

  return (
    <CalendarContent>
      {currentDays.map((day, i) => (
        <CalendarDay
          key={i}
          isSessionDay={isSessionDay(day)}
          className={`
          ${day.currentMonth ? "current" : ""}
          ${""}
          ${day.selected ? "selected" : ""}
          `}
          // onClick={() => props.changeCurrentDay(day)}
          isCurrent={day.currentMonth}
        >
          <CalendarNumber isSessionDay={isSessionDay(day)}>
            {day.number}
          </CalendarNumber>
        </CalendarDay>
      ))}
    </CalendarContent>
  );
};

export default CalendatDays;
