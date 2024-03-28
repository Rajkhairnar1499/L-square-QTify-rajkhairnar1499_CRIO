import navbarStyles from "../Navbar/navbar.module.css";

const Button = ({ text }) => {
  return (
    <div>
      <button
        className={navbarStyles.feedback}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
