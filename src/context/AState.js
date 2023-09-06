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
            logo: <GoHome style={{ height: '24px', width: '21px' }}/>,
            text: 'Home',
            subText: 'Welcome to Farm DSS Advisor Panel',
            id: 0
        },
        {
            logo: <AiOutlineComment style={{ height: '28px', width: '28px' }}/>,
            text: 'All Request',
            subText: 'Farm DSS Advisor Panel',
            id: 1
        },
        {
            logo: <AiOutlineUser style={{ height: '28px', width: '28px' }}/>,
            text: 'Assigned Requests',
            subText: 'Farm DSS Advisor Panel',
            id: 2
        },
        {
            logo: <PiSquaresFourLight style={{ height: '28px', width: '28px' }}/>,
            text: 'Consultation',
            subText: 'Farm DSS Advisor Panel',
            id: 3
        },
        {
            logo: <DescriptionOutlinedIcon style={{ height: '23px', width: '23px' }}/>,
            text: 'Knowledge Base',
            subText: 'Farm DSS Advisor Panel',
            id: 4
        },
        {
            logo: <HiOutlineUsers style={{ height: '23px', width: '23px' }}/>,
            text: 'Users',
            subText: 'Farm DSS Advisor Panel',
            id: 5
        },
        {
            logo: <CiUser style={{ height: '23px', width: '23px' }}/>,
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