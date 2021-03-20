import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./nav"

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import bannerLogo from '../images/learningLights4.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mystyle.css'

export default function MainBanner() {
    return (
        <div className="container mainBanner">
            <div class="row">
                <div class="col-md-5">
                    <h1 class="bannerHeading">Under Construction...</h1>
                    <p class="subHeading">Pandemic? GME? 2021? What are you
                    talking about? Bro wake up, it's 2012 and we're about to 
                    go play some Minecraft hunger games!
                    
                    </p>
                </div>
                <div class="col-md-7">
                <img src={bannerLogo}></img>
                </div>
            </div>

            <div className="projectSection">
                
            </div>
        </div>
    )
  }