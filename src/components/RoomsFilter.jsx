import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/title'
const getUnique = (items,value) =>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context
    let types = getUnique(rooms,'type')
    types=['all',...types]
    let capacitie = getUnique(rooms,'capacity')
    return (
        <section className="filter-container">
            <Title title="Search Rooms"/>
            <form className="filter-form">
                {/* Seletct Type */}

                {/* End of select type */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {
                            types.map((type,idx)=>(
                            <option value={type} key={idx}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {
                            capacitie.map((cap,id)=>(
                            <option value={cap} key={id}>{cap}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input value={price} type="range" name="price" id="price" min={minPrice} max={maxPrice} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} id="breakfast" />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" checked={pets} onChange={handleChange} id="breakfast" />
                            <label htmlFor="pets">pets</label>
                        </div> 
                    </div>
                </div>
            </form>
        </section>
    )
}
