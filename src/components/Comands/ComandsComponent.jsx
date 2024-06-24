import React, { Component } from 'react'


import comands from '../../constants/comands'
import ComandsItemComponent from './ComandsItemComponent'


import './ComandsComponent.scss'

export default class ComandsComponnent extends Component {
	render() {
		return (
			<div className='comands-section'>
				<div className="container">
					<h1 className='comands-title'>
						Наша <span>команда</span>
					</h1>
					<div className="comands-row-list">
						{comands.map(el => <ComandsItemComponent img={el.img} title={el.title} subtitle={el.subtitle} phoneNumber={el.phoneNumber} email={el.email} />)}
					</div>
					<div className='comands-btn'>
						<button >Наша команда</button>
					</div>
				</div>
			</div>
		)
	}
}
