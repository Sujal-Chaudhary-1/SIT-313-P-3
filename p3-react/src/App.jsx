import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import MyWork from './components/MyWork'
import Gallery from './components/Gallery'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedTutorials from './components/FeaturedTutorials'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

// App is the parent component; every section is a child component.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About />
        <MyWork />
        <Gallery />
        <FeaturedArticles />
        <FeaturedTutorials />
        <Contact />
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}
