// import React from "react";
import { memo } from "react";
import styled from "styled-components";

export const UserInfo = memo(({ nameUserInfo }) => {
  return (
    <div>
      <HeaderStyle>
        <header>
          <div>
            <p>{nameUserInfo}</p>
          </div>
        </header>
      </HeaderStyle>
    </div>
  );
});

const HeaderStyle = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  min-height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
`;
