import { Link } from "react-router-dom";
import AdCard from "./AdCard";

export default function Ad({ad}) {


    return (
        <div className='feed_feed'>
            <AdCard ad={ad} />
        </div>
        );
}