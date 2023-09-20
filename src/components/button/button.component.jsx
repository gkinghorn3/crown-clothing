import './button.styles.scss';


const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};



const Button = ({clickFunc, children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonTypeClasses[buttonType]}`} onClick={clickFunc}>
      {children}
    </button>
  );
};

export default Button;
