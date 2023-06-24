import { useContext } from "react"
import { UserContext } from "./components/providers/UserContext"
import { RoutesMain } from "./route/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle.js"
import { GlobalReset } from "./styles/reset.js"
import { ToastContainer} from 'react-toastify'

function App() {
  const {loading} = useContext(UserContext)
  return (
    <>
    <GlobalReset/>
    <GlobalStyle/>
    <div className="App">{loading ? <p>Carregando...</p> : <RoutesMain />}</div>
    <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </>
  )
}

export default App
