import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Routes,
  Route, Outlet,
} from "react-router-dom";
import {MainPageWrapper} from "./components/common/pageWrappers/mainPageWrapper/mainPageWrapper";
import {Home} from "./components/home/home";
import './styles.css';
import {Layout} from "./components/common/layout/layout";
import {News} from "./components/news/news";
import {Afisha} from "./components/afisha/afisha";
import {AfishaItemPage} from "./components/afisha/afishaItemPage/afishaItemPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPageWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="news" element={<News/>}/>
              <Route path="afisha/*" element={<Outlet/>}>
                <Route index element={<Afisha/>}/>
                <Route path=":afishaId" element={<AfishaItemPage/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </MainPageWrapper>
    </ThemeProvider>
  );
}

export default App;
