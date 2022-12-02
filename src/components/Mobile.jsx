import React, { useState, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Mobile = () => {
        return (<div style={{ position: "absolute", backgroundColor: '#FFFFFF', height: '90%', width: '100%', marginTop: "1%", marginLeft: "0%", borderRadius: '9px' }}>

        <div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "#FFFFFF", position: "relative", width: '98%', marginLeft: "1%", marginTop: "1%", borderRadius: '9px', }}>
            <div style={{ marginLeft: "4%", marginRight: "2%", marginTop: "5%", marginBottom: "5%", fontSize: "46px" }}>@joshuaobiha
                <div style={{ backgroundColor: "#FFFFFF", width: "1em", height: "1em", float: "right", marginRight: "5%", borderRadius: '9px', textAlign: "center" }}>
                    <button type="button" class="btn btn-outline-dark">Dark</button> </div></div>

            <div style={{ backgroundColor: "#FFFFFF", height: '12em', borderRadius: '9px', marginTop: "54%", marginLeft: "1%", marginRight: "1%", marginBottom: "1%", textAlign: "center" }}>

                <p class="text-right">Hey! My name is Joshua Obiha and I'm seeking roles in Web Development</p>
            </div>
            <div style={{ textAlign: "center", marginBottom: "3em" }}>
                {/* <button type="button" class="btn btn-dark">GET IN TOUCH</button> */}
                <a type="button" href="../resumedir/Resume.pdf" class="btn btn-outline-dark">PDF Resume</a> </div>

       
            <div style={{ backgroundColor: "#FFFFFF", height: '5em', borderBottomLeftRadius: "9px", borderBottomRightRadius: "9px"}}>
                <h1>Selected Work</h1>
               

            </div>

            <div style={{ backgroundColor: "#FFFFFF", height: '5em', borderBottomLeftRadius: "9px", borderBottomRightRadius: "9px" }}>
            <h1>More Work</h1>
              

            </div>
        </div>
        <div  style={{ backgroundColor: "#FF6F6F",marginBottom:"0"}}>
            <h3 style={{marginLeft:"2%",paddingTop:"2%"}}>How I built this</h3>
            <div style={{ backgroundColor: "#FF6F6F", paddingBottom:"10%", textAlign: "center", marginBottom:"0"}}>
                
                    <LinkedInIcon style={{marginRight:'1%', marginTop:'2%'}} />
                    <GitHubIcon  style={{marginRight:'1%', marginTop:'2%'}}/>

                </div>
                <p style={{paddingBottom:"5%",paddingLeft:"2%"}}> &copy; 2022 - Joshua Obiha</p>

            </div>
    </div>)
}
export default Mobile