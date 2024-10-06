import { Button } from "@/components/ui/button";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";


const PrivatePage = () => {

    const { logOut } = useContext(AuthContext);
    return <>
    <h1>This is a secure page</h1>
    <Button onClick={()=> logOut()}>LogOut</Button>
    </>
}

export default PrivatePage;