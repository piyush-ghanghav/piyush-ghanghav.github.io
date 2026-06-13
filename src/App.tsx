import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Resume from './pages/Resume';
import Logger from './pages/Logger';
import { ThemeProvider } from './components/ThemeProvider';

/**
 * Routing structure:
 * /          → Single-page portfolio (all sections scroll)
 * /resume    → Resume page (keeps own layout)
 * /logger    → Secret activity logger (no nav, easter egg access only)
 *
 * Removed routes: /about, /projects, /credentials, /contact
 * All content now lives as scroll sections inside Index.
 */
const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        {/* Main portfolio — Layout provides navbar */}
        <Route element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        <Route path="resume" element={<Resume />} />
        <Route path="logger" element={<Logger />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;