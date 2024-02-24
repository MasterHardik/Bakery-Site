import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import CakeVariety from "./pages/CakeTypes/CakeVariety";
import CakeCollection from "./pages/CakeCollections/CakeCollection";
import Footer from "./components/Footer/Footer";

function App() {
  const ImgForSlider = [
    "https://images2.alphacoders.com/102/1024306.jpg",
    "https://media.self.com/photos/64aed5d30f0ebb21329b4a67/4:3/w_6664,h_4998,c_limit/AdobeStock_213502478.jpeg",
    // "https://wallpaperbat.com/img/702493-cake-wallpaper-top-free-cake-background.jpg"
  ];
  const [count, setCount] = useState(0);
  const CakeCategory = [
    "All Cakes",
    "Birthday Cakes",
    "Wedding Cakes",
    ,
    "Custom Cakes",
  ];
  return (
    <>
      <Navbar Categories={CakeCategory} />
      <ImageSlider images={ImgForSlider} />
      <CakeVariety Categories={CakeCategory} />
      <CakeCollection Categories={CakeCategory}/>
      <Footer />
    </>
  );
}

export default App;
