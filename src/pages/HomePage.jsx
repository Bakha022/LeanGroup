import React, { Component } from 'react'

import AboutComponets from '../components/About/AboutComponets'
import CertificatComponent from '../components/Certificates/CertificatComponent'
import HeaderComponent from '../components/Header/HeaderComponent'
import Navbar from "../components/Navbar/NavbarComponent"
import ProductComponent from '../components/Products/ProductComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import ComandsComponent from '../components/Comands/ComandsComponent'
import InformationComponent from '../components/Information/InformationComponent'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'

export default class HomePage extends Component {
	render() {
		return (
			<section className='lean-group'>
				<Navbar />
				<BackToTop/>
				<main>
					<HeaderComponent />
					<AboutComponets />
					<CertificatComponent />
					<ProductComponent />
					<ContactComponent/>
					<ComandsComponent/>
					<InformationComponent/>
				</main>
				<Footer/>
			</section>
		)
	}
}
