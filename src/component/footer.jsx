import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = () => {
    // const [size, setSize] = useState('computer');

    // useEffect(() => {
    //     window.innerWidth>
    // })
    return (
        <div className='footer' >

            <div style={{ textAlign: 'right', alignItems: 'space-between' }}>
                <h2 style={{ color: 'black' }}>מידע נוסף</h2>
                <p>משלוחים | החלפות</p>
                <p>תנאי שימוש</p>
            </div>
            <div style={{ textAlign: 'right' }}>
                <h2 style={{ color: 'black' }}>לבירורים ושאלות</h2>
                <p>user@gmail.com</p>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '0.5rem' }}>
                    <FacebookIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div style={{ textAlign: 'right', alignItems: 'space-between' }}>
                <h2 style={{ color: 'black' }}>join to the party</h2>
                <p>הצטרפי לקבלת עדכונים, הנחות ומבצעים.</p>
                <form action='/'>
                    <input name='email' type='email' placeholder='...כתובת דוא"ל' style={{ textAlign: 'right', fontSize: '20px' }} />
                    <br />
                    <button style={{ padding: '10px', marginTop: '1rem', backgroundColor: 'black', color: 'white', border: 'solid 1px #eee', fontSize: '1rem' }}>הירשם</button>
                </form>
            </div>
        </div>
    )
}

export default Footer;