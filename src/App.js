import styled from "@emotion/styled";

import { PrimaryButton, TonicButton } from "./components/Button/Button";

export function App() {
  return (
    <div>
      <h1>
        Design system with <em>Storybook</em> and <em>React</em>
      </h1>

      <ButtonsContainer>
        <PrimaryButton>Primary button</PrimaryButton>

        <TonicButton>Tonic button</TonicButton>
      </ButtonsContainer>
    </div>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
