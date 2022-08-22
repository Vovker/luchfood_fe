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
import {Corners} from "./components/corners/corners";
import {CornerItemPage} from "./components/corners/cornerItemPage/cornerItemPage";
import {About} from "./components/about/about";
import {Gallery} from "./components/gallery/gallery";
import {NewsItemPage} from "./components/news/newsItemPage/newsItemPage";
import 'moment/locale/ru';
import {routes} from "./routes/routes";
import 'antd/dist/antd.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPageWrapper>
        <Router>
          <Routes>
            <Route path={routes.home} element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path={`${routes.corners}/*`} element={<Outlet/>}>
                <Route index element={<Corners/>}/>
                <Route path=":cornerId" element={<CornerItemPage/>}/>
              </Route>
              <Route path={`${routes.news}/*`} element={<Outlet/>}>
                <Route index element={<News/>}/>
                <Route path=":newsId" element={<NewsItemPage/>}/>
              </Route>
              <Route path={`${routes.afisha}/*`} element={<Outlet/>}>
                <Route index element={<Afisha/>}/>
                <Route path=":afishaId" element={<AfishaItemPage/>}/>
              </Route>
              <Route path={routes.about} element={<About/>}/>
              <Route path={routes.gallery} element={<Gallery/>}/>
            </Route>
          </Routes>
        </Router>
      </MainPageWrapper>
    </ThemeProvider>
  );
}

export default App;
