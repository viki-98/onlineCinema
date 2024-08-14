import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import Router from "./pages/Router.tsx"
import { BrowserRouter } from "react-router-dom"
import TProvider from "./provider.tsx"
import { Provider } from "react-redux"
import { store } from "./store"


createRoot(document.getElementById("root")!).render(
    <StrictMode>

        <BrowserRouter>
            <Provider store={store}>
                <TProvider>
                    <Router></Router>
                </TProvider>
            </Provider>
        </BrowserRouter>

    </StrictMode>
)
