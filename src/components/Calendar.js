import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
// import aContext from '../context/aContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Calendar = () => {
    const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];      
    const date = new Date();
    const [Month, setMonth] = useState(months[date.getMonth()])
    const [Year, setYear] = useState(date.getFullYear())
      let temp2 = -1;
    function generateFiveWeekMonth(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();        
        const firstDay = new Date(year, month, 1).getDay();      
        const weeks = Array(5).fill(0);
        let dayNumber = 1;
        for (let weekIndex = 0; weekIndex < 5; weekIndex++) {
          for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            if (weekIndex === 0 && dayIndex < firstDay) {
              weeks[weekIndex * 7 + dayIndex] = 0;
            } else if (dayNumber <= daysInMonth) {
              weeks[weekIndex * 7 + dayIndex] = dayNumber;
              dayNumber++;
            } else {
              weeks[weekIndex * 7 + dayIndex] = 0;
            }
          }
        }
        return weeks;
      }
      const calendarDates = generateFiveWeekMonth(Year, months.indexOf(Month));
      const handleClickRight = () =>{
        const monthh = months.indexOf(Month)
        const firstDayOfMonth = new Date(Year, monthh + 1, 1);
        setMonth(months[firstDayOfMonth.getMonth()])
        setYear(firstDayOfMonth.getFullYear())
      }
      const handleClickLeft = () =>{
        const monthh = months.indexOf(Month)
        const firstDayOfMonth = new Date(Year, monthh - 1, 1);
        setMonth(months[firstDayOfMonth.getMonth()])
        setYear(firstDayOfMonth.getFullYear())
      }
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', alignitems: 'center', justifyContent: 'start', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', alignitems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography sx={{fontSize: '1.5vw', color: 'black', fontWeight: 'bold'}}>{Month}&nbsp;</Typography>
                <Typography sx={{fontSize: '1.5vw', color: '#D14C48', fontWeight: 'bold'}}>{Year}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{height: '2vw', width: '2.5vw', bgcolor: '#f3f3f3', borderTopLeftRadius: '0.75vw', borderBottomLeftRadius: '0.75vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }} mr={0.2}><ChevronLeftIcon onClick={handleClickLeft} style={{width: '2vw', color: '#b3b3b3'}}/></Box>
                <Box sx={{height: '2vw', width: '2.5vw', bgcolor: '#f3f3f3', borderTopRightRadius: '0.75vw', borderBottomRightRadius: '0.75vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRightIcon style={{width: '2vw', color: '#b3b3b3'}} onClick={handleClickRight}/></Box>
            </Box>
        </Box>
        <Box sx={{ width: '100%', height: '2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>SUN</Typography></Box>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>MON</Typography></Box>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>TUE</Typography></Box>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>WED</Typography></Box>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>THU</Typography></Box>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>FRI</Typography></Box>
            <Box><Typography sx={{ color: '#919095', fontSize: '1vw' }}>SAT</Typography></Box>
        </Box>
        <Box sx={{ width: '100%', height: '2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
        </Box>
        <Box sx={{ width: '100%', height: '2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
        </Box>
        <Box sx={{ width: '100%', height: '2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
        </Box>
        <Box sx={{ width: '100%', height: '2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
        </Box>
        <Box sx={{ width: '100%', height: '2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
            <Box sx={{width: '2.25vw', height: '1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{width: '1.5vw', height: '1.5vw', bgcolor: '#ECECEC', borderRadius: '1vw', display: calendarDates[++temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center', fontSize: '1vw'}}>{calendarDates[temp2]}</Box>
                <Box sx={{width: '2.25vw', height: '0.5vw', display: !calendarDates[temp2]?'flex':'none', alignItems: 'center', justifyContent: 'center' }}><Box sx={{width: '0.5vw', height: '0.5vw', bgcolor: '#D9D9D9', borderRadius: '1vw'}}></Box></Box>
            </Box>
        </Box>
    </Box>
    )
}

export default Calendar
