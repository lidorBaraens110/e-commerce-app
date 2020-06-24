import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ marginTop: '10rem', textAlign: 'center', padding: '5rem' }}>
            <Link to='/מי-אנחנו'>
                <p>home</p>
            </Link>
        </div>
    )
}
export default Home