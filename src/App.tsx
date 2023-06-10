import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex-1">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque hic
          voluptates rerum et commodi! Expedita fugit, qui reiciendis, veritatis
          sequi facere accusantium molestias perspiciatis explicabo aut maiores.
          Aut, magni accusamus.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default App
