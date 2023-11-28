// import React from 'react'

import BookingsForm from "./components/BookingsForm";
import Card from "./components/Card";
import CompanyValues from "./components/CompanyValues";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BookingsForm />
      <Process />
      <CompanyValues />
      <Card />
      <Review />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
