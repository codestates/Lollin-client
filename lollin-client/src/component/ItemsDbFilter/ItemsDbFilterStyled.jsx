import styled from "styled-components";

export const ItemsFilter = styled.div`
  display: grid;
  place-items: center;
  max-width: 1440px;
  min-width: 700px;
  background-color: #0000007d;
  border: 0.1rem solid #ffffff37;
  width: 80%;
  margin-top: 20px;
  color: white;

  .lastBox {
    border: none;
  }
`;

export const CheckBoxArea = styled.div`
  width: 80%;
  display: grid;
  place-items: center;
  padding: 20px;
  font-size: 1.1rem;
  border-bottom: 0.1rem solid #ffffff37;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
  }

  input {
  }

  div {
    width: 9rem;
  }

  label {
    margin-left: 10px;
  }

  .filterText {
    font-size: 1.4rem;
    text-align: center;
  }
`;
