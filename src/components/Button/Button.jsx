import styled from "@emotion/styled";

import { defaultTheme as theme } from "../../theme";

const Button = styled.button`
  width: fit-content;
  padding: 1rem 4rem;
  border: none;
  border-radius: 0.5rem;

  font-size: ${theme.typography.size.h5};
  font-weight: 700;

  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  color: white;

  background: linear-gradient(
    60deg,
    ${theme.colors.primaryDark},
    ${theme.colors.primary}
  );
`;

export const TonicButton = styled(Button)`
  color: white;

  background: linear-gradient(
    60deg,
    ${theme.colors.tonicDark},
    ${theme.colors.tonic}
  );
`;
