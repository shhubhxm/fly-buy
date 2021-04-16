import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            </Link>
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text" />
                <SearchIcon
                    className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link className="nound" to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='header__option'>
                        <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Order</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link className="nound" to="/Checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Header;
