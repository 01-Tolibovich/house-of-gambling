import { useState } from "react";

import { ButtonUI } from "../../UI";

import {ReactComponent as Lang} from "../../../assets/icons/lang-icon.svg"
import { ReactComponent as OpenIcon } from "../../../assets/icons/common/Menu-open.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/common/Menu-close.svg";
import "./styles.scss";

const ActionButtons = () => {
  const [lang, setLang] = useState("EN")
  const [mobileMenuButton, setMobileMenuButton] = useState(false);

  const handleCount = () => {
    setLang(lang === "EN" ? "RU" : "EN" )
  }

  const menuShowToggle = () => {
    setMobileMenuButton(!mobileMenuButton)
  }

  return (
    <div className="action-buttons">
      <ButtonUI onClick={handleCount}><Lang /><span>{lang}</span></ButtonUI>
      <ButtonUI>LOG IN</ButtonUI>
      <ButtonUI primaryButton>SIGN UP</ButtonUI>
      <div className="mobile-menu-buttons" role="button" onClick={menuShowToggle}>
        {mobileMenuButton ? <OpenIcon /> : <CloseIcon />}
      </div>
    </div>
  );
};

export default ActionButtons;
