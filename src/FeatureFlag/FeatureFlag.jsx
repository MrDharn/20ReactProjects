import { useContext } from "react";
import CustomTab from "../CustomTabs/component/CustomTab"
import DarkLightMode from "../DarkLightMode/components/DarkLightMode";
import ModalDisplay from "../ModalPopUp/component/ModalDisplay";
import QRcodeGenerator from "../QRcodeGenerator/components/QRcodeGenerator";
import TicTacToe from "../TicTacToe";
import { FeatureFlagContext } from "./context/Context";

const FeatureFlag = () => {
  const { enabledFlags, loading } = useContext(FeatureFlagContext);
  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <DarkLightMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showCustomTabs",
      component: 'Hello',
    },
    {
      key: "showModalPopUp",
      component: <ModalDisplay/>,
    },
    {
      key: "showQrcodeGenerator",
      component: <QRcodeGenerator />,
    },
  ];

  function checkEnabledFlags(getId) {
    return enabledFlags && enabledFlags[getId];
  }

  if (loading) return <h1>Loading Data!! Please Wait</h1>;

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlag;
