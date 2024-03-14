import "./styles.css";
import tactics from "../../assets/images/tactics.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header-ul">
          <li>
            <a className="logo" href="/">
              your11{" "}
              <img
                className="logo-img"
                src={tactics}
                alt="soccer ball"
                height={40}
                width={50}
              />
            </a>
          </li>
        </ul>
        <div className="text-wrapper">
          <span className="header-text">Build and share your dream squad</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
