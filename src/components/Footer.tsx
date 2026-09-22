import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="footer max-w-7xl mx-auto sm:footer-horizontal text-base-content py-10">
      <aside>
        <img className="pl-20" src={logo} />
        <p className="text-center">
          Curated tools, technologies, and resources for developers building
          <br />
          modern software.
        </p>
        <div className="items-center pl-20">
          <ul className="flex justify-between items-center gap-5 pt-3">
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </aside>

      <nav className="hidden lg:flex lg:flex-col">
        <h6 className="font-bold">PRODUCT</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Technologies</a>
        <a className="link link-hover">Projects</a>
      </nav>
      <nav className="hidden lg:flex lg:flex-col">
        <h6 className="font-bold">COMPANY</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav className="hidden lg:flex lg:flex-col">
        <h6 className="font-bold">LEGAL</h6>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
