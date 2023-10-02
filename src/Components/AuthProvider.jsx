import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function AuthProvider({ children }) {
    const data = { name: "hello", age: 45 };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
