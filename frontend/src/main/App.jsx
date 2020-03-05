import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Logo from '../components/templates/Logo'
import Footer from '../components/templates/Footer'
import Nav from '../components/templates/Nav'

import {HashRouter} from 'react-router-dom'
import Routes from './routes'

export default props =>
    <HashRouter>
        <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Routes></Routes>
        <Footer></Footer>
    </div>
    </HashRouter>
    