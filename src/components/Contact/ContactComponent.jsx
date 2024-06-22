import React, { Component } from 'react'


import { BsPersonFill } from "react-icons/bs"
import { FaPhoneAlt } from "react-icons/fa"


import './ContactComponent.scss'

export default class ContactComponent extends Component {
	render() {
		return (
			<div className='contact-section'>
				<div className="container">
					<div className="contact-row">
						<div className="left">
							<h1 className='contact-title'>Получить подробную <span>информацию</span></h1>
							<p className='contact-subtitle'>
								Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время
							</p>
							<form action="">
								<div className="inputs">
									<div className="name-input">
										<BsPersonFill className='person-input' />
										<input placeholder='Ваше имя' type="text" />
									</div>
									<div className="name-input">
										<FaPhoneAlt   className='person-input num' />
										<input placeholder='+375 (29) 0000000' type="tel" />
									</div>
								</div>
								<textarea placeholder='Комментарий' name="" id=""></textarea>
								<button type='send'>
									Получить информацию
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
