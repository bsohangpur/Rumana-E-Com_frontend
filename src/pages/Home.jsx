import React from "react";
import { Hero, AboutHero, ContactHero } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div>
      <Hero products={products} />
      <AboutHero />
      <ContactHero />
    </div>
  );
};

export default Home;
