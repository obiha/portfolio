import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion, useCycle } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const Desktop = () => {

        const theme = useTheme();


        function sendMail(name, email, subject, message) {

                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.set('Authorization', 'Basic ' + btoa('8edcb3860cd33ee0733d8f9604fd4333' + ":" + 'bb20894356ad788e6a563b9eba35fc36'));

                const data = JSON.stringify({
                        "Messages": [{
                                "From": { "Email": email, "Name": name },
                                "To": [{ "Email": "joshua.obiha@hotmail.com", "Name": "Joshua Obiha" }],
                                "Subject": subject,
                                "TextPart": message
                        }]

                });

                // const config = {
                //         method: 'post',
                //         url: 'https://api.mailjet.com/v3.1/send',
                //         data: data,
                //         headers: { 'Content-Type': 'application/json' },
                //         auth: { username: '8edcb3860cd33ee0733d8f9604fd4333', password: 'bb20894356ad788e6a563b9eba35fc36' },
                // };

                const requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: data,
                };

                fetch("https://api.mailjet.com/v3.1/send", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));

        }


        return (
                <div style={{ position: "absolute", backgroundColor: '#FAF9F6', width: '100%', marginTop: "0%", marginLeft: "0%", borderColor: '#FF0000' }}>
                        <div style={{ top: '0', position: 'sticky', width: "100%", backgroundColor: '#FAF9F6', display: 'flex', justifyContent: 'right', marginTop: '0%', padding: '20px', zIndex: '19', }}>
                                <motion.div style={{ marginleft: '2%', marginRight: '2%', marginTop: '0.2%', cursor: 'pointer', verticalAlign: 'middle', justifyContent: 'center', alignItems: 'center' }}
                                        whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}
                                ><a href="#" style={{ color: '#000000', textDecoration: 'none', verticalAlign: 'middle' }}>Home</a>
                                </motion.div>
                                <motion.div style={{ marginleft: '2%', marginRight: '2%', marginTop: '0.2%', cursor: 'pointer', verticalAlign: 'middle' }}
                                        whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}><a style={{ verticalAlign: 'middle' }}>About</a></motion.div>
                                <motion.div style={{ marginleft: '2%', marginRight: '2%', marginTop: '0.2%', cursor: 'pointer', verticalAlign: 'middle' }}
                                        whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}> <a style={{ verticalAlign: 'middle' }}>Skills</a></motion.div>
                                {/* <motion.div style={{ marginleft: '2%', marginRight: '2%', marginTop: '0.2%', cursor: 'pointer', verticalAlign: 'middle' }}
                                        whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}><a style={{ verticalAlign: 'middle' }}>Services</a></motion.div> */}
                                <motion.div style={{ marginleft: '2%', marginRight: '2%', marginTop: '0.2%', cursor: 'pointer', verticalAlign: 'middle' }}
                                        whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}><a style={{ verticalAlign: 'middle' }}>Portfolio</a></motion.div>
                                <motion.div style={{ marginleft: '2%', marginRight: '2%', marginTop: '0.2%', cursor: 'pointer', verticalAlign: 'middle' }}
                                        whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}><a style={{ verticalAlign: 'middle' }}>Contact</a></motion.div>

                                <motion.div style={{ marginleft: '2%', marginRight: '2%', cursor: 'pointer', verticalAlign: 'middle', justifyContent: 'center', alignItems: 'center' }} whileHover={{ scale: 1.1, rotate: 0, color: '#000000' }}>
                                        <a style={{ verticalAlign: 'middle' }}> <IconButton color="inherit" style={{ verticalAlign: 'middle' }}>{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}</IconButton> </a>
                                </motion.div>
                        </div>



                        <div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "#FAF9F6", position: "relative", width: '100%', marginLeft: "0%", marginTop: "0%", backgroundColor: '#FAF9F6' }}>

                                {/*Displays the greetings and Cool Button */}
                                <motion.div
                                        style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%", fontSize: "46px" }}

                                        whileInView={{ backgroundColor: "#FAF9F6", y: 0, transition: { type: "spring", bounce: 0.5, duration: 1.50 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                >
                                        <div style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center" }}>

                                                <motion.button style={{ marginRight: "0%", marginBottom: "1%", marginTop: "2%", outline: 'none', border: 'none', width: '350px', height: '350px', borderRadius: '20%', background: '#FAF9F6', fontSize: "16px", color: "#FFFFFF" }}>

                                                        <img src={require('../images/profile.jpg')} style={{ width: "98%", height: "97%", borderRadius: '20%', zIndex: '2', marginRight: '0%', marginLeft: '0%', marginTop: '0%', filter: "grayscale(100%)" }} />
                                                </motion.button>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center", height: "50%", alignContent: "center", justifyContent: "center" }}>

                                                Joshua Obiha
                                        </div>

                                        {/* @joshuaobiha */}
                                        {/* <motion.div style={{ width: "1em", height: "1em", float: "right", marginRight: "4%", marginTop: "1%", borderRadius: '50%', textAlign: "center", background: "#000000" }}
                                                whileHover={{ scale: 1.1, rotate: 0, }}
                                                whileTap={{ scale: 0.9, background: "#FFFFFF" }} >
                                        </motion.div> */}






                                </motion.div>

                                <motion.div
                                        style={{ backgroundColor: "#FAF9F6", height: '22em', borderRadius: '9px', marginTop: "2%", marginLeft: "1%", marginRight: "1%", marginBottom: "2%", }}
                                        whileInView={{ backgroundColor: "#FAF9F6", y: 0, transition: { type: "spring", bounce: 0.5, duration: 1.5 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                >
                                        {/* <h1 class="display-1" style={{ marginLeft: "4%", paddingTop: "1%" }}>Hey!</h1> */}

                                        <div style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                                <p style={{width: "50%", fontSize: "20px", alignItems: "center", justifyContent: "center" }} class="text-left">
                                                        I'm a recent Computer Science graduate with a passion for the intersection of technology and design. Currently seeking roles in web development & data analysis to further advance my skills and bring innovative web solutions to life</p>

                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", marginTop: "1%"}}>
                                        <button type="button" class="btn btn-dark btn-secondary" data-toggle="tooltip" data-placement="top" title="Send Email" style={{ marginRight: '1%', marginLeft: '41.5%' }} onClick={() => window.location = 'mailto:joshua.obiha@hotmail.com'}>
                                                        GET IN TOUCH</button>
                                                {/* <button style={{ marginLeft: '1%', marginRight: '1%' }} type="button" class="btn btn-outline-dark">RESUME</button> */}
                                                <a style={{ marginLeft: '1%', marginRight: '1%' }} type="button" href="https://drive.google.com/file/d/1Sn2xVLNpKZkFkYs1KCi8GemCwIn0pjm8/view?usp=sharing" class="btn btn-outline-dark">PDF Resume</a>
                                        </div>

                                </motion.div>

                                {/* Selected Work div to be made a component//////////////////////////////////////////////////////////////// */}
                                <div style={{ backgroundColor: '#FAF9F6', borderBottomLeftRadius: "0px", borderRadius: "0px", marginLeft: "2%", marginRight: "2%", marginTop: '1%', marginBottom: "1%", color: "#FAF9F6", display: 'flex', justifyContent: "center" }}>


                                        <motion.div style={{ height: '250px', width: '350px', backgroundColor: "#000000", marginLeft: "2%", marginRight: "2%", marginTop: "2%", marginBottom: '2%', borderRadius: "9px", zIndex: '1' }}
                                                whileHover={{ scale: 1.2, rotate: 0 }}
                                        >
                                                <img src={require('../images/exp.jpg')} style={{ width: "100%", height: "100%", borderRadius: '9px', zIndex: '2', marginRight: '2%', marginLeft: '0%', marginTop: '0%' }} />

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity: '40%', borderRadius: "9px",
                                                        backgroundColor: '#000000', marginRight: '2%', marginLeft: '0%', marginTop: '0%',
                                                }} class="shadow p-3" >
                                                        EXPERIENCE
                                                </div>
                                        </motion.div>


                                        <motion.div style={{ height: '250px', width: '350px', backgroundColor: "#000000", marginLeft: "2%", marginRight: "2%", marginTop: "2%", marginBottom: '2%', borderRadius: "9px", zIndex: '1' }}
                                                whileHover={{ scale: 1.2, rotate: 0 }}
                                        >
                                                <img src={require('../images/skills.jpg')} style={{ width: "100%", height: "100%", borderRadius: '9px', zIndex: '2', marginRight: '2%', marginLeft: '0%', marginTop: '0%' }} />

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity: '40%', borderRadius: "9px",
                                                        backgroundColor: '#000000', marginRight: '2%', marginLeft: '0%', marginTop: '0%',
                                                }} class="shadow p-3" >
                                                        SKILLS
                                                </div>
                                        </motion.div>

                                        <motion.div style={{ height: '250px', width: '350px', backgroundColor: "#000000", marginLeft: "2%", marginRight: "2%", marginTop: "2%", marginBottom: '2%', borderRadius: "9px", zIndex: '1' }}
                                                whileHover={{ scale: 1.2, rotate: 0 }}
                                        >
                                                <img src={require('../images/proj.jpg')} style={{ width: "100%", height: "100%", borderRadius: '9px', zIndex: '2', marginRight: '2%', marginLeft: '0%', marginTop: '0%' }} />

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity: '40%', borderRadius: "9px",
                                                        backgroundColor: '#000000', marginRight: '2%', marginLeft: '0%', marginTop: '0%',
                                                }} class="shadow p-3" >
                                                        PORTFOLIO
                                                </div>
                                        </motion.div>

                                        <motion.div style={{ height: '250px', width: '350px', backgroundColor: "#000000", marginLeft: "2%", marginRight: "2%", marginTop: "2%", marginBottom: '2%', borderRadius: "9px", zIndex: '1' }}
                                                whileHover={{ scale: 1.2, rotate: 0 }}
                                        >
                                                <img src={require('../images/proj.jpg')} style={{ width: "100%", height: "100%", borderRadius: '9px', zIndex: '2', marginRight: '2%', marginLeft: '0%', marginTop: '0%' }} />

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity: '40%', borderRadius: "9px",
                                                        backgroundColor: '#000000',
                                                        marginRight: '2%', marginLeft: '0%', marginTop: '0%',
                                                }} class="shadow p-3" >
                                                        CURRENT WORK
                                                </div>
                                        </motion.div>
                                </div>


                                {/* Just a Gap Div */}
                                <div style={{ textAlign: "center", height: "10em", backgroundColor: "#FAF9F6" }}>

                                </div>
                        </div>

                        {/* <div style={{ marginLeft: '4%', marginRight: '4%' }}>

                                <form>
                                        <div style={{ width: '20em' }} class="form-group">
                                                <label> First Name: </label>
                                                <input class="form-control form-control-lg" type="text" name="firstname" />
                                        </div>

                                        <div style={{ width: '20em' }} class="form-group">
                                                <label> Last Name: </label>
                                                <input class="form-control form-control-lg" type="text" name="lastname" />
                                        </div>
                                        <div style={{ width: '20em' }} class="form-group">
                                                <label> Email: </label>
                                                <input type="email" class="form-control form-control-lg" name="emailInput" />
                                        </div>
                                        <div style={{ width: '20em' }} class="form-group">
                                                <label> Message: </label>
                                                <input class="form-control form-control-lg" type="text" name="message" />
                                        </div>


                                        <input type="submit" class="btn btn-primary" value="Submit" />


                                </form>





                        </div> */}



                        {/* Footer Should be made a component  */}
                        {/* <div style={{ backgroundColor: "#808080" }}>
                                <div style={{ backgroundColor: "#808080", paddingBottom: "0%", paddingTop: "0%", textAlign: "center", marginBottom: "0" }}>
                                        <a href="https://www.linkedin.com/in/joshuaobiha/" class="link-dark"> <LinkedInIcon color="#00b8ff" fontSize="large" style={{ marginRight: '1%', marginTop: '2%' }} /></a>
                                        <a href="https://github.com/obiha" class="link-dark"> <GitHubIcon color="#00b8ff" fontSize="large" style={{ marginRight: '1%', marginTop: '2%' }} /></a></div>


                                <h4 style={{ marginLeft: "2%", paddingTop: "0%" }}>How I built this</h4>
                                <div style={{ marginLeft: "2%" }}><p><a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="link-primary">React.js</a> | <a href="material-ui.com/" target="_blank" rel="noreferrer" class="link-primary">material UI</a> | <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer" class="link-primary">Framer Motion Animation Library</a> | <a href="https://github.com/obiha/portfolio" target="_blank" rel="noreferrer" class="link-primary">Github Repository</a></p></div>
                                <div style={{ textAlign: "center" }}> <p style={{ paddingBottom: "3%" }}> &copy; 2022 - Joshua Obiha</p></div>
                        </div> */}

                </div>
        )

}

export default Desktop