import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from "./components/home/home";
import './styles.css';
import {Soon} from "./components/soon/soon";
import {Layout} from "./components/common/layout/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="soon" element={<Soon/>}/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
