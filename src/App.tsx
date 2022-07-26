import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {MainPageWrapper} from "./components/common/pageWrappers/mainPageWrapper/mainPageWrapper";
import {Home} from "./components/home/home";
import {Header} from "./components/common/header/header";
import './styles.css';
import {Layout} from "./components/common/layout/layout";
import {Footer} from "./components/common/footer/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPageWrapper>
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </Router>
        <Footer/>
      </MainPageWrapper>
    </ThemeProvider>
  );
}

export default App;
