import React, { Component } from 'react'

import logo from "../../assets/image/logo.svg"
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6"
import wk from '../../assets/image/vk.svg'



import './Footer.scss'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer-top">
						<div className="footer-row">
							<div className="logo">
									<img src={logo} alt="logo" />
							</div>
							<div className="icons">
									<div className="icon">
										<img src={wk} alt="vkontakte" />
									</div>
									<div className="icon">
										<FaFacebookF/>
									</div>
									<div className="icon">
										<FaLinkedinIn/>
									</div>
							</div>
						</div>
					</div>
					<div className="footer-main">
						<div id='left' className="left">
							<div className="col-3">
								<h1>Продукция</h1>
								<ul className="col-3-text">
									<li className='col-3-texts'>
										<a href="">Ламинатные тубы</a>
									</li>
									<li className='col-3-texts'>
										<a href="">Экструзионные тубы</a>
									</li>
									<li className='col-3-texts'>
										<a href="">Другая упаковка</a>
									</li>
								</ul>
							</div>
							<div className="col-3">
								<h1>Компания</h1>
								<ul className="col-3-text">
									<li className='col-3-texts'>
										<a href="">О нас</a>
									</li>
									<li className='col-3-texts'>
										<a href="">Наша команда</a>
									</li>
									<li className='col-3-texts'>
										<a href="">Сертификаты</a>
									</li>
								</ul>
							</div>
							<div className="col-3">
								<h1>Разделы</h1>
								<ul className="col-3-text">
									<li className='col-3-texts'>
										<a href="">Контакты</a>
									</li>
									<li className='col-3-texts'>
										<a href="">Новости</a>
									</li>
									<li className='col-3-texts'>
										<a href="">Вакансии</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="right">
							<div className="col-4">
								<h3>Беларусь</h3>
								<div className="numbers">
									<p>+375 (17) 270 53 77</p>
									<p>+375 (17) 270 53 78</p>
								</div>
							</div>
							<div className="col-4">
								<h3>Европа</h3>
								<div className="numbers">
									<p>+48 73 1111 044</p>
								</div>
							</div>
							<div className="col-4">
								<h3>Москва</h3>
								<div className="numbers">
									<p>+7 (495) 280 73 44</p>
									<p>+7 (495) 280 73 44</p>
								</div>
							</div>
							<div className="col-4">
								<h3>Екатеринбург</h3>
								<div className="numbers">
									<p>+7 (343) 346 82 06</p>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bootom">
						<p>© 2022 Leangroup. All Rights Reserved.
						Разработка и продвижение сайтов SkyWeb.by</p>
					</div>
				</div>
			</footer>
		)
	}
}
