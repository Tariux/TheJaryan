import React from 'react'
import RandomElements from '../Component/RandomElements'
import TextTyping from '../Component/TextTyping'
import JAlert from './JAlert'

function AboutMe() {

    let hidden_alert = {
        title: "بنظر میاد دنبال چیزی میگردی!",
        desc: "تبریک میگم به قسمتای ناشناخته وبسایت رسیدی",
        type: "default",
        button: "برو بریم"
    }

    return (

        <section className="section about-section gray-bg" id='about' style={{ backgroundImage: "url('static/images/header-01-bg.jpg')" }}>
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <div className="about-text go-to">
                            <h3 className="dark-color">
                                <TextTyping text='ABOUT ME' speed={100} delay={100} />

                            </h3>
                            <h6 className="theme-color lead">
                                <TextTyping text='Programmer / Designer / Open-source software Lover / Network and software engineering' speed={50} delay={1200} />

                            </h6>
                            <p style={{display: "block" , margin: "0 auto"}}>

Young (18y), creative, <mark>Free</mark>
A <mark>self-taught programmer</mark> from Iran who is studying and working in the field of computer software, computer networks, and computer hardware.

A senior student in the field of network and software from Iran's professional technical department

Proficient in <mark>Persian</mark>, English, Arabic and Chinese

Familiar with the world of binary


                            </p>

                            <p className="theme-color lead"  style={{display: "block" , margin: "0 auto"}}>
                                <TextTyping text='Omid AsghariMoghadam' speed={50} delay={1200} />

                            </p>

                            <div className="row about-list">
                                <div className="col-md-6">

                                    <div className="media">
                                        <label>Location</label>
                                        <p><TextTyping text='Iran / Khorasan, Ghayen' speed={50} delay={100} /></p>
                                    </div>

                                    <div className="media">
                                        <label>Skills</label>
                                        <p><TextTyping text='Web devloper / 2D - 3D Desginer / Programmer / Fullstack ' speed={50} delay={100} /></p>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Mail</label>
                                        <p><TextTyping text='tariux@protonmail.com' speed={50} delay={100} /></p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p><TextTyping text='0777 623 938 98+' speed={50} delay={100} /></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar" onDoubleClick={() => JAlert.show(hidden_alert)}>


                            <div className='randoms animate__animated animate__bounceIn'>
                                <div className='animate__animated  animate__pulse gradient-orange' style={{ left: '100px', right: '0px', top: "150px" }}></div>
                                <div className='animate__animated  animate__pulse gradient-orange' style={{ left: '0px', right: '100px', bottom: "150px" }}></div>
                            </div>
                            <img src='static/images/w-avatar-jaryan.png' loading="lazy" onMouseEnter={e => e.target.setAttribute("src", "static/images/b-avatar-jaryan.png")} onMouseLeave={e => e.target.setAttribute("src", "static/images/w-avatar-jaryan.png")} onClick={e => e.target.setAttribute("src", "static/images/w-avatar-jaryan.png")} />


                        </div>
                    </div> 
                </div>
            </div>
        </section>

    )
}

export default AboutMe