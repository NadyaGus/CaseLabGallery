import { MantineProvider } from "@mantine/core";
import { themeMantine } from "./providers/theme";
import { Header } from "../components/header/header";
import { Gallery } from "../components/gallery/gallery";

import "@mantine/core/styles.css";
import { PhotoStore } from "./store/photoStore";

function App() {
  const photoStore = new PhotoStore();
  return (
    <MantineProvider theme={themeMantine}>
      <Header />

      <Gallery store={photoStore} />
    </MantineProvider>
  );
}

export default App;
