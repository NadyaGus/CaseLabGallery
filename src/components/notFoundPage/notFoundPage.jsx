import { Container } from "@mantine/core";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <NavLink to="/">Go Back</NavLink>
    </Container>
  );
};
