import "./styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
