import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardSessions = styled.div`
  /* background-color: #e9e9e9; */
  padding: 15px 20px;
  border-radius: 28px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: black;
  width: ${props => props.site === 'calendar' ? '50%' : 'calc(100% - 40px)' };
  background: ${props => props.site === 'calendar' ? "#E9E9E9" : 'none'};

  &:hover {
    background: ${(props) =>
      props.site === 'sessions' ? 
      props.session === "DigitAll" ? "#F6BC4D" : "#16A8E0" : "#E9E9E9"};
  }
`;

const CardTitle = styled.p`
  font-size: 28px;
`;

const CardInfo = styled.p`
  font-size: 16px;
`;

const CardSession = (props) => {
  const { programName, sessionId, start, end, numberOfPlace, adress, site } = props

  return (
    <CardSessions session={programName} site={site} >
      <Link to={`/sessions/${sessionId}`} className="link link-card">
        <CardTitle>
          {start} - {end}
        </CardTitle>
        <CardInfo>Places disponibles: {numberOfPlace}</CardInfo>
        <CardInfo>Lieu: {adress}</CardInfo>
        <CardInfo>Sessions: {programName}</CardInfo>
      </Link>
    </CardSessions>
  );
};

export default CardSession;
