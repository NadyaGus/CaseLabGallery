import { Container, Title } from "@mantine/core";

export const Header = () => {
  return (
    <header>
      <Container bg={"blue"} fluid p={"md"} mb={40}>
        <Title c={"white"} ta={"center"}>
          Case Lab Gallery
        </Title>
      </Container>
    </header>
  );
};
