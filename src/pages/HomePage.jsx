import React, { Component } from 'react'

import Navbar from "../components/Navbar/NavbarComponent";
import HeaderComponent from '../components/Header/HeaderComponent'

export default class HomePage extends Component {
	render() {
		return (
			<section className='lean-group'>
				<Navbar/>
				<HeaderComponent/>
				<main>
					
				</main>
			</section>
		)
	}
}
