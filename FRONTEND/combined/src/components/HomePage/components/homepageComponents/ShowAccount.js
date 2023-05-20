// style
import '../../styles/homepageStyles/ShowAccount.css';

export default function ShowAccount({account:{name, picture, uploadDate}}) {

    return (
        <div className='feed_account'>
            <img src={picture} alt={name} />
            <div className='feed_accountDetails'>
                <p className='feed_name'>{name}</p>
                {uploadDate && <p className='feed_date'>{uploadDate}</p>}
            </div>
        </div>
    );
}