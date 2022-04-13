import { Button, NavBtnLink } from './LogoutElements'

const logout = () => (
    fetch("http://localhost:3003/api/session", { method: "DELETE", 'credentials': "include"})
  );
const Logout = () => {
    return(
    <>
        <NavBtnLink onClick = {logout}>Logout</NavBtnLink>    
    </>
    )
}

export default Logout;