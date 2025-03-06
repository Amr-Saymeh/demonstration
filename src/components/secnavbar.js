import logoImage from "../images/AURA.png";

const Secnavbar = () => {
  return (
    <header>
      <div className="secnavbar">
        <img src={logoImage} alt="Logo" />
        <div className="secnav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Explore</a>
          <a href="#">Account</a>
        </div>
      </div>
    </header>
  );
};

export default Secnavbar;
