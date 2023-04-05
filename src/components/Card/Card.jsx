import React from "react"
import "./styles.css"

const Card = ({ children, isVerical = false, isSmall = false }) => {
	const sizeClassName = isSmall ? "small" : "large"
	const layoutClassName = isVerical ? "portrait" : "landscape"

	return (
		<div className={`card ${sizeClassName} ${layoutClassName}`}>
			{children}
		</div>
	)
}

export default Card
