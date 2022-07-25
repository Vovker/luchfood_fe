import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {PageWrapper} from "./components/common/pageWrapper/pageWrapper";
import {Home} from "./components/home/home";
import {Header} from "./components/common/header/header";
import './styles.css';
import {Footer} from "./components/common/footer/footer";

function App() {
  return (
    <div id={'root'}>
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Header/>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </Router>
          <Footer/>
        </PageWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
