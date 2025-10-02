import React, { Suspense } from 'react';
 
const About = React.lazy(() => import("./components/About"));
const Awards = React.lazy(() => import("./components/Awards"));
const ChooseUs = React.lazy(() => import("./components/ChooseUs"));
const ClientSays = React.lazy(() => import("./components/ClientSays"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const FoodDelivery = React.lazy(() => import("./components/FoodDelivery"));
const Footer = React.lazy(() => import("./components/Footer"));
const Industries = React.lazy(() => import("./components/Industries"));
const Product = React.lazy(() => import("./components/Product"));
const Services = React.lazy(() => import("./components/Services"));
const Technologies = React.lazy(() => import("./components/Technologies")); 
import Hero from "./components/Hero";

const App = () => {
  return ( 
    <Suspense fallback={<div>Loading sections...</div>}>
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
    </Suspense>
  )
}

export default App;