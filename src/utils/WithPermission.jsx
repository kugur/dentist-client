import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withPermission = function(Compt, permsission, fallbackUrl="/") {
    return function WithPermission(props) {
        const navigate = useNavigate();
        const userInfo = global.localStorage.getItem("userInfo");

        const havePermission = useCallback(() => {
            return userInfo && userInfo.roles && userInfo.roles.indexOf(permsission) > -1;
        }, [userInfo]);

        useEffect(() => {
            if (!havePermission()) {
                navigate(fallbackUrl)
            }
        }, [havePermission, navigate]);


        if (havePermission()) {
            return <Compt {...props}></Compt>
        } else {
            return null;
        }
    }
}

export default withPermission;