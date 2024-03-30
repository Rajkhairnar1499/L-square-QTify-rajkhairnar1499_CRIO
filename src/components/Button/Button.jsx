import navbarStyles from "../Navbar/Navbar.module.css";

const Button = ({ eventHandler }) => {
  return (
    <div>
      <button
        className={navbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        Give Feedback
      </button>
    </div>
  );
};

export default Button;
