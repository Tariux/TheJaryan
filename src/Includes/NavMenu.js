import React from 'react'
import $ from "jquery";
import TextTyping from '../Component/TextTyping';
import JAlert from './JAlert';

function NavMenu() {

    const toggleNavbarBrand = () => {
        $("#navbar_brand").toggleClass("hidden")
        $("#navbar_brand_text").toggleClass("hidden")

    }

    const nextSection = (e) => {
        let next = ($(e.target).attr("data-tag")) ? $(e.target).attr("data-tag") : false
        if (next) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#" + next).offset().top
        }, 1000);      
      }
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeInDown" onMouseEnter={toggleNavbarBrand} onMouseLeave={toggleNavbarBrand}>
            <div className="container justify-content-between">
                {/* Left elements */}
                <div className="d-flex">
                    {/* Brand */}
                    <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                        <h4 id='navbar_brand_text'>
                        <TextTyping text='جـــــریـــــانـــــ' speed={300} delay={500} />
        
                        </h4>
                        <img src="/static/images/thejaryan-logo.png" height={50} className="hidden animate__animated animate__bounceIn" id='navbar_brand' />
                    </a>

                </div>
                {/* Left elements */}

                {/* Right elements 
                <ul className="navbar-nav flex-row">
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link" href="#">
                            <span>
                                <i className="fa-solid fa-hand-holding-hand"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link" href="#">
                            <span>
                                <i className="fa-solid fa-code" onClick={code => nextSection(code)} data-tag="code_projects"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link" href="#">
                            <span>
                                <i className="fa-solid fa-palette" onClick={gallery => nextSection(gallery)} data-tag="gallery"></i>

                            </span>
                        </a>
                    </li>
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link" href="#">
                            <span>
                                <i className="fa-solid fa-address-card" onClick={about => nextSection(about)} data-tag="about"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link" href="#">
                            <span>
                                <i className="fa-solid fa-house-user" onClick={slider => nextSection(slider)} data-tag="slider"></i>
                            </span>
                        </a>
                    </li>


                </ul>
                */}
                {/* Right elements */}
            </div>
        </nav>
    )
}

export default NavMenu