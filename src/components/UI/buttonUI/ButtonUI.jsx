import "./styles.scss";

const ButtonUI = ({primaryButton, children, type, ...rest}) => {
  return (
    <button
      type={type || "button"}
      className={`button-ui ${primaryButton ? "primary-button" : "secondary-button"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonUI;