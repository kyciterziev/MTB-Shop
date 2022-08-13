import AuthContext from './AuthContext'
import useLocalStorage from '../hooks/useLocalStorage';
import useAuthApi from '../hooks/useAuthApi';

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useLocalStorage("auth", {
        id: '',
        username: '',
        accessToken: '',
        errorCode: '',
        errorMessage: '',
        isError: false
    });

    const { login, logout } = useAuthApi();

    const userLogin = (username, password) => login(username, password)
        .then((response) => {
            if (response === 403) {
                setAuth({
                    errorCode: 403,
                    errorMessage: response.message,
                    isError: true
                });
            } else {
                setAuth({
                    id: response._id,
                    username: response.username,
                    accessToken: response.accessToken
                });
            }
        }).catch((error) => {
            setAuth({
                isError: true
            })
        });

    const userLogout = () => logout(auth.accessToken)
        .then((response) => {
            setAuth({
                id: '',
                username: '',
                accessToken: '',
                errorCode: '',
                errorMessage: '',
                isError: false
            });
        })
        .catch((error) => {
            setAuth({
                isError: true
            })
        });

    return (
        <AuthContext.Provider value={{ auth, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    );
};