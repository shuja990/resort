import React from 'react'
import {RoomContext} from '../context'
import Loading from './loading'
import Room from './room'
import Title from './title'
class FeaturedRooms extends React.Component{
    static contextType = RoomContext
    render(){
        let {loading,featuredRooms:rooms} = this.context
        rooms = rooms.map(room => (
            <Room key={room.id} room={room}/>
        ))
        return(
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                <div className="featured-rooms-center">
                    {
                        loading === true ? <Loading/>
                        : rooms
                    }
                </div>
            </section>
        )
    }
}
export default FeaturedRooms;