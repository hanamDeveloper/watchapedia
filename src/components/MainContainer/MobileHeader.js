import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../Input";
import Label from "../Label";

const MobileHeaderContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: ${(props) => (props.mobileSearch ? "block" : "none")};
    position: fixed;
    padding: 10px 15px;
    box-sizing: border-box;
    top: 0px;
    left: 0px;
    background-color: #ffff;
    width: 100%;
    height: 62px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 0px 0px;
    z-index: 10;
    margin-bottom: 68px;
  }
`;

function MobileHeader({ history }) {
  const { inputs, mobileSearch } = useSelector((state) => ({
    mobileSearch: state.reducer.mobileSearch,
    inputs: state.reducer.inputs,
  }));

  return (
    <MobileHeaderContainer mobileSearch={mobileSearch}>
      <Label padding="12px 15px 11px 46px">
        <Input
          name="search"
          value={inputs.search}
          history={history}
          fontSize="17px"
          placeholder="작품을 검색해보세요."
        ></Input>
      </Label>
    </MobileHeaderContainer>
  );
}

export default MobileHeader;
