import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  box-shadow: 1px 0px 10px 5px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  thead {
    background-color: #1e90ff;
  }
  tbody {
    text-align: center;
  }
  tr:nth-of-type(even) {
    background-color: #81d4fa;
  }
  th {
    font-family: "Poppins";
    font-weight: 500;
    text-align: center;
    border: none;
    color: #fff;
    padding: 10px 15px;
    background: #4a4949;
    font-size: 18px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  td {
    font-family: "Poppins";
    font-weight: 400;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 16px;
    vertical-align: top;
  }
`;
