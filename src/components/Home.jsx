import React from 'react'
import Navigation from './Navigation';
import Header from './Header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';


const Home = () => {
    return (
        <div style={{ position: "absolute", backgroundColor: '#01050B', height: '90%', width: '100%', marginTop: "1%", marginLeft: "0%", borderRadius: '9px' }}>

            <div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "#000000", position: "relative", backgroundColor: '#00000', width: '98%', marginLeft: "1%", marginTop: "1%", borderRadius: '9px', }}>
            <div style={{ color: "#FFFFFF", marginLeft: "2%", marginRight: "2%", marginTop: "5%",marginBottom: "5%", fontSize:"46px" }}>@joshuaobiha <div style={{backgroundColor:"#000000", width:"1em",height:"1em", float:"right", marginRight:"3%",borderRadius: '9px', textAlign:"center"}}>   </div></div>

                <div style={{ backgroundColor: "#FFFFFF", height: '42em', borderRadius: '9px', marginTop: "1%", marginLeft: "1%", marginRight: "1%", marginBottom: "1%", textAlign: "center" }}>
                   
                   
                   Hey! My name is Joshua Obiha and I'm seeking new grad roles in Software Development in 2023 

                </div>

                <div style={{ color: "#FFFFFF", marginLeft: "2%", marginRight: "2%", marginTop: "2%", fontSize:"26px" }}>Name</div>

                <div style={{ backgroundColor: "#FFFFFF", height: '42em', borderRadius: '9px', marginTop: "1%", marginLeft: "1%", marginRight: "1%", marginBottom: "1%", textAlign: "center" }}>
                   
                   
                   Currently enrolled at Carleton University, with a graudation date of December 2022

                   Driven by curiosity and a drive to learn new things, I started out my program. Creating things is a great passion of mine; whether thats in music composition,  

                </div>

                <div style={{ backgroundColor: "#FFFFFF", height: '10em', borderBottomLeftRadius:"9px", borderBottomRightRadius:"9px", textAlign: "center" }}>

                    <LinkedInIcon color='secondary' />
                    <GitHubIcon />

                </div>








            </div>
        </div>
    )
}




export default Home