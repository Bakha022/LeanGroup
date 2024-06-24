import React, { Component } from 'react'


import infos from '../../constants/infos'
import './InformationComponent.scss'
import InformationItemsComponent from './InformationItemsComponent'

export default class InformationComponent extends Component {
	render() {
		return (
			<div className='information-section'>
				<div className="container">
					<h1 className='information-title'>Новости</h1>
					<div className="information-row-list">
						{infos.map(item => <InformationItemsComponent img={item.img} date={item.date} title={item.title} />)}
					</div>
					<div className="info-btn">
						<button>Все новости</button>
					</div>
				</div>
			</div>
		)
	}
}
