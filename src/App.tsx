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
import {Footer} from "./components/common/footer/footer";

function App() {
  return (
    <div id={'root'}>
      <ThemeProvider theme={theme}>
        <MainPageWrapper>
          <Header/>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </Router>
          <Footer/>
        </MainPageWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
