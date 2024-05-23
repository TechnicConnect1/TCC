import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const AreaTableAction = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list-2">
              <li className="dropdown-menu-item-2">
                <Link to="/view" className="dropdown-menu-link-2">
                  View
                </Link>
              </li>
              <li className="dropdown-menu-item-2">
                <Link to="/view" className="dropdown-menu-link-2">
                  Edit
                </Link>
              </li>
              <li className="dropdown-menu-item-2">
                <Link to="/view" className="dropdown-menu-link-2">
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default AreaTableAction;
