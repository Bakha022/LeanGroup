import React, { Component } from 'react'


import { FaBars } from "react-icons/fa6"
import { IoMdCloseCircle } from "react-icons/io"
import logo from "../../assets/image/logo.svg"
import './NavbarComponent.scss'


export default class NavbarComponent extends Component {

	state = {
		show: false,
	}

	render() {
		// console.log(this.state.show)
		return (
			<nav className='navbar'>
				<div className="container">
					<div className="row">
						<div className="logo-content">
							<a href='#Продукция' className="logo">
								<img src={logo} alt="logo" />
							</a>
						</div>
						<div className="right">
							<ul className={`list_item ${this.state.show ? 'show' : ''}`}>
								<div id='' className={`close ${this.state.show ? 'show' : ''}`}>
									<IoMdCloseCircle onClick={() => this.setState({ show: false })} />
								</div>
								<li id='drop-down' className='list_items'>
									<a className='list_items_link' href="#">Продукция</a>
									<ul className="nested-ul">
										<li>
											<a href="#">
												Ламинатные тубы
											</a>
										</li>
										<li>
											<a href="#">Экструзионные тубы</a>
										</li>
										<li>
											<a href="#">Другая упаковка</a>
										</li>
									</ul>
								</li>
								<li className='list_items'>
									<a className='list_items_link' href="#">Сертификаты</a>
								</li>
								<li className='list_items'>
									<a className='list_items_link' href="#">Наша</a>
								</li>
								<li className='list_items'>
									<a className='list_items_link' href="#">О нас</a>
								</li>
								<li className='list_items'>
									<a className='list_items_link' href="#">Новости</a>
								</li>
								<li className='list_items'>
									<a className='list_items_link' href="#">Вакансии</a>
								</li>
								<li className='list_items'>
									<a className='list_items_link' href="#">Контакты</a>
								</li>
							</ul>
							<div className="lang">
								<p className='lang_first'>Ru</p>
								<div className="line"></div>
								<p className='lang_second'>EN</p>
							</div>
							<div className="humburger">
								<FaBars onClick={() => this.setState({ show: true })} />
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}
