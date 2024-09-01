import { Anchor, Container, Title } from "@mantine/core";

export const Header = () => {
  return (
    <header>
      <Container bg={"blue"} fluid p={"md"} mb={40}>
        <Title c={"white"} ta={"center"}>
          Case Lab Gallery
        </Title>

        <Anchor
          href="http://localhost:8055/admin/files"
          display={"block"}
          c={"white"}
          ta={"center"}
          mt={16}
          fw={"bold"}
          target="_blank"
        >
          Upload more photos
        </Anchor>
      </Container>
    </header>
  );
};
