import { useEffect, useState } from "react"
import { Products } from "./components"

function App() {
  const [productos, setProductos] = useState([])
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
  const [isSort, setIsSort] = useState(false)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProductos(data))
  }, [])

  const uniqueCategories = productos
    ? [...new Set(productos.map(producto => producto.category))]
    : []

  return (
    <section>
      <nav className="search-bar-grid">
        <h3>Buscar por:</h3>

        <div className="search-input">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            onChange={e => setTitle(e.target.value.toLowerCase())}
          />
        </div>

        <div className="search-input">
          <label htmlFor="precio">Precio mínimo:</label>
          <input
            id="precio"
            type="number"
            onChange={e => setPrice(e.target.valueAsNumber || 0)}
          />
        </div>

        <div className="search-input">
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-</option>

            {uniqueCategories.map((uniqueCategory, i) => (
              <option value={uniqueCategory} key={`${i}-${uniqueCategory}`}>
                {uniqueCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="search-input">
          <label htmlFor="ordenar">
            Ordenar:
            <input
              id="ordenar"
              type="checkbox"
              checked={isSort}
              onClick={() => setIsSort(!isSort)}
            />
          </label>
        </div>
      </nav>

      <Products
        products={productos
          .filter(producto => producto.price > price)
          .filter(producto => !category || producto.category === category)
          .filter(producto => producto.title.toLowerCase().includes(title))
          .sort((a, b) => (isSort ? a.price - b.price : 1))}
      />
    </section>
  )
}

export default App
