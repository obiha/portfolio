import { useState } from 'react'
import React from 'react'

const Navigation = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

  

    const buttonStyle = {
        margin: "0px",
                backgroundColor: '#0F1216', 
                height: "100%", 
                width: "10em", 
                textAlign: "center",
            
                cursor: "pointer",
                borderStyle: "solid", 
                borderWidth:"thin", 
                borderColor:'#C2CBC5',
                color:"rgb(57,150,255)",
                backgroundColor: isHover ? '#0F1216' : '#01050B', 
                fontSize: "120%", 
                textAlign: "center"
    }

    return (
        <div style={{
            margin: "0px",
            backgroundColor: '#01050B', 
            height: '3em', 
            width: '100%', 
            // borderRadius: '9px',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            top: "80px"
            }}>

            <div style={buttonStyle}><div onClick={console.log(`HOME`)} style={{fontSize: "120%", color:"#FFFFFF", marginTop:"6%"}}>Home</div></div>

            <div style={buttonStyle}><div onClick={console.log(`ABOUT`)} style={{fontSize: "120%", color:"#FFFFFF", marginTop:"6%"}}>About</div></div>

            <div style={buttonStyle}><div onClick={console.log(`PROJ`)} style={{fontSize: "120%", color:"#FFFFFF", marginTop:"6%"}}>Projects</div></div>

            <div style={buttonStyle}><div onClick={console.log(`CONT`)} style={{fontSize: "120%", color:"#FFFFFF", marginTop:"6%"}}>Contact</div></div>
        
        </div>

    )
}




export default Navigation