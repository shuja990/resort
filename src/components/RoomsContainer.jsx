import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList.jsx'
import {withRoomConsumer} from '../context'
import Loading from './loading'
const RoomsContainer = ({context}) => {
    const {loading,sortedRooms,rooms} = context
    return (
        <div>
            {loading ? <Loading/> :
            <div>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
            </div>
            }
        </div>
    )
}
export default withRoomConsumer(RoomsContainer)
// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList.jsx'
// import {RoomConsumer} from '../context'
// import Loading from './loading'
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading,sortedRooms,rooms} = value
//                     return (
//                         loading ? <Loading/> :
//                     <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                     )
//                 }
//             }
//         </RoomConsumer>    
//     )
// }
