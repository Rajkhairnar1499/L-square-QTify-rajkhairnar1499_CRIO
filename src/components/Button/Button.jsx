import navbarStyles from "../Navbar/navbar.module.css";

const Buttons = ({ eventHandler }) => {
  return (
    <div>
      <button
        className={navbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        Give FeedBack
      </button>
    </div>
  );
};

export default Buttons;
