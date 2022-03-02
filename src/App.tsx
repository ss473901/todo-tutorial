import React from "react";
import Header from "./component/header/Header";
import styled from "styled-components";
import List from "./component/list/List";

const App: React.FC = () => {
  return (
    <>
      <SContainer>
        <SWrapper>
          <Header />
          <List />
        </SWrapper>
      </SContainer>
    </>
  );
};

export default App;

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
`;

const SWrapper = styled.div`
  width: 80vw;
  height: 90vh;
  margin: 50px;
  background-color: #f2f2f2;
`;
