import "./styles.css";
import tactics from "../../assets/images/tactics.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
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
      <div className="footer-info">
        <h3>Copyright &copy; {currentYear} · your11 · All rights reserved.</h3>
        <span>
          Developed by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JoseVitorOliveira/"
          >
            Vitor Oliveira
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
