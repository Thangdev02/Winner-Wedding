import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InvitationProvider } from './context/InvitationContext';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import SelectPackage from './pages/SelectPackage';
import SelectTemplate from './pages/SelectTemplate';
import CreateInvitation from './pages/CreateInvitation';
import ViewInvitation from './pages/ViewInvitation';
import SummaryPage from './pages/SummaryPage';
import About from './pages/About';
import Contact from './pages/Contact';
import PublicInvitation from './pages/PublicInvitation';

function App() {
  return (
    <InvitationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/packages" element={<SelectPackage />} />
            <Route path="/templates" element={<SelectTemplate />} />
            <Route path="/create" element={<CreateInvitation />} />
            <Route path="/view/:id" element={<ViewInvitation />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invitation/:id" element={<PublicInvitation />} />

          </Route>
        </Routes>
      </Router>
    </InvitationProvider>
  );
}

export default App;