import React from "react"

import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6"
import Slider from "react-slick"


import wk from '../../assets/image/vk.svg'
import './HeaderComponent.scss'




export default function HeaderComponent() {
	let settings = {
		dots: true,
		infinite: true,
		speed: 2500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dotsClass: 'button__bar'
	}
	return (
		<section className='header'>
			<Slider {...settings}>
				<div className="header-items">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<p className='header-first-text'>LEANGROUP - тубы и этикетки</p>
								<h3>Ламинатные тубы</h3>
								<p className='header-second-text'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
								<button className='header-btn'>Каталог</button>
							</div>
							<div className="col-icon">
								<div className="icons">
									<a target='_blank' href="https://vk.com/">
										<img src={wk} alt="vk-icon" />
									</a>
								</div>
								<div className="icons">
									<a target='_blank' href="https://facebook.com"><FaFacebookF /></a>
								</div>
								<div className="icons">
									<a target='_blank' href="https://linkedin.com">
										<FaLinkedinIn />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-items">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<p className='header-first-text'>LEANGROUP - тубы и этикетки</p>
								<h3>Ламинатные тубы</h3>
								<p className='header-second-text'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
								<button className='header-btn'>Каталог</button>
							</div>
							<div className="col-icon">
								<div className="icons">
									<a target='_blank' href="https://vk.com/">
										<img src={wk} alt="vk-icon" />
									</a>
								</div>
								<div className="icons">
									<a target='_blank' href="https://facebook.com"><FaFacebookF /></a>
								</div>
								<div className="icons">
									<a target='_blank' href="https://linkedin.com">
										<FaLinkedinIn />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-items">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<p className='header-first-text'>LEANGROUP - тубы и этикетки</p>
								<h3>Ламинатные тубы</h3>
								<p className='header-second-text'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
								<button className='header-btn'>Каталог</button>
							</div>
							<div className="col-icon">
								<div className="icons">
									<a target='_blank' href="https://vk.com/">
										<img src={wk} alt="vk-icon" />
									</a>
								</div>
								<div className="icons">
									<a target='_blank' href="https://facebook.com"><FaFacebookF /></a>
								</div>
								<div className="icons">
									<a target='_blank' href="https://linkedin.com">
										<FaLinkedinIn />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</section>
	)
}