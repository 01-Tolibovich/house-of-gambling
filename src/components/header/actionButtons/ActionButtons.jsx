import { useState } from "react";

import { ButtonUI } from "../../UI";

import {ReactComponent as Lang} from "../../../assets/icons/lang-icon.svg"
import "./styles.scss";

const ActionButtons = () => {
  const [lang, setLang] = useState("EN")

  const handleCount = () => {
    setLang(lang === "EN" ? "RU" : "EN" )
  }
  return (
    <div className="action-buttons">
      <ButtonUI onClick={handleCount}><Lang />{lang}</ButtonUI>
      <ButtonUI>LOG IN</ButtonUI>
      <ButtonUI primaryButton>SIGN UP</ButtonUI>
    </div>
  );
};

export default ActionButtons;
