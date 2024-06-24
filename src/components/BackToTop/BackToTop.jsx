// BackToTop.js
import React, { useEffect, useState } from 'react'

import { FaCircleArrowUp } from "react-icons/fa6"

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.scrollY > document.getElementById('header').offsetHeight) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<div className="back-to-top">
			{isVisible && (
				<button onClick={scrollToTop} style={styles.button}>
					<FaCircleArrowUp />
				</button>
			)}
		</div>
	)
}

const styles = {
	button: {
		position: 'fixed',
		bottom: '20px',
		right: '10px',
		padding: '10px 20px',
		fontSize: '34px',
		background: 'none',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		zIndex: 1000,
		color: '#EF7C00',
	}
}

export default BackToTop
