import React from "react";
import styled from "styled-components";

const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101113;
  height: 20%;
`;

function CountContainer() {
  return (
    <CountBox>
      <h2>
        지금까지 <span>★ 580,381,025 개의 평가가</span> 쌓였어요.
      </h2>
    </CountBox>
  );
}

export default CountContainer;
