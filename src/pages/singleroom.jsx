import React from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'
class SingleRoom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    componentDidMount(){

    }
    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        console.log(room);
        if(!room){
            return <div className="error">
                <h3>No Such room could be found</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }
        else{
            const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
            return(
                <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            images.map((item,id)=>(
                                <img src={item} alt={name}/>
                            ))
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>                            
                        </article>
                        <article className="info">
                            <h3>Information</h3>
                            <h6>PRICE : {price}</h6>
                            <h6>Size : {size}sqft</h6>
                            <h6>Max Capacity : {
                                capacity > 1 ?`${capacity} people`
                                : `${capacity} person` 
                                }</h6>
                            <h6>{pets? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {
                            extras.map((item,id)=>(
                                <li key={id}>{item}</li>
                            ))
                        }
                    </ul>
                </section>
                </>
            )
        }
    }
}
export default SingleRoom;