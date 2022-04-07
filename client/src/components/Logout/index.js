import {logout} from '/home/enis/PairLoss/client/src/util/session.js'
import { Button, NavBtnLink } from './LogoutElements'
const Logout = () => {
    return(
    <>
        <NavBtnLink onClick = {logout}>Logout</NavBtnLink>    
    </>
    )
}

export default Logout;