import { Anchor, Container, Title } from "@mantine/core";

import { BASE_URL } from "../../app/variables";

export const Header = () => {
  return (
    <header>
      <Container bg={"blue"} fluid p={"md"} mb={40}>
        <Title c={"white"} ta={"center"}>
          Case Lab Gallery
        </Title>

        <Anchor
          href={`${BASE_URL}/admin/files`}
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
