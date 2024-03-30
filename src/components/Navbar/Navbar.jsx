import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Buttons from "../Button/Button";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import styles from "./navbar.module.css";

const Navbar = ({ data, page, songsData }) => {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState(false);

  const handleClick = () => {
    setIsFeedbackClicked(!isFeedbackClicked);
  };

  useEffect(() => {
    let feedback = document.getElementById("feedback");
    let body = document.body;
    if (isFeedbackClicked) {
      body.style.overflowY = "hidden";
      feedback?.classList.add("feedbackClicked");
    } else {
      body.style.overflowY = "auto";
      feedback?.classList.remove("feedbackClicked");
    }
  }, [isFeedbackClicked]);

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <Search data={page === "home" ? data : songsData} page={page} />
        <Buttons eventHandler={{ event: "onClick", handler: handleClick }} />
      </nav>
      {isFeedbackClicked && (
        <Feedback onClose={() => setIsFeedbackClicked(false)} />
      )}
    </>
  );
};

export default Navbar;
