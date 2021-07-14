import React from 'react';
import SideImages from './sideImages';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    subContainer: {
        position: 'relative', display: 'flex'
    },
    imageDiv: {
        flex: 8, marginLeft: '1rem'
    },
    image: {
        width: '100%', height: 'auto'
    },
    mobileImage: {
        height: 'auto',
        width: '100vw',
    },
    root: {
        width: '100%',
        overflow: 'hidden'
    },
    slideStyle: {
        overflow: 'hidden'
        // paddingLeft: '10px'
    }

})



function DisplayItem({ images, currentImage, avatarImage, handleMouseOver }) {


    const classes = useStyles();
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))

    if (!mobileView) {
        return (
            <div className={classes.container}>
                <div className={classes.subContainer}>
                    <SideImages images={images}
                        currentImage={currentImage}
                        handleMouseOver={handleMouseOver} />
                    <div className={classes.imageDiv}>
                        <img className={classes.image} src={avatarImage} />
                    </div>
                </div>
            </div>
        )
    }

    return <Swiper
        spaceBetween={2}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {images.map((image, i) => {
            return (
                <SwiperSlide key={i}>
                    <img className={classes.mobileImage} src={image.url} />
                </SwiperSlide>
            )
        })}
    </Swiper >


}
export default DisplayItem;