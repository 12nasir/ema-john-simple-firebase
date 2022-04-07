import { useContext } from "react"
import { AuthContext } from "../constext/AuthProvider"

const useAuth = () =>{
    return useContext(AuthContext);
}
export default useAuth;