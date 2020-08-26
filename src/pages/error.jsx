import React from 'react';
import Hero from '../components/hero'
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
const Error = () => (
    <Hero>
        <Banner title="404" subtitle="Page Not Found">
            <Link className="btn-primary" to="/"> Return Home</Link>
        </Banner>
    </Hero>
)  
export default Error;