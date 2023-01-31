import { useState } from "react";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#1A1924] px-16 py-16">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
