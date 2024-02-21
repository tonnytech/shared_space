import React from "react";
import './StatsComponent.css'


const StatsComponent = () => {
    return (
    <section className="stats_container">
       <div className="stats_cover">
            <div>
                <p className="number"> 5</p>
                <p className="text">Locations across the us states - co, ca $ NY</p>
            </div>
            <div>
                <p className="number">6</p>
                <p className="text">Years in the business, making it easier to work</p>
            </div>
            <div>
                <p className="number">99</p>
                <p className="text">Staff members, assisting all of our guests</p>
            </div>
            <div>
                <p className="number">99999</p>
                <p className="text">Customers over the last 8 years in the business</p>
            </div>
       </div>
    </section>);
}
 
export default StatsComponent;

