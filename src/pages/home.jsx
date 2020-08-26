import React from 'react';
import Hero from '../components/hero'
import Banner from '../components/banner'
import {Link} from "react-router-dom"
import FeaturedRooms from '../components/featuredRooms'
import Services from '../components/services'
const Home = () => (
    <>
        <Hero hero="defaultHero">
            <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
                <Link className="btn-primary" to="/rooms">Rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
    </>
)  
export default Home;