import { RoutesMain } from "./route/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle.js"
import { GlobalReset } from "./styles/reset.js"

function App() {

  return (
    <>
    <GlobalReset/>
    <GlobalStyle/>
    <RoutesMain/>
    </>
  )
}

export default App
