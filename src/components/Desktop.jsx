import React, { useState, useEffect } from 'react'

import { motion } from "framer-motion";
import Navigation from './Navigation';
import Header from './Header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';








const Desktop = () => {


        const [isOn, setIsOn] = useState(false);

        const toggleSwitch = () => setIsOn(!isOn);

        const spring = {
                type: "spring", stiffness: "70", damping: "30"
        };


        return (
                <div style={{ position: "absolute", backgroundColor: '#FFFFFF', height: '100%', width: '100%', marginTop: "1%", marginLeft: "0%", borderRadius: '9px' }}>

                        <div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "#FFFFFF", position: "relative", width: '98%', marginLeft: "1%", marginTop: "1%", borderRadius: '9px', }}>
                                <div style={{ marginLeft: "4%", marginRight: "2%", marginTop: "5%", marginBottom: "5%", fontSize: "46px" }}>@joshuaobiha


                                        <motion.div style={{ width: "1em", height: "1em", float: "right", marginRight: "4%", marginTop: "1%", borderRadius: '50%', textAlign: "center", background: "#000000" }}
                                                whileHover={{ scale: 1.1, rotate: 0, }}
                                                whileTap={{ scale: 0.9, background: "#FFFFFF" }}>
                                        </motion.div>

                                </div>

                                <div style={{ backgroundColor: "#FFFFFF", height: '22em', borderRadius: '9px', marginTop: "7%", marginLeft: "1%", marginRight: "1%", marginBottom: "1%", }}>
                                        <h1 class="display-1" style={{ marginLeft: "4%", paddingTop: "1%" }}>Hey!</h1>

                                        <p style={{ marginLeft: "4%", paddingTop: "2%", width: "60%", fontSize: "20px" }} class="text-left">

                                                My name is Joshua Obiha, a recent Computer Science graudate. Currently exploring the intersection of Technology, Business and Design  and I'm seeking roles in Web Development</p>

                                        <div style={{ marginBottom: "10em", marginLeft: "3%" }}>
                                                <button type="button" class="btn btn-dark btn-secondary" data-toggle="tooltip" data-placement="top" title="Send Email" style={{ marginRight: '1%', marginLeft: '1%' }} onClick={() => window.location = 'mailto:joshua.obiha@hotmail.com'}>GET IN TOUCH</button>
                                                {/* <button style={{ marginLeft: '1%', marginRight: '1%' }} type="button" class="btn btn-outline-dark">RESUME</button> */}
                                                <a style={{ marginLeft: '1%', marginRight: '1%' }} type="button" href="https://drive.google.com/file/d/10FgDt6_V4YfoZ69Ofp-CVWWJE8bEighh/view" class="btn btn-outline-dark">PDF Resume</a>
                                        </div>
                                </div>

                                <div style={{ backgroundColor: "#000000", height: '29em', borderBottomLeftRadius: "9px", borderRadius: "9px", marginLeft: "1%", marginRight: "1%", color: "#FFFFFF" }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%", paddingBottom: "1%" }}>Skills</h1>

                                        <div style={{ height: "100%", marginLeft: "1%", marginTop: "0%", color: "#000000" }}>
                                                <motion.div
                                                        style={{ float: "left", width: "17%", backgroundColor: "#FFFFFF", marginLeft: "3%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px', textAlign: "center" }}
                                                        whileHover={{ scale: 1.1, rotate: 0 }}>
                                                        <p style={{ marginLeft: "-1%", marginTop: "55%", width: "100%", fontSize: "20px" }} class="text-left">Technical Languages</p>


                                                </motion.div>

                                                <motion.div
                                                        style={{ float: "left", width: "17%", backgroundColor: "#FFFFFF", marginLeft: "1%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px', textAlign: "center" }}
                                                        whileHover={{ scale: 1.1, rotate: 0 }}

                                                >
                                                        <p style={{ marginLeft: "-1%", marginTop: "55%", width: "100%", fontSize: "20px" }} class="text-left">Product</p>
                                                </motion.div>
                                                <motion.div
                                                        style={{ float: "left", width: "17%", backgroundColor: "#FFFFFF", marginLeft: "1%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px', textAlign: "center" }}
                                                        whileHover={{ scale: 1.1, rotate: 0 }}

                                                >
                                                        <p style={{ marginLeft: "-1%", marginTop: "55%", width: "100%", fontSize: "20px" }} class="text-left">Frameworks & Technical</p>
                                                </motion.div>
                                                <motion.div
                                                        style={{ float: "left", width: "17%", backgroundColor: "#FFFFFF", marginLeft: "1%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px', textAlign: "center" }}
                                                        whileHover={{ scale: 1.1, rotate: 0 }}

                                                >
                                                        <p style={{ marginLeft: "-1%", marginTop: "55%", width: "100%", fontSize: "20px" }} class="text-left">Software Tools</p>
                                                </motion.div>

                                        </div>

                                </div>

                                {/* ,  borderStyle: "solid", borderWidth:"thin", borderColor:'#000000' */}
                                {/* 
                                <div style={{ backgroundColor: "#FFFFFF", height: '29em', marginLeft: "1%", marginRight: "1%",marginTop:"2%" ,color: "#000000" }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>Skills</h1>

                                        <div style={{height:"100%", marginLeft:"1%", marginTop:"0%",textAlign: "center", color:"#000000"}}>
                                        
                                        <div style={{float:"left", width: "40%", backgroundColor: "#000000", marginLeft: "8%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px', }}>
                                                hello

                                        </div>
                                        <div style={{float:"left", width: "40%", backgroundColor: "#000000", marginLeft: "1%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px', }}>
                                                hello

                                        </div>
                                     
                                        </div>
                                      
                                </div> */}

                                <div style={{ backgroundColor: "#FFFFFF", height: '29em', borderRadius: "9px", borderBottomRightRadius: "9px", marginLeft: "1%", marginRight: "1%", }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>Experience</h1>


                                        <motion.div
                                                style={{ float: "left", width: "17%", backgroundColor: "#000000", marginLeft: "1%", marginRight: "1%", marginTop: "0%", marginBottom: "2%", height: "75%", borderRadius: '9px' }}
                                                whileHover={{ scale: 1.2, rotate: 0 }}
                                        // whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                                        />

                                </div>

                                <div style={{ backgroundColor: "#000000", height: '29em', borderBottomLeftRadius: "9px", borderRadius: "9px", marginLeft: "1%", marginRight: "1%", color: "#FFFFFF" }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>Applied Projects</h1>

                                        <div style={{ width: "17%", backgroundColor: "#FFFFFF", marginLeft: "4%", marginRight: "2%", marginTop: "1%", marginBottom: "2%", height: "75%", borderRadius: '9px', }}>
                                                hello

                                        </div>
                                </div>

                                <div style={{ textAlign: "center", marginBottom: "10em", marginTop: "10em" }}>


                                </div>












                        </div>
                        <div style={{ backgroundColor: "#F8F9FA" }}>

                                <div style={{ backgroundColor: "#F8F9FA", paddingBottom: "5%", paddingTop: "2%", textAlign: "center", marginBottom: "0" }}>
                                        <a href="https://www.linkedin.com/in/joshuaobiha/" class="link-dark"> <LinkedInIcon style={{ marginRight: '1%', marginTop: '2%' }} /></a>
                                        <a href="https://github.com/obiha" class="link-dark"> <GitHubIcon style={{ marginRight: '1%', marginTop: '2%' }} /></a>



                                </div>
                                <h4 style={{ marginLeft: "2%", paddingTop: "0%" }}>How I built this</h4>
                                <div style={{ marginLeft: "2%" }}><p><a href="#" target="_blank" class="link-primary">React.js</a> | <a href="#" target="_blank" class="link-primary">material UI</a> | <a href="https://www.framer.com/motion/" target="_blank" class="link-primary">Framer Motion Animation Library</a> | <a href="https://github.com/obiha/portfolio" target="_blank" class="link-primary">Github Repository</a></p></div>
                                <div style={{ textAlign: "center" }}> <p style={{ paddingBottom: "3%" }}> &copy; 2022 - Joshua Obiha</p></div>


                        </div>

                </div>
        )
}

export default Desktop