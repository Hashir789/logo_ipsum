import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import AdvisorSidebar from './components/AdvisorSidebar';
import { Box } from '@mui/material';
import AState from './context/AState';
import AdvisorTopBar from './components/AdvisorTopBar';

const App = () => {
  return (
    <>
    <AState>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <AdvisorSidebar/>
        <AdvisorTopBar/>
        <Router>
          <Routes>
          </Routes>
        </Router>
      </Box>
    </AState>
    </>
  )
}

export default App