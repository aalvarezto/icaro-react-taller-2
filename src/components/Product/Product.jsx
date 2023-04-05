import React from "react"
import { Card } from "../Card"
import "./styles.css"

const Product = ({
  title = "Lorem ipsum",
  text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quibusdam deserunt dignissimos minima, consequatur vel assumenda accusantium vero consectetur natus?",
  imageLink = "https://picsum.photos/300/300",
  price,
}) => {
  return (
    <Card isVerical>
      <h2>{title}</h2>

      <div className="content-container">
        <img src={imageLink} alt="" />
      </div>

      <div className="price">{price && <p>${price}</p>}</div>

      <p>{text}</p>

      <button className="aceptar">Aceptar</button>
    </Card>
  )
}

export default Product
