import {Outlet, useNavigate, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import verify_token from "../../../api/verify_token";

export default function RouterAuth() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        (async function () {
            try {
                let current_user = await verify_token();

                let currentUserIdentity = current_user.identity; //獲取使用者身分
                let identity = location.pathname.split("/")[2]; //從路徑中獲取身分

                //判斷使用者身分是否與獲取的身分相同
                if (currentUserIdentity === identity) {
                    navigate(location);
                } else {
                    navigate("/login");
                }
                setLoading(false);
            } catch (e) {
                navigate("/login");
            }
        })();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return <Outlet/>;
}
