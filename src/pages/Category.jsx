import { Cover } from "../components/Cover";
import { Container } from "../components/Container";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getCategoryById } from "../service/API";

export const Category = () => {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  useEffect(() => {
    (async () => {
      const cat = await getCategoryById(id);
      setCat(cat);
    })();
  }, [id]);

  return (
    <Cover>
      <Container>
        {cat && (
          <>
            <h1>{cat.strCategory}</h1>
          </>
        )}
      </Container>
    </Cover>
  );
};
