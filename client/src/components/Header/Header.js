import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import styles from './Header.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    const { auth, userLogout } = useContext(AuthContext);

    const logoutHandler = () => {
        userLogout();
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        MTB-Shop
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/catalog' className="nav-link">
                                    Catalog
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">
                                    About
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact-us' className="nav-link" >
                                    Contact
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            {console.log(auth)}
                            {!auth.accessToken
                                ? <Link to='/login' className="nav-link">
                                    Login
                                    <FontAwesomeIcon className={styles.userMenuIcon} icon={faUser} />
                                </Link>
                                :
                                // Temporary until logut and register functionalities are ready
                                <Link to='/' className="nav-link" onClick={logoutHandler}>
                                    Logout
                                    <FontAwesomeIcon className={styles.userMenuIcon} icon={faArrowRightFromBracket} />
                                </Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;