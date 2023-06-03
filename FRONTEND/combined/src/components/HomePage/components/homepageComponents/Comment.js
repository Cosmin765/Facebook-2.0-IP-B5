// components
import ShowAccount from "./ShowAccount";

// styles
import '../../styles/homepageStyles/comment.css';
import { getImage, getUserOther } from "../../../../util";
import { useEffect, useState } from "react";

export default function Comment({comment}) {
    const [base64, setBase64] = useState('');
    const [user, setUser] = useState(null);

    const getOtherProfile = async () => {
        const otherUser = await getUserOther(comment.userId);
        const otherImage = await getImage(otherUser.profile_picture);
        setBase64('data:image/png;base64,' + otherImage);
        setUser(otherUser);
    }

    useEffect(() => {
        getOtherProfile();
    }, []);

    let account = {name: '', picture: '', uploadDate: ''};
    if(user) {
        account = {name: user.firstName + ' ' + user.lastName, picture: base64, uploadDate: null};
    }

    return (
        <div className="feed_test">
            <div className="feed_comment">
                <ShowAccount account={account}/>
                <div className="feed_comentText">
                    <p>{comment.content}</p>
                </div>
            </div>
        </div>
    );
}