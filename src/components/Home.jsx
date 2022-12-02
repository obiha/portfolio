import React, { useState, useEffect } from 'react'
import Navigation from './Navigation';
import Desktop from './Desktop';
import Mobile from './Mobile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




const Home = () => {

    const [width, setWidth] = useState (window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 968;


    return (
        isMobile ? <Mobile/>:<Desktop/>
    )
}




export default Home