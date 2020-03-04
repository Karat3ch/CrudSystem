import './App.css'
import React from 'react'
import Logo from '../components/templates/Logo'
import Footer from '../components/templates/Footer'
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'

export default props =>
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>
