import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p>Contact Me:</p>
      <div className="socials">
        <a href="https://tiktok.com" target="_blank">tiktok</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://github.com" target="_blank">GitHub</a>
      </div>
      <p>© {new Date().getFullYear()} Adebisi</p>
    </footer>
  );
}
export default Footer;