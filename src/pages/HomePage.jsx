import React, { Component } from 'react'

import AboutComponets from '../components/About/AboutComponets'
import HeaderComponent from '../components/Header/HeaderComponent'
import Navbar from "../components/Navbar/NavbarComponent"
import CertificatComponent from '../components/Certificates/CertificatComponent'

export default class HomePage extends Component {
	render() {
		return (
			<section className='lean-group'>
				<Navbar />
				<HeaderComponent />
					<main>
					<AboutComponets />
					<CertificatComponent/>
					</main>
			</section>
		)
	}
}
