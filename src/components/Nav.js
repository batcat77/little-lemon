import Logo from "./../images/logo.jpg";
import { Link } from "react-router-dom";

function Nav () {
  const menu = [
    {
      text: "HOME",
      url: "/",
    },
    {
      text: "RESERVATION",
      url: "/reservation",
    },
    {
      text: "ORDER",
      url: "/order",
    },
    {
      text: "ABOUT US",
      url: "/about",
    },
    {
      text: "CONTACT",
      url: "/contact",
    },
  ];

  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo"></img>
      <div>
        {
          menu.map((value) => {
            return <Link to={value.url} key={value.text} className="nav-item">{value.text}</Link>
          })
        }
      </div>
    </nav>
  );
}

export default Nav;