import styled from "@emotion/styled";

const primary700 = "#1f7081";

const Button = styled.button`
  padding: 1rem 4rem;
  border: none;
  border-radius: 0.5rem;

  font-size: 1.5rem;
  font-weight: 700;
`;

export const PrimaryButton = styled(Button)`
  color: white;

  background: ${primary700};
`;
