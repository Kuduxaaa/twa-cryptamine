import styled from "styled-components";

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 17px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;