import styled from "@emotion/styled";

const primary500 = "#278ca2";
const primary700 = "#1f7081";

const tonic500 = "#fd9222";
const tonic700 = "#ab5801";

const Button = styled.button`
  width: fit-content;
  padding: 1rem 4rem;
  border: none;
  border-radius: 0.5rem;

  font-size: 1.5rem;
  font-weight: 700;

  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  color: white;

  background: linear-gradient(60deg, ${primary700}, ${primary500});
`;

export const TonicButton = styled(Button)`
  color: white;

  background: linear-gradient(60deg, ${tonic700}, ${tonic500});
`;
