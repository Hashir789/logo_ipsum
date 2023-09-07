import { Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { TbMessageDots } from "react-icons/tb";
import React, {useContext} from 'react'
import aContext from '../context/aContext';

const AdvisorTopBar = () => {
    const context = useContext(aContext);
    const { active, sideBarList } = context;
    console.log(active)
  return (
    <Box>
        <Box sx={{ width: '80.5vw', height: '4vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box'}} px={{xl: 6, lg: 3, sm: 2}} mt={{xl: 4, lg: 3, sm: 2}}>
            <Box sx={{ disply: 'flex', alignItems: 'space-between', justifyContent: 'space-between', flexDirection: 'column', color: '#27364E', width: '40vw'}}>
                <Box><Typography variant='h4' sx={{ fontWeight: 600, fontSize: '1.75vw' }}>{(sideBarList.find(item => item.text === active) || { subText: '' }).text}</Typography></Box>
                <Box sx={{ marginTop: '1vw' }}><Typography variant='h4' sx={{ fontWeight: 400, fontSize: '1vw' }}>{(sideBarList.find(item => item.text === active) || { subText: '' }).subText}</Typography></Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '50vw', height: '7vh', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <input type="text" placeholder="Search here" style={{width: '29vw', height: '4vw', fontSize: '1vw', borderRadius: '0.75vw', padding: '0vw 0vw 0vw 1.5vw', border: 'none', backgroundColor: '#FFF6EF'}} />
                    <Box sx={{ position: 'absolute', right: '1.5vw' }}>
                        <SearchIcon style={{ color: '#27364E', fontSize: '1.5vw' }}/>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '4vw', height: '4vw', borderRadius: '1vw', border: '0.1vw solid #C4C4C4', position: 'relative' }}>
                    <TbMessageDots style={{ width: '1.5vw', height: '1.5vw' }}/>
                    <Box sx={{ position: 'absolute', width: '1.7vw', height: '1.7vw', borderRadius: '0.4vw', border: '0.2vw solid #F3F2F7', bgcolor: '#FFBB54', top: -6, right: -6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.75vw' }}>84</Box>
                </Box>
                <Box sx={{ width: '4vw', height: '4vw', borderRadius: '1vw', bgcolor: '#C4C4C4' }}></Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AdvisorTopBar
