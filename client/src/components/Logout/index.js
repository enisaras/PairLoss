import {logout} from '/home/enis/PairLoss/client/src/util/session.js'
import { Button } from '/home/enis/PairLoss/client/src/components/ButtonElements.jsx'
const Logout = () => {
    return(
    <>
        <Button onClick = {logout}>Logout</Button>    
    </>
    )
}

export default Logout;