import React from 'react';
import Hero from '../components/hero'
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'
const Rooms = () => (
    <>
    <Hero hero="roomsHero">
        <Banner title="Our Rooms">
            <Link className="btn-primary" to="/"> Return Home</Link>
        </Banner>
    </Hero>
    <RoomsContainer />
    </>
)  
export default Rooms;