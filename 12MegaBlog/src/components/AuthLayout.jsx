import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Protected({children, authentication= true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const AuthStatus = useSelector((state)=> state.auth.status)

    useEffect(() => {
        // TODO
        if (authentication && AuthStatus !== authentication) {
            navigate('/login')
        } else if(!authentication && AuthStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [AuthStatus, navigate, authentication])
    
    return loader? <h1>Loading...</h1> : <>{children}</>
}
