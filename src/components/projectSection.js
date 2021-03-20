import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./nav"

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import bannerLogo from '../images/learningLights4.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mystyle.css'

export default function projectSection() {
    return (
        <div className="container projectSection">
            <div class="row"> 
                <h2>Projects</h2>
            </div>
            <div class="row">
                <div class="col">

                </div>
                <div class="col">
        
                </div>
            </div>
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>


        </div>

        

    )
  }