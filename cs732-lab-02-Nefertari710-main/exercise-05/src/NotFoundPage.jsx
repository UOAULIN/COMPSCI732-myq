import {useLocation} from "react-router-dom";

export default function NotFoundPage(){
    const location = useLocation()
    return (
        <div>

            <h1>Can not find pokemon</h1>
            <h1>{location.pathname} is not exist</h1>
        </div>
    );
}