import styles from './LoginPage.module.css';
import { Link, Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { useState, useContext } from 'react';

const LoginPage = () => {

    const { auth, userLogin } = useContext(AuthContext);

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        loginHandler();
    }

    const loginHandler = () => {
        userLogin(values.username, values.password)
            .then((result) => {
                console.log(result);
                if (result && result.isError) {
                    setErrors(result);
                }
            });
    }

    if (auth.accessToken) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className='main'>
                <div className='main-wrapper'>
                    <div className={styles.background}>
                        <div className={styles.shapes} />
                        <div className={styles.shapes} />
                    </div>
                    <form onSubmit={submitHandler}>
                        <h3>Login</h3>

                        <label className={styles.labelLogin} htmlFor="username">Username</label>
                        <input
                            className={styles.inputLogin}
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                        {errors.username &&
                            <p className={styles.validationError}>
                                Username should be at least 3 characters long!
                            </p>
                        }
                        <label className={styles.labelLogin} htmlFor="password">Password</label>
                        <input
                            className={styles.inputLogin}
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 6)}
                        />
                        {errors.password &&
                            <p className={styles.validationError}>
                                Password should be at least 6 characters long!
                            </p>
                        }

                        {errors.isError && errors.errorCode == '' && <div className={styles.validationError}>An error has occured. Please try again later.</div>}
                        {errors.isError && errors.errorMessage != '' && <div className={styles.validationError}>{errors.errorMessage}</div>}

                        <button className={styles.buttonLogin}>Log In</button>
                        <div className={styles.containerFormBtn}>
                            <span className={styles.registerText}>Still don't have and account?</span>
                            <Link className={styles.registerLink} to="/register">Register now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;