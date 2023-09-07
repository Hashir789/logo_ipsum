import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { PiSquaresFourLight } from "react-icons/pi";
import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AContext from "./aContext";

const AState = (props) =>{
    const [active, setActive] = useState('Home');
    const sideBarList = [
        {
            logo: <GoHome style={{ width: '1.5vw', height: '1.5vw' }}/>,
            text: 'Home',
            subText: 'Welcome to Farm DSS Advisor Panel',
        },
        {
            logo: <AiOutlineComment style={{ width: '1.5vw', height: '1.5vw' }}/>,
            text: 'All Request',
            subText: 'Farm DSS Advisor Panel',
            id: 1
        },
        {
            logo: <AiOutlineUser style={{ height: '1.5vw', width: '1.5vw' }}/>,
            text: 'Assigned Requests',
            subText: 'Farm DSS Advisor Panel',
            id: 2
        },
        {
            logo: <PiSquaresFourLight style={{ height: '1.5vw', width: '1.5vw' }}/>,
            text: 'Consultation',
            subText: 'Farm DSS Advisor Panel',
            id: 3
        },
        {
            logo: <DescriptionOutlinedIcon style={{ height: '1.5vw', width: '1.5vw' }}/>,
            text: 'Knowledge Base',
            subText: 'Farm DSS Advisor Panel',
            id: 4
        },
        {
            logo: <HiOutlineUsers style={{ height: '1.5vw', width: '1.5vw' }}/>,
            text: 'Users',
            subText: 'Farm DSS Advisor Panel',
            id: 5
        },
        {
            logo: <CiUser style={{ height: '1.5vw', width: '1.5vw' }}/>,
            text: 'Profile',
            subText: 'Farm DSS Advisor Panel',
            id: 6
        }
    ]
  return(
        <AContext.Provider value={{active, setActive, sideBarList}}>
            {props.children}
        </AContext.Provider>
    )
}
export default AState;