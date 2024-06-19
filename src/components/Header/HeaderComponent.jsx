import React from "react"
import Slider from "react-slick"

import './HeaderComponent.scss'

export default function HeaderComponent() {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: false,
		prevArrow: false,
	}
	return (
		<section className='header'>
			<Slider {...settings}>
					<div className="header-items">
						<div className="col-6">
							<p>LEANGROUP - тубы и этикетки</p>
							<h3>Ламинатные тубы</h3>
							<p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
							<button>Каталог</button>
						</div>
					</div>
					<div className="header-items">
						<div className="col-6">
							<p>LEANGROUP - тубы и этикетки</p>
							<h3>Ламинатные тубы</h3>
							<p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
							<button>Каталог</button>
						</div>
					</div>
					<div className="header-items">
						<div className="col-6">
							<p>LEANGROUP - тубы и этикетки</p>
							<h3>Ламинатные тубы</h3>
							<p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
							<button>Каталог</button>
						</div>
					</div>
			</Slider>
		</section>
	)
}