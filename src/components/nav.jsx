import react from "react";
import { GoArrowDownRight } from "react-icons/go";
import { CiLight } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";

function Nav() {
  return (
    <nav>
      <div class="left">
        <li>Portfolio</li>
      </div>
      <div class="right">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li className="toggleSwitch">
            <CiLight size={30} />
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <PiMoonLight size={30} />
          </li>
          <li>
            <button>
              Hire Me
              <GoArrowDownRight size={25} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
