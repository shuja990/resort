import React from 'react';
import Title from './title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
class Services extends React.Component{
    state= {
        services: [
            {
                icon:<FaCocktail/>,
                title: "Free Cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos ratione quos sequi illum accusantium itaque distinctio. Distinctio sed, commodi consequatur facilis, voluptatem, quos exercitationem sit earum quaerat ducimus perferendis."
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos ratione quos sequi illum accusantium itaque distinctio. Distinctio sed, commodi consequatur facilis, voluptatem, quos exercitationem sit earum quaerat ducimus perferendis."
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos ratione quos sequi illum accusantium itaque distinctio. Distinctio sed, commodi consequatur facilis, voluptatem, quos exercitationem sit earum quaerat ducimus perferendis."
            },
            {
                icon:<FaBeer/>,
                title: "Strongest Beer",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos ratione quos sequi illum accusantium itaque distinctio. Distinctio sed, commodi consequatur facilis, voluptatem, quos exercitationem sit earum quaerat ducimus perferendis."
            }
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,idx)=>{
                        return <article key={idx} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
export default Services