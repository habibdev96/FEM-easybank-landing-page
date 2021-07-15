import { useState } from "react";
import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Tag from "./components/Tag";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Globals />
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <MobileMenu isActive={isActive} />
      <Hero />
      <main>
        <Features />
        <Articles />
      </main>
      <Footer />
      <Tag />
    </>
  );
}

export default App;
