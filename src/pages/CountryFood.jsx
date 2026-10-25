import { Cover } from "../components/Cover";
import { Container } from "../components/Container";
import { useParams } from "react-router";

export const CountryFood = () => {
  const { country } = useParams();
  return (
    <Cover>
      <Container>
        <h1>{country}</h1>
      </Container>
    </Cover>
  );
};
