import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={(handleClick)}>
      <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <Link to="/questions">Questions</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;