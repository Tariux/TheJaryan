import React from 'react'
import LogoEffectLarge from '../../Component/LogoEffectLarge';
import RandomElements from '../../Component/RandomElements';
import TextTyping from '../../Component/TextTyping';
import AboutMe from '../../Includes/AboutMe';
import ImageGallery from '../../Includes/ImageGallery';
import JAlert from '../../Includes/JAlert';
import NavMenu from '../../Includes/NavMenu';
import Slider from '../../Includes/Slider';




function Home() {



    return (

        <section id='home_page' className='fullscreen gradient-night' style={{cursor: "url('/static/images/cursor.png') , auto"}}>

 
            <NavMenu />
            <Slider />

        </section>
    )
}

export default Home