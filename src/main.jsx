import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./RecursiveNav/App.jsx";


import {navData} from '../src/RecursiveNav/assets/navData.js'
import QRcodeGenerator from "./QRcodeGenerator/components/QRcodeGenerator.jsx";
import DarkLightMode from "./DarkLightMode/components/DarkLightMode.jsx";
import ScrollBar from "./ScrollBarIndicator/components/ScrollBar.jsx";
import TabTest from "./CustomTabs/component/tabs.jsx";
import ModalDisplay from "./ModalPopUp/component/ModalDisplay.jsx";
import GithubProfileDisplay from "./githubProfilerFinder/GithubProfileDisplay.jsx";
import GithubProfile from "./githubProfilerFinder/GithubProfile.jsx";
import SearchAutoComplete from "./SearchAutoComplete/SearchAutoComplete.jsx";
import TicTacToe from "./TicTacToe/index.jsx";
import FeatureFlagGlobal from "./FeatureFlag/context/Context.jsx";
import FeatureFlag from "./FeatureFlag/FeatureFlag.jsx";
import UseFetchHookTest from "./useFetchCustomHook/UseFetchHookTest.jsx";
import OnclickOutside from "./use-outside-click/OnclickOutside.jsx";
import WindowResizeDisplay from "./window-resize/WindowResizeDisplay.jsx";
import ScrollToTopAndBottom from "./scrollToTop/ScrollToTopAndBottom.jsx";
import ScrollToSection from "./scrollToSection/ScrollToSection.jsx";
import WeatherApi from "./WeatherForecast/WeatherApi.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./FoodRecipe/App.jsx";
import { FoodRecipeContextProvider } from "./FoodRecipe/context/FoodRecipeContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
  
      <StrictMode>
          {/* <App menus = {navData}/> */}
          {/* <QRcodeGenerator/> */}
          {/* <DarkLightMode/> */}

          {/* <ScrollBar url='https://dummyjson.com/products/category/smartphones'/> */}
          {/* <TabTest/> */}
          {/* <ModalDisplay/> */}
          {/* <GithubProfile/> */}
          {/* <SearchAutoComplete/> */}
          {/* <TicTacToe/> */}

          {/* <FeatureFlagGlobal>
            <FeatureFlag/>
          </FeatureFlagGlobal> */}

          {/* <UseFetchHookTest/> */}
          {/* <OnclickOutside/> */}
          {/* <WindowResizeDisplay/> */}

          {/* <ScrollToTopAndBottom/> */}
          {/* <ScrollToSection/> */}
          {/* <WeatherApi/> */}

            <FoodRecipeContextProvider>
                <App />
            </FoodRecipeContextProvider>

      </StrictMode>
  </BrowserRouter>
);
