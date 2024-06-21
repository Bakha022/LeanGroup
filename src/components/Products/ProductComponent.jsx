import React, { Component } from 'react'

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'


import img_1 from '../../assets/image/1_1.svg'
import img_2 from '../../assets/image/3_1.svg'
import img_3 from '../../assets/image/4_1.svg'
import img_5 from '../../assets/image/5_1.svg'
import img_4 from '../../assets/image/6_1.svg'

import './ProductComponent.scss'

export default class ProductComponent extends Component {
	render() {
		return (
			<div className="product-section">
				<div className="container">
					<h1 className='product-title'>Наша <span>продукция</span></h1>
					<Tabs className={"tabs"}>
						<TabList className={"tab-list"}>
							<Tab className={"tab"}>
								Ламинатные тубы
							</Tab>
							<Tab className={"tab"}>
								Экструзионные тубы
							</Tab>
							<Tab className={"tab"}>
								Другая упаковка
							</Tab>
						</TabList>

						<TabPanel className="tab-panel">
							<div className="row">
								<div className="img">
									<img src={img_1} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_2} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_3} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_4} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_5} alt="tab-img" />
								</div>
							</div>
						</TabPanel>
						<TabPanel className="tab-panel">
							<div className="row">
								<div className="img">
									<img src={img_3} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_4} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_5} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_1} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_2} alt="tab-img" />
								</div>
							</div>
						</TabPanel>
						<TabPanel className="tab-panel">
							<div className="row">
								<div className="img">
									<img src={img_1} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_3} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_4} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_5} alt="tab-img" />
								</div>
								<div className="img">
									<img src={img_2} alt="tab-img" />
								</div>
							</div>
						</TabPanel>
					</Tabs>
					<div className='product-btn'>
						<button>
								Перейти в каталог
						</button>
					</div>
				</div>
			</div>
		)
	}
}
