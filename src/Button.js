import "./Button.css";

const Button = (props) => {
  const { children, onClick, color = "blue", className = "" } = props;
  const classNames = `Button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
