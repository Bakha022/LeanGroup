import React, { Component } from 'react'

import AboutComponets from '../components/About/AboutComponets'
import HeaderComponent from '../components/Header/HeaderComponent'
import Navbar from "../components/Navbar/NavbarComponent"

export default class HomePage extends Component {
	render() {
		return (
			<section className='lean-group'>
				<Navbar />
				<HeaderComponent />
				<AboutComponets />
					<main>

					</main>
			</section>
		)
	}
}
