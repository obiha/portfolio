import React, { useState, useEffect } from 'react'
import { motion, useCycle } from "framer-motion";
import Navigation from './Navigation';
import Header from './Header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
 




const Desktop = () => {

        const [isOpen, setIsOpen] = useState(false);

        const onClick = () => {setIsOpen(!isOpen)}

        return (
                <div style={{ position: "absolute", backgroundColor: '#FAF9F6', height: '100%', width: '100%', marginTop: "0%", marginLeft: "0%"}}>
                        <div style={{width:"100%",backgroundColor:'#FAF9F6', display:'flex', justifyContent:'right', marginTop:'1%'}}>
                               <div style={{marginleft:'2%', marginRight:'2%', cursor:'pointer'}}><a>Home</a></div> 
                               <div style={{marginleft:'2%', marginRight:'2%', cursor:'pointer'}}><a>About</a></div>
                               <div style={{marginleft:'2%', marginRight:'2%', cursor:'pointer'}}> <a>Skills</a></div>
                               <div style={{marginleft:'2%', marginRight:'2%', cursor:'pointer'}}><a>Services</a></div>
                               <div style={{marginleft:'2%', marginRight:'2%', cursor:'pointer'}}><a>Portfolio</a></div>
                               <div style={{marginleft:'2%', marginRight:'2%', cursor:'pointer'}}><a>Contact</a></div>
                               </div>                        

                        <div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "#FAF9F6", position: "relative", width: '98%', marginLeft: "1%", marginTop: "0%", borderRadius: '9px', }}>

                                {/*Displays the greetings and Cool Button */}
                                <motion.div 
                                style={{ marginLeft: "5%", marginRight: "1.5%", marginTop: "5%", marginBottom: "5%", fontSize: "46px" }}
                             
                                whileInView={{backgroundColor: "#FAF9F6",y:0,transition: {type: "spring", bounce: 0.5, duration: 1.50}}}
                                viewport={{once: true, amount: 0.8}}
                                >
                                        Joshua Obiha
                                        {/* @joshuaobiha */}
                                        {/* <motion.div style={{ width: "1em", height: "1em", float: "right", marginRight: "4%", marginTop: "1%", borderRadius: '50%', textAlign: "center", background: "#000000" }}
                                                whileHover={{ scale: 1.1, rotate: 0, }}
                                                whileTap={{ scale: 0.9, background: "#FFFFFF" }} onClick={}>
                                        </motion.div> */}
                                        <motion.button style={{ float: "right", marginRight: "4%", marginTop: "1%", outline:'none', border: 'none', cursor: 'pointer', width:'50px', height:'50px', borderRadius:'50%', background:'#000000',fontSize: "16px" , color:"#FFFFFF"}}
                                        whileHover={{ scale: 1.8, rotate: 0, }}
                                        >
                                                {/* {isOpen ? "Yes" : "No"} */}
                                           
                                        <svg width="23" height="23" viewBox='0 0 23 23'></svg>
                                        </motion.button>

                                        

                                </motion.div>

                                <motion.div 
                                style={{ backgroundColor: "#FAF9F6", height: '22em', borderRadius: '9px', marginTop: "17%", marginLeft: "1%", marginRight: "1%", marginBottom: "3%", }}
                                whileInView={{backgroundColor: "#FAF9F6",y:0,transition: {type: "spring", bounce: 0.5, duration: 1.5}}}
                                viewport={{once: true, amount: 0.8}}
                                >
                                        <h1 class="display-1" style={{ marginLeft: "4%", paddingTop: "1%" }}>Hey!</h1>

                                        <p style={{ marginLeft: "4%", paddingTop: "2%", width: "60%", fontSize: "20px" }} class="text-left">
                                                My name is Joshua Obiha, a recent Computer Science graudate. Currently exploring the intersection of Technology, Business and Design  and I'm seeking roles in Web Development</p>
                                        
                                        <div style={{ marginBottom: "10em", marginLeft: "3%" }}>
                                                <button type="button" class="btn btn-dark btn-secondary" data-toggle="tooltip" data-placement="top" title="Send Email" style={{ marginRight: '1%', marginLeft: '1%' }} onClick={() => window.location = 'mailto:joshua.obiha@hotmail.com'}>GET IN TOUCH</button>
                                                {/* <button style={{ marginLeft: '1%', marginRight: '1%' }} type="button" class="btn btn-outline-dark">RESUME</button> */}
                                                <a style={{ marginLeft: '1%', marginRight: '1%' }} type="button" href="https://drive.google.com/file/d/10FgDt6_V4YfoZ69Ofp-CVWWJE8bEighh/view" class="btn btn-outline-dark">PDF Resume</a>
                                        </div>
                                </motion.div>

                                {/* Selected Work div to be made a component//////////////////////////////////////////////////////////////// */}
                                <div style={{ backgroundColor: '#FAF9F6', borderBottomLeftRadius: "0px", borderRadius: "0px", marginLeft: "2%", marginRight: "2%", marginTop:'1%' ,marginBottom:"1%", color: "#FAF9F6", display:'flex', justifyContent:"center"}}>


                                <motion.div style={{height:'250px', width:'350px',backgroundColor:"#000000", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
                                whileHover={{ scale: 1.2, rotate: 0 }}
                                >
                                <img src={require('../images/exp.jpg')} style={{width: "100%",height: "100%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'0%', marginTop:'0%'}}/>

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity:'40%', borderRadius: "9px",
                                                        backgroundColor:'#000000',marginRight:'2%', marginLeft:'0%', marginTop:'0%',
                                                }} class="shadow p-3" >
                                                       EXPERIENCE
                                                </div>
                                </motion.div>


                                <motion.div style={{height:'250px', width:'350px',backgroundColor:"#000000", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
                                whileHover={{ scale: 1.2, rotate: 0 }}
                                >
                                <img src={require('../images/skills.jpg')} style={{width: "100%",height: "100%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'0%', marginTop:'0%'}}/>

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity:'40%', borderRadius: "9px",
                                                        backgroundColor:'#000000',marginRight:'2%', marginLeft:'0%', marginTop:'0%',
                                                }} class="shadow p-3" >
                                                       SKILLS
                                                </div>
                                </motion.div>

                                <motion.div style={{height:'250px', width:'350px',backgroundColor:"#000000", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
                                whileHover={{ scale: 1.2, rotate: 0 }}
                                >
                                <img src={require('../images/proj.jpg')} style={{width: "100%",height: "100%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'0%', marginTop:'0%'}}/>

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity:'40%', borderRadius: "9px",
                                                        backgroundColor:'#000000',marginRight:'2%', marginLeft:'0%', marginTop:'0%',
                                                }} class="shadow p-3" >
                                                       PORTFOLIO
                                                </div>
                                </motion.div>

                                <motion.div style={{height:'250px', width:'350px',backgroundColor:"#000000", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
                                whileHover={{ scale: 1.2, rotate: 0 }}
                                >
                                <img src={require('../images/proj.jpg')} style={{width: "100%",height: "100%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'0%', marginTop:'0%'}}/>

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity:'40%', borderRadius: "9px",
                                                        backgroundColor:'#000000',marginRight:'2%', marginLeft:'0%', marginTop:'0%',
                                                }} class="shadow p-3" >
                                                       CURRENT WORK
                                                </div>
                                </motion.div>


                                {/* <motion.div style={{height:'250px', width:'350px',backgroundColor:"#FFFFFF", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
                                whileHover={{ scale: 1.2, rotate: 0 }}
                                >
                                <img src={require('../images/exp.jpg')} style={{width: "96%",height: "95%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'2%', marginTop:'2%',  marginBottom:'2%'}}/>

                                                <div style={{
                                                        position: "relative",
                                                        zIndex: '3',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#FFFFFF',
                                                        left: '0',
                                                        top: '-100%',
                                                        opacity:'50%',
                                                        borderRadius: "9px",
                                                        backgroundColor:'#000000',
                                                    
                                                }}>
                                                       EXPERIENCE
                                                </div>
                                </motion.div> */}


                            

                             
                                  

                                </div>


                                {/* <div style={{ backgroundColor: '#FAF9F6', borderBottomLeftRadius: "0px", borderRadius: "0px", marginLeft: "0%", marginRight: "0%", marginTop:'1%' ,marginBottom:"1%", color: "#FFFFFF", display:'flex', justifyContent:"right"}}>

                                
                                        
<motion.div style={{height:'450px', width:'350px',backgroundColor:"#FFFFFF", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
whileHover={{ scale: 1.2, rotate: 0 }}
>
<img src={require('../images/languagepic.jpg')} style={{width: "96%",height: "50%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'2%', marginTop:'2%'}}/>

                <div style={{
                        position: "relative",
                        zIndex: '3',
                        width: '100%',
                        height: '50%',
                        backgroundColor: '#FFFFFF',
                        left: '0',
                        top: '0%',
                        borderBottomLeftRadius: "9px",
                        borderBottomRightRadius: "9px",
                }}>
                       EXPERIENCE
                </div>
</motion.div>

<motion.div style={{height:'450px', width:'350px',backgroundColor:"#FFFFFF", marginLeft:"2%", marginRight:"2%", marginTop:"2%", marginBottom:'2%', borderRadius: "9px",zIndex:'1'}}
whileHover={{ scale: 1.2, rotate: 0 }}
>
<img src={require('../images/languagepic.jpg')} style={{width: "96%",height: "50%", borderRadius: '9px', zIndex:'2', marginRight:'2%', marginLeft:'2%', marginTop:'2%'}}/>

                <div style={{
                        position: "relative",
                        zIndex: '3',
                        width: '100%',
                        height: '50%',
                        backgroundColor: '#FFFFFF',
                        left: '0',
                        top: '0%',
                        borderBottomLeftRadius: "9px",
                        borderBottomRightRadius: "9px",
                }}>
                       EXPERIENCE
                </div>
</motion.div>


</div> */}

                              

                                {/* WHAT I DO Div to be made a component */}
                                {/* <div style={{ backgroundColor: "#000000", height: '29em', borderBottomLeftRadius: "9px", borderRadius: "9px", marginLeft: "1%", marginRight: "1%", color: "#FFFFFF" }}>
                                        <h1 style={{ marginLeft: "4%", paddingTop: "1%" }}>WHAT I DO</h1>

                                        <div style={{ width: "17%", backgroundColor: "#FFFFFF", marginLeft: "4%", marginRight: "2%", marginTop: "1%", marginBottom: "2%", height: "75%", borderRadius: '9px', }}>
                                                hello

                                        </div>
                                </div> */}

                                {/* Just a Gap Div */}
                                <div style={{ textAlign: "center", marginBottom: "10em", marginTop: "10em" }}>
                                </div>
                        </div>
                        
                        
                        {/* Footer Should be made a component  */}
                        <div style={{ backgroundColor: "#F8F9FA" }}>
                                <div style={{ backgroundColor: "#F8F9FA", paddingBottom: "5%", paddingTop: "2%", textAlign: "center", marginBottom: "0" }}>
                                        <a href="https://www.linkedin.com/in/joshuaobiha/" class="link-dark"> <LinkedInIcon color="#00b8ff" fontSize="large"  style={{ marginRight: '1%', marginTop: '2%' }} /></a>
                                        <a href="https://github.com/obiha" class="link-dark"> <GitHubIcon color="#00b8ff" fontSize="large" style={{ marginRight: '1%', marginTop: '2%' }} /></a></div>
                

                                <h4 style={{ marginLeft: "2%", paddingTop: "0%" }}>How I built this</h4>
                                <div style={{ marginLeft: "2%" }}><p><a href="#" target="_blank" class="link-primary">React.js</a> | <a href="#" target="_blank" class="link-primary">material UI</a> | <a href="https://www.framer.com/motion/" target="_blank" class="link-primary">Framer Motion Animation Library</a> | <a href="https://github.com/obiha/portfolio" target="_blank" class="link-primary">Github Repository</a></p></div>
                                <div style={{ textAlign: "center" }}> <p style={{ paddingBottom: "3%" }}> &copy; 2022 - Joshua Obiha</p></div>
                        </div>

                </div>
        )
}

export default Desktop