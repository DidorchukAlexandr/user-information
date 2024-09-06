import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: Poppins;
  background-color: fffff;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  padding: 15px 20px;
  height: 50px;
  width: 400px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 30px;

  &:hover,
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 4px 9px 0px #332b3646;
    transition: all 0.2s linear, opacity 0.2s ease-in-out;
  }
`;
