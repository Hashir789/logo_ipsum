import { Box, List, ListItem, Typography } from '@mui/material'
import React, {useContext} from 'react'
import Image1 from '../../src/Images/image1-logo.png'
import { GoHome } from "react-icons/go";
import { PiSquaresFourLight } from "react-icons/pi";
import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import aContext from '../context/aContext';

const sideBarList = [
    {
        logo: <GoHome style={{ height: '24px', width: '21px' }}/>,
        text: 'Home',
    },
    {
        logo: <AiOutlineComment style={{ height: '28px', width: '28px' }}/>,
        text: 'All Request'
    },
    {
        logo: <AiOutlineUser style={{ height: '28px', width: '28px' }}/>,
        text: 'Assigned Requests'
    },
    {
        logo: <PiSquaresFourLight style={{ height: '28px', width: '28px' }}/>,
        text: 'Consultation'
    },
    {
        logo: <DescriptionOutlinedIcon style={{ height: '23px', width: '23px' }}/>,
        text: 'Knowledge Base'
    },
    {
        logo: <HiOutlineUsers style={{ height: '23px', width: '23px' }}/>,
        text: 'Users'
    },
    {
        logo: <CiUser style={{ height: '23px', width: '23px' }}/>,
        text: 'Profile'
    }
]
const AdvisorSidebar = () => {
    const context = useContext(aContext);
    const { active, setActive } = context;
  return (
    <Box sx={{ padding: '22px 19px' }}>
        <Box sx={{ width: '310px', height: '1129px', borderRadius: '33px', border: '1px solid #FFFFFF', bgcolor: 'rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ width: '235px', height: '54px' }} my={3}>
                <img src={Image1} alt=''/>
            </Box>
            <Box sx={{ width: '252px' }} my={5}>
                <List>
                    {sideBarList.map((label)=>(<ListItem style={{ margin: 0, marginBottom: '16px' }}ListItem sx={{ width: '252px', height: '60px', radius: '12px', padding: '16px, 24px, 16px, 24px', bgcolor: label.text===active?'#CA9B64':'inherit', color: label.text===active?'white':'#939393', borderRadius: '12px', display: 'flex', justifyContent: 'left', alignItems: 'center' }} onClick={()=>{setActive(label.text)}}>
                        <Box mr={1} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>{label.logo}</Box>
                        <Box sx={{ color: label.text===active?'white':'#939393' }}><Typography sx={{ fontSize: '16px' }}>{label.text}</Typography></Box>
                    </ListItem>))}
                </List>
            </Box>
        </Box>
    </Box>
  )
}

export default AdvisorSidebar
