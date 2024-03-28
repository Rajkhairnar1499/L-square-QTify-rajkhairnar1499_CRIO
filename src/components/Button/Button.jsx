import navbarStyles from "../Navbar/navbar.module.css";

const Button = ({ eventHandler }) => {
  return (
    <div>
      <button
        className={navbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        GIVE FEEDBACK
      </button>
    </div>
  );
};

export default Button;
