import { Box, Typography, Button, Container } from '@mui/material'
import React, {useContext} from 'react'
import aContext from '../context/aContext';
import Image2 from '../Images/image2-graph.png'
import Calendar from '../components/Calendar';

const Home = () => {
    const context = useContext(aContext);
    const { chats, homeCards } = context;
  return (
    <Box style={{fontFamily: 'Poppins, sans-serif'}} mx={{xl: 6, lg: 3, sm: 2}} my={2} sx={{ height: {xl: '83vh', lg: '82vh', sm: '80vh'}, boxSizing: 'border-box', display: 'flex', flexDirection: 'row'}}>
        <Box sx={{width: '70%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'space-between'}}  pt={{xl: 4, lg: 2, sm: 2}}>
            <Box sx={{height: {xl: '12vw', lg: '9vw', sm: '9vw'}, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} mx={2}>
                {homeCards.map((label)=>(<Box sx={{width: {xl: '15vw', lg: '12vw', sm: '12vw'}, height: {xl: '12vw', lg: '9vw', sm: '9vw'}, bgcolor: '#FFF6EF', borderRadius: '1vw', display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'space-between', boxSizing: 'border-box'}} py={{xl: 2, lg: 2, sm: 2}}>
                    <Box ml={1.5}>
                        <Typography sx={{color: '#27364E', fontSize: '1vw', fontWeight: 550}}>{label.heading}</Typography>
                    </Box>
                    <Box ml={1.5}>
                        <Typography sx={{color: '#27364E', fontSize: {xl: '5vw', lg: '3.25vw', sm: '3vw'}, fontWeight: 700}}>{label.num}</Typography>
                    </Box>
                    <Box ml={1.5}>
                        <Typography sx={{color: 'rgba(0,0,0,0.8)', fontSize: '0.75vw'}}>{label.text}</Typography>
                    </Box>
                </Box>))}
            </Box>
            <Box sx={{width: '100%', height: '55vh', boxSizing: 'border-box'}} px={2}>
                <Container sx={{width: '100%', height: '100%', border: '0.1vw solid #c4c4c4', boxSizing: 'border-box', borderRadius: '1vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Box>
                        <Typography sx={{fontSize: '1.15vw', fontWeight: 500, width: '100%'}} textAlign={'center'}>Overview Stats</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: '1.35vw', fontWeight: 600, width: '100%'}} textAlign={'center'}>19 Total Request</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9vw', width: '15vw', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Day</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Week</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Month</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Year</Box>
                    </Box>
                    <Box>
                        <img src={Image2} alt='' style={{width: '100%'}}/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9vw', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>May</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>June</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>July</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Aug</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Sep</Box>
                        <Box sx={{color: 'rgba(0,0,0,0.5)'}}>Oct</Box>
                    </Box>
                </Container>
            </Box>
        </Box>
        <Box sx={{width: '30%', height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'space-between', justifyContent: 'space-between', flexDirection: 'column'}}>
            <Box sx={{width: '100%', height: '55%', boxSizing: 'border-box'}} p={1}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography sx={{fontSize: '1.25vw', fontWeight: 'bold'}}>Chat Opened</Typography>
                    <Typography sx={{fontSize: '1vw', color: '#c4c4c4'}}>See all</Typography>
                </Box>
                <Box my={{xl: 7}}>
                    {chats.map((label)=>(<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} mt={{ xl: 4, lg: 2, sm: 2 }}>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Box sx={{ width: '3vw', height: '3vw', borderRadius: '2vw', bgcolor: '#C4C4C4' }}>{label.Image}</Box>
                            <Box ml={1}>
                                <Typography sx={{fontSize: '1vw', fontWeight: 'bold'}}>{label.name}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{color: '#c4c4c4', fontSize: '1vw'}}>{label.date}</Box>
                        <Button sx={{bgcolor: '#C89963', color: 'white', fontSize: '0.5vw', borderRadius: '0.5vw'}}>Open Chat</Button>
                    </Box>))}
                </Box>
            </Box>
            <Box sx={{width: '22.5vw', height: '16vw', border: '0.1vw solid #c4c4c4', borderRadius: '1vw', boxSizing: 'border-box'}} px={2} py={1.5}>
                <Calendar/>
            </Box>
        </Box>
    </Box>
  )
}

export default Home
