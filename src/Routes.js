import { Routes as Rotas, Route } from "react-router-dom"
import Home from "./pages/Home";

const Routes = () => {
    return (
        <Rotas>
            <Route path="/" element={<Home />} />


        </Rotas>
    )
}


export default Routes