import { MantineProvider } from "@mantine/core";
import { themeMantine } from "./providers/theme";
import { RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import { router } from "./router/router";

function App() {
  return (
    <MantineProvider theme={themeMantine}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
