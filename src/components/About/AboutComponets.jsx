import React, { Component } from 'react'



import "./AboutComponent.scss"

export default class AboutComponets extends Component {
	render() {
		return (
			<div className='about-section'>
				<div className="container">
					<h1 className='about-title'>О компании <span>LEANGROUP</span></h1>
					<div className="row">
						<div className="left">
							<iframe width="552" height="300" src="https://www.youtube.com/embed/0QZwI22cCE0?si=4wEgh57KkyHUSKfn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						</div>
						<div className="right">
							<p className='about-subtitle'>
								Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
							</p>
							<p className='about-subtitle'>
								Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
							</p>
							<div className="about-subtitle">
								С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
