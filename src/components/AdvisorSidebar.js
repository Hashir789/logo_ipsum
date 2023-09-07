import { Box, List, ListItem, Typography } from '@mui/material'
import React, {useContext} from 'react'
import Image1 from '../../src/Images/image1-logo.png'
import aContext from '../context/aContext';

const AdvisorSidebar = () => {
    const context = useContext(aContext);
    const { active, setActive, sideBarList } = context;
  return (
    <Box style={{ fontFamily: 'Poppins, sans-serif', height: '100vh', width: '19.5vw', boxSizing: 'border-box' }} 
    px={3} py={3}
    >
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.05)', width: '100%', height: '100%', borderRadius: '2vw', boxSizing: 'border-box' }} px={{xl: 4, lg: 2, sm: 1}}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} py={3}>
                <img src={Image1} alt='' style={{ width: '12vw' }} />
            </Box>
            <Box sx={{ width: '100%' }} py={{xl: 5, lg: 2, sm: 1}}>
                <List>
                    {sideBarList.map((label)=>(<ListItem  sx={{ radius: '1vw', padding: '1vw', bgcolor: label.text===active?'#CA9B64':'inherit', color: label.text===active?'white':'#939393', borderRadius: '0.7vw', display: 'flex', justifyContent: 'left', alignItems: 'center', marginBottom: 1 }} onClick={()=>{setActive(label.text)}}>
                        <Box mr={1} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>{label.logo}</Box>
                        <Box sx={{ color: label.text===active?'white':'#939393' }}><Typography sx={{ fontSize: '1vw' }}>{label.text}</Typography></Box>
                    </ListItem>))}
                </List>
            </Box>
        </Box>
    </Box>
  )
}

export default AdvisorSidebar
