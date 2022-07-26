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
import './styles.css';
import {Layout} from "./components/common/layout/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPageWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </Router>
      </MainPageWrapper>
    </ThemeProvider>
  );
}

export default App;
