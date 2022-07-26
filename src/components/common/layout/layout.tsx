import React from "react";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Outlet} from "react-router-dom";
import {LayoutWrapper, ContentWrapper} from "./styled";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header/>
      <ContentWrapper>
        <Outlet/>
      </ContentWrapper>
      <Footer/>
    </LayoutWrapper>
  )
}