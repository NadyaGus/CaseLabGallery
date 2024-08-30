import { MantineProvider } from '@mantine/core'
import { themeMantine } from './providers/theme'
import { Header } from '../components/header/header'

import '@mantine/core/styles.css'
import { Gallery } from '../components/gallery/gallery'

function App() {

  return (
    <MantineProvider theme={themeMantine}>

      <Header />

      <Gallery />

    </MantineProvider>
  )
}

export default App
