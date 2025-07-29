import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import EngineeringDisciplinesPage from './pages/EngineeringDisciplinesPage';
import MechanicalEngineeringPage from './pages/MechanicalEngineeringPage';
import ElectricalEngineeringPage from './pages/ElectricalEngineeringPage';
import ComputerEngineeringPage from './pages/ComputerEngineeringPage';
import CivilEngineeringPage from './pages/CivilEngineeringPage';
import AutomotiveEngineeringPage from './pages/AutomotiveEngineeringPage';
import AerospaceEngineeringPage from './pages/AerospaceEngineeringPage';
import NuclearEngineeringPage from './pages/NuclearEngineeringPage';
import ChemicalEngineeringPage from './pages/ChemicalEngineeringPage';
import MarineEngineeringPage from './pages/MarineEngineeringPage';
import IndustrialEngineeringPage from './pages/IndustrialEngineeringPage';
import SatelliteEngineeringPage from './pages/SatelliteEngineeringPage';
import BiomedicalEngineeringPage from './pages/BiomedicalEngineeringPage';
import EnvironmentalEngineeringPage from './pages/EnvironmentalEngineeringPage';
import MaterialsEngineeringPage from './pages/MaterialsEngineeringPage';
import SteamEnginesPage from './pages/SteamEnginesPage';
import BridgesPage from './pages/BridgesPage';
import AerospacePage from './pages/AerospacePage';
import AutomobilesPage from './pages/AutomobilesPage';
import RoboticsPage from './pages/RoboticsPage';
import SleeveValveEnginePage from './pages/SleeveValveEnginePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d97706%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2245%22%20cy%3D%2245%22%20r%3D%222%22/%3E%3Cpolygon%20points%3D%2230%2C5%2035%2C15%2025%2C15%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/engineering-disciplines" element={<EngineeringDisciplinesPage />} />
          <Route path="/mechanical-engineering" element={<MechanicalEngineeringPage />} />
          <Route path="/electrical-engineering" element={<ElectricalEngineeringPage />} />
          <Route path="/computer-engineering" element={<ComputerEngineeringPage />} />
          <Route path="/civil-engineering" element={<CivilEngineeringPage />} />
          <Route path="/automotive-engineering" element={<AutomotiveEngineeringPage />} />
          <Route path="/aerospace-engineering" element={<AerospaceEngineeringPage />} />
          <Route path="/nuclear-engineering" element={<NuclearEngineeringPage />} />
          <Route path="/chemical-engineering" element={<ChemicalEngineeringPage />} />
          <Route path="/marine-engineering" element={<MarineEngineeringPage />} />
          <Route path="/industrial-engineering" element={<IndustrialEngineeringPage />} />
          <Route path="/satellite-engineering" element={<SatelliteEngineeringPage />} />
          <Route path="/biomedical-engineering" element={<BiomedicalEngineeringPage />} />
          <Route path="/environmental-engineering" element={<EnvironmentalEngineeringPage />} />
          <Route path="/materials-engineering" element={<MaterialsEngineeringPage />} />
          <Route path="/steam-engines" element={<SteamEnginesPage />} />
          <Route path="/bridges" element={<BridgesPage />} />
          <Route path="/aerospace" element={<AerospacePage />} />
          <Route path="/automobiles" element={<AutomobilesPage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/sleeve-valve-engine" element={<SleeveValveEnginePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;