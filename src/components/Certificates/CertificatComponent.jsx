import React, { Component } from 'react'


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Slider from "react-slick"

import img_1 from '../../assets/image/image_1.png'
import img_2 from '../../assets/image/image_2.png'
import img_3 from '../../assets/image/image_3.png'
import img_4 from '../../assets/image/image_4.png'
import img_5 from '../../assets/image/image_5.png'

import './CertificatComponent.scss'

export default class CertificatComponent extends Component {
	constructor(props) {
		super(props)
		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
	}
	next() {
		this.slider.slickNext()
	}
	previous() {
		this.slider.slickPrev()
	}
	render() {
		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 4,
			initialSlide: 0,
			dotsClass: 'button__bar_2',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		}


		return (
			<div className='certifacts-section'>
				<div className="container">
					<h1 className='certificat-title'>Качество продукции подтверждают <span>сертификаты</span></h1>
					<div className="slider-container">
						<Slider ref={c => (this.slider = c)} {...settings}>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_1} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_2} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_3} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_4} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_5} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_1} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_2} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_3} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_4} alt="certificat-img" />
							</div>
							<div className='certificat-item'>
								<img className='certificat-img' src={img_5} alt="certificat-img" />
							</div>
						</Slider>
						<div style={{ textAlign: "center", margin: "50px" }}>
							<button className="button-slick-left" onClick={this.previous}>
								<IoIosArrowBack />
							</button>
							<button className="button-slick-right" onClick={this.next}>
								<IoIosArrowForward />
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
