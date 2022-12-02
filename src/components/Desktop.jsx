import React, { useState, useEffect } from 'react'
import Navigation from './Navigation';
import Header from './Header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const Desktop = () => {


        return (
                <div style={{ position: "absolute", backgroundColor: '#FFFFFF', height: '100%', width: '100%', marginTop: "1%", marginLeft: "0%", borderRadius: '9px' }}>

                        <div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "#FFFFFF", position: "relative", width: '98%', marginLeft: "1%", marginTop: "1%", borderRadius: '9px', }}>
                                <div style={{ marginLeft: "4%", marginRight: "2%", marginTop: "5%", marginBottom: "5%", fontSize: "46px" }}>@joshuaobiha
                                        <div style={{ width: "1em", height: "1em", float: "right", marginRight: "5%", borderRadius: '9px', textAlign: "center" }}>
                                                <button type="button" class="btn btn-outline-dark">Dark</button> </div></div>

                                <div style={{ backgroundColor: "#FFFFFF", height: '22em', borderRadius: '9px', marginTop: "7%", marginLeft: "1%", marginRight: "1%", marginBottom: "1%",}}>
                                       <h1 class="display-1" style={{ marginLeft: "4%", paddingTop: "1%" }}>Hey!</h1>
                                       
                                        <p style={{ marginLeft: "4%", paddingTop: "2%", width:"60%", fontSize:"20px" }} class="text-left">
                                                
                                                My name is Joshua Obiha, a recent Computer Science graudate. Currently exploring the intersection of Technology, Business and Design  and I'm seeking roles in Web Development</p>

                                                <div style={{marginBottom: "10em", marginLeft:"3%"}}>
                                        <button style={{ marginRight: '1%', marginLeft: '1%' }} type="button" class="btn btn-dark">GET IN TOUCH</button>
                                        <button style={{ marginLeft: '1%', marginRight: '1%' }} type="button" class="btn btn-outline-dark">RESUME</button>
                                        {/* <a type="button" href="../resumedir/Resume.pdf" class="btn btn-outline-dark">PDF Resume</a>  */}
                                </div>
                                </div>

                                <div style={{ backgroundColor: "#000000", height: '29em', borderBottomLeftRadius: "9px", borderRadius: "9px", marginLeft: "1%", marginRight: "1%", color: "#FFFFFF" }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>Skills</h1>

                                        <div style={{ width: "17%", backgroundColor: "#FFFFFF", marginLeft: "4%", marginRight: "2%", marginTop: "1%", marginBottom: "2%", height: "75%", borderRadius: '9px', }}>
                                                hello

                                        </div>
                                </div>

                                <div style={{ backgroundColor: "#FFFFFF", height: '29em', borderRadius: "9px", borderBottomRightRadius: "9px", marginLeft: "1%", marginRight: "1%", }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>Experience</h1>


                                </div>

                                <div style={{ backgroundColor: "#000000", height: '29em', borderBottomLeftRadius: "9px", borderRadius: "9px", marginLeft: "1%", marginRight: "1%", color: "#FFFFFF" }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>Applied Projects</h1>

                                        <div style={{ width: "17%", backgroundColor: "#FFFFFF", marginLeft: "4%", marginRight: "2%", marginTop: "1%", marginBottom: "2%", height: "75%", borderRadius: '9px', }}>
                                                hello

                                        </div>
                                </div>

                                <div style={{ textAlign: "center", marginBottom: "10em",marginTop: "10em" }}>
                                       
                                       
                                </div>












                        </div>
                        <div style={{ backgroundColor: "#FFFFFF", marginBottom: "0" }}>
                                <h3 style={{ marginLeft: "2%", paddingTop: "2%" }}>How I built this</h3>
                                <div style={{ backgroundColor: "#FFFFFF", paddingBottom: "10%", textAlign: "center", marginBottom: "0" }}>

                                        <LinkedInIcon style={{ marginRight: '1%', marginTop: '2%' }} />
                                        <GitHubIcon style={{ marginRight: '1%', marginTop: '2%' }} />

                                </div>
                                <div style={{ textAlign: "center" }}> <p style={{ paddingBottom: "3%" }}> &copy; 2022 - Joshua Obiha</p></div>


                        </div>

                </div>
        )
}

export default Desktop