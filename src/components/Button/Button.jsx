import { Button } from "@mui/material";
import navbarStyles from "../Navbar/navbar.module.css";

const Buttons = ({ eventHandler }) => {
  return (
    <div>
      <Button
        className={navbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        Give FeedBack
      </Button>
    </div>
  );
};

export default Buttons;
