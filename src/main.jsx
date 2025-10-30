import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./RecursiveNav/App.jsx";
import {navData} from '../src/RecursiveNav/assets/navData.js'
import QRcodeGenerator from "./QRcodeGenerator/components/QRcodeGenerator.jsx";
import DarkLightMode from "./DarkLightMode/components/DarkLightMode.jsx";
import ScrollBar from "./ScrollBarIndicator/components/ScrollBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      {/* <App menus = {navData}/> */}
      {/* <QRcodeGenerator/> */}
      {/* <DarkLightMode/> */}

      <ScrollBar url='https://dummyjson.com/products/category/smartphones'/>
  </StrictMode>
);
