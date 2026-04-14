import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        {/* We can add more sections here like Work, About, Testimonials later */}
      </main>
      <Footer />
    </div>
  )
}

export default App
