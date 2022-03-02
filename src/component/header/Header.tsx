import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <>
      <SP>TODO</SP>
      <SBox>
        <SInput label="input" id="fullWidth" size="small" />
        <SButton variant="contained" disableElevation color="success">
          SUBMIT
        </SButton>
      </SBox>
    </>
  );
};

export default Header;

const SP = styled.h1`
  text-align: center;
`;
const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SInput = styled(TextField)`
  width: 80%;

`;

const SButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  height: 40px;
`;
