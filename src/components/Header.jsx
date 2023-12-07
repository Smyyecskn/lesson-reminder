import img from "../img/CLARUSWAY_LOGO.png";
import HeaderStyle from "../scss/Header.module.scss";
const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <img src={img} alt="" />
      <h2>Lesson Reminder</h2>
    </div>
  );
};

export default Header;

 