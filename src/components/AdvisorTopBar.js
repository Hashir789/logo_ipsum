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
        <Box sx={{ width: '1455px', height: '84px', marginTop: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} mx={5}>
            <Box sx={{ disply: 'flex', alignItems: 'space-between', justifyContent: 'space-between', flexDirection: 'column', color: '#27364E', height: '100%', width: '100%' }}>
                <Box sx={{ height: '48px' }}><Typography variant='h4' sx={{ fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>{(sideBarList.find(item => item.text === active) || { subText: '' }).text}</Typography></Box>
                <Box sx={{ width: '288px', height: '24px', marginTop: '12px' }}><Typography variant='h4' sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}>{(sideBarList.find(item => item.text === active) || { subText: '' }).subText}</Typography></Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '794px', height: '76px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <input type="text" placeholder="Search here" style={{width: '550px', height: '70px', fontSize: '16px', borderRadius: '18px', padding: '2px 0px 2px 32px', border: 'none', backgroundColor: '#FFF6EF'}} />
                    <Box sx={{ position: 'absolute', right: '32px' }}>
                        <SearchIcon style={{ color: '#27364E' }}/>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '74px', height: '74px', borderRadius: '22px', border: '1px solid #C4C4C4', position: 'relative' }} ml='20px'>
                    <TbMessageDots style={{ width: '28px', height: '28px' }}/>
                    <Box sx={{ position: 'absolute', width: '34px', height: '34px', borderRadius: '9px', border: '3px solid #F3F2F7', bgcolor: '#FFBB54', top: -4, right: -4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>84</Box>
                </Box>
                <Box sx={{ width: '74px', height: '74px', borderRadius: '22px', bgcolor: '#C4C4C4' }} ml='20px'></Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AdvisorTopBar
