import {useNavigate} from "react-router-dom";

export default function ErrorPage() {
    let navigate = useNavigate();

    return (
        <div>
            <p>404 Not Find</p>
            <button onClick={() => navigate("/")}>返回主頁</button>
        </div>
    );
}
