import { Navigate, useNavigate } from "react-router"

export default function ProtectedRoutes({children, user}) {
    if(!user){
        return <Navigate to='/' />
    }
    return children;
}
