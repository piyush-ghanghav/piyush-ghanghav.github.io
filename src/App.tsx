import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Credentials from './pages/Credentials';  
import Projects from './pages/Projects';
import { ThemeProvider } from './components/ThemeProvider';
import Logger from "./pages/Logger";
import Resume from './pages/Resume'; 
import { Contacts } from './pages/Contacts';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="credentials" element={<Credentials />} />
            <Route path="logger" element={<Logger />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;