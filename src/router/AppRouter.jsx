import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage, HeroesRoutes, MarvelPage } from "../heroes"
import { LoginPage } from "../auth/pages"


export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="login" element={ <LoginPage /> } />

                <Route path="/*" element={ <HeroesRoutes /> } />
            </Routes>
        </>
    )
}
