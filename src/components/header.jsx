const Header = ({ scrollToContact }) => {
  return (
    <header className="header">
      <h1>Marko Matković</h1>
      <p>Software Engineer | Digital Marketing Specialist</p>
      <button onClick={scrollToContact}>Contact Me</button>
    </header>
  );
};

export default Header;
