import { Link } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button from '@mui/material/Button';

import "./Header.css"

function Header() {
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

  return (
    <header className="Header">
       <Link to="/home">
            Tasks
       </Link>
       <Link to="/create">
            Create
       </Link>
       <AccountCircleIcon
      >
      </AccountCircleIcon>

    </header>
  )
}

export default Header