import { Container } from "../components/Container";
import { Cover } from "../components/Cover";
import { getCountryes } from "../service/API";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router";

const CountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const StyledInput = styled.input``;

export const Countryes = () => {
  const [countryes, setCountryes] = useState(null);
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    (async () => {
      const countryes = await getCountryes();
      setCountryes(countryes);
    })();
  }, []);

  useEffect(() => {
    if (!countryes) {
      return;
    }

    const f = countryes.filter((item) =>
      item.strCountry.toLowerCase().includes(filter.toLowerCase()),
    );
    setFiltered(f);
  }, [countryes, filter]);

  return (
    <Cover>
      <Container>
        <h1>Країни</h1>
        <StyledInput
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Пошук"
        />
        {countryes && (
          <CountryList>
            {filtered.map((item) => (
              <NavLink key={item.strCountry} to={item.strCountry}>
                {item.strCountry}
              </NavLink>
            ))}
          </CountryList>
        )}
      </Container>
    </Cover>
  );
};
