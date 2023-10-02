import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-center items-center gap-[40px]">
            <NavLink to="/"
            style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive? "red" : "",
                  textDecoration: isActive? 'underline': ''
                };
              }}
            >Home</NavLink>
          

            <NavLink to="/register"
            style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "green" : "",
                  textDecoration: isActive? 'underline': ''
                };
              }}>

              Register
            </NavLink>

            <NavLink to="/login"
            style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "green" : "",
                  textDecoration: isActive? 'underline': ''
                };
              }}
            >Login</NavLink>
        </div>
    );
};

export default Header;