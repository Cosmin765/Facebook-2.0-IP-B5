import { Link } from "react-router-dom";
import AdCard from "./AdCard";

export default function Ad({ad}) {


    return (
        <div className='feed_feed'>
            <a href={ad.link} >
                <AdCard ad={ad} />
            </a>
        </div>
        );
}