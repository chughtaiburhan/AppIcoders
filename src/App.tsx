import About from "./components/About" 
import Awards from "./components/Awards"
import ChooseUs from "./components/ChooseUs"
import ClientSays from "./components/ClientSays"
import ContactUs from "./components/ContactUs"
import FoodDelivery from "./components/FoodDelivery"
import Footer from "./components/Footer"
 import Hero from "./components/Hero" 
import Industries from "./components/Industries"
import Product from "./components/Product"
import Services from "./components/Services"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <>
     <Hero/>
     <About/>
     <Services/>  
     <FoodDelivery/>
     <ChooseUs/>
     <ClientSays/>
     <Industries/>
     <Technologies/>
     <Product/> 
     <Awards/>
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default App
