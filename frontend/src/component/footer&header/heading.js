import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import TheDrawer from '../sideComponent/theDrawer';
import logo from '../sideComponent/logo.png';


const Heading = (prop) => {

    const [sideBar, setSideBar] = useState(false);
    const handleSideBar = () => {
        setSideBar(preValue => !preValue);
    }
    return (
        <div>
            <TheDrawer handleSideBar={handleSideBar} open={sideBar} onClose={handleSideBar} />
            <h2 style={styles.aboveHeading}>בקנייה מעל 199 ש"ח משלוחים חינם</h2>
            <header className={prop.className} style={prop.styles}>
                <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => { setSideBar(true) }}
                >
                    <AiOutlineMenu />
                </div>
                <Link to={'/'}>
                    <div style={{ marginRight: '4rem' }}>
                        <img src={logo} style={{ height: '5rem', width: '8rem' }} alt='logo' />
                    </div>
                </Link>
                <div  >
                    <Link to={"/wishList"} ><FavoriteIcon style={{ 'fontSize': '2rem', marginLeft: '2rem' }} /></Link>
                    <Link to={"/cart"} ><FaShoppingBag size='34' /></Link>
                </div>
            </header>
        </div>
    )
}

const styles = {
    aboveHeading: {
        position: "sticky",
        backgroundColor: "black",
        fontSize: "20px",
        fontWeight: "600",
        color: "white",
        textAlign: "center"
    }
}


export default Heading;