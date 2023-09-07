import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdvisorSidebar from './components/AdvisorSidebar';
import { Box } from '@mui/material';
import AState from './context/AState';
import AdvisorTopBar from './components/AdvisorTopBar';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <AState>
      <Box sx={{display: 'flex', flexDirection: 'row', boxSizing: 'border-box'}}>
        <AdvisorSidebar/>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <AdvisorTopBar/>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </Box>
      </Box>
    </AState>
    </>
  )
}

export default App