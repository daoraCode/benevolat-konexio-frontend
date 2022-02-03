import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Title from "../components/styled-components/Title";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sessions = styled.div`
  width: 100%;
  margin-left: 60px;
  margin-right: 30px;
  margin-top: 20px;
`;

const List = styled.div`
  margin-top: 22px;
  height: calc(100vh - 135px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #16a8e0;
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #0375bb;
    border-radius: 9999px;
  }
`;

const CardSessions = styled.div`
  /* background-color: #e9e9e9; */
  padding: 15px 20px;
  border-radius: 28px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: black;

  &:hover {
    background-color: ${(props) =>
      props.session === "DigitAll" ? "#F6BC4D" : "#16A8E0"};
  }
`;

const CardTitle = styled.div`
  font-size: 28px;
`;

const CardInfo = styled.div`
  font-size: 16px;
`;

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Sessions>
        <Title>Sessions</Title>
        <List>
          <CardSessions session="DigitAll">
            <Link to="/" className="link link-card">
              <CardTitle>1 Janvier - 3 Février</CardTitle>
              <CardInfo>Place disponibles: 5</CardInfo>
              <CardInfo>Lieu: Paris</CardInfo>
              <CardInfo>Sessions: DigitAll</CardInfo>
            </Link>
          </CardSessions>
          <CardSessions session="DigitStart">
            <Link to="/" className="link link-card">
              <CardTitle>1 Janvier - 3 Février</CardTitle>
              <CardInfo>Place disponibles: 5</CardInfo>
              <CardInfo>Lieu: Paris</CardInfo>
              <CardInfo>Sessions: DigiStart</CardInfo>
            </Link>
          </CardSessions>
        </List>
      </Sessions>
    </Container>
  );
};

export default Home;
