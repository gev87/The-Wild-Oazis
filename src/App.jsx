import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";


const StyledApp = styled.main`
  background-color: var(--color-grey-100);
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as = "h1">The Wild Oasis</Heading>
         <Heading as = "h2">The Wild Oasis</Heading>
          <Heading as = "h3">The Wild Oasis</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
