import { MantineProvider } from '@mantine/core'
import { themeMantine } from './providers/theme'
import { Header } from '../components/header/header'

import '@mantine/core/styles.css'

function App() {

  return (
    <MantineProvider theme={themeMantine}>

      <Header />

    </MantineProvider>
  )
}

export default App
