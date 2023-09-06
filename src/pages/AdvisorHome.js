import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../../src/Images/image1-logo.png'
import { GoHome } from "react-icons/go";
import { PiSquaresFourLight } from "react-icons/pi";
import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const sideBarList = [
    {
        logo: <GoHome style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'Home'
    },
    {
        logo: <AiOutlineComment style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'All Request'
    },
    {
        logo: <AiOutlineUser style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'Assigned Requests'
    },
    {
        logo: <PiSquaresFourLight style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'Consultation'
    },
    {
        logo: <DescriptionOutlinedIcon style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'Knowledge Base'
    },
    {
        logo: <HiOutlineUsers style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'Users'
    },
    {
        logo: <CiUser style={{color:'#B9BBBD', fontSize: 25}}/>,
        text: 'Profile'
    }
]
const AdvisorHome = () => {
  return (
    <Box sx={{ display: 'flex', height: '1080px' }}>
      <Box sx={{overflow: 'hidden' }} p={2}>
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.05)', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 7 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} m={2}>
            <img src={Image1} alt='' width='235px' />
          </Box>
          <Box mx={2} my={5}>
            <List>
                {sideBarList.map((label)=>(<ListItem sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px', marginTop: 1, width: '252px', padding: '16px 24px 16px 24px' }}>
                    <Box>
                        {label.logo}
                    </Box>
                    <Typography ml={2} sx={{ fontSize: 16, color: '#464255'}}>{label.text}</Typography>
                </ListItem>))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AdvisorHome