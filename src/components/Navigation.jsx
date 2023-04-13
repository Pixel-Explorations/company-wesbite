

 const Navigation = () => {
  return (
    <nav id="nav-buttons">
      <div id="nav-logo">
        <img id="nav-logo-img" src={require("../images/PE_Logo.png")} alt="Pixel Explorations Logo" />
      </div>
      <div id="nav-contact">
        <h4>Contact</h4>
      </div>
      <div id="nav-about">
        <h4>About</h4>
      </div>
      <div id="nav-services">
        <h4>Services</h4>
      </div>
    </nav>
  )
}

export default Navigation;