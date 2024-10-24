import { CookieBanner } from "../components/CookieBanner/CookieBanner";
import { Header } from "../components/Header/Header";
import { HeaderText } from "../components/Header/HeaderText/HeaderText";
import { Navigation } from "../components/Header/Navigation/Navigation";

import { Main } from "../components/Main/Main"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <>
         <Header>
          <HeaderText />
          <Navigation />
         </Header>
         <Main>
          <CookieBanner />
          <Outlet />
         </Main>
        </>
    )
}