import React from "react";
import './StatsComponent.css'


const StatsComponent = () => {
    return (
    <section className="stats_container">
       <div className="stats_cover">
            <div>
                <p> 5</p>
                <p>Locations across the us states - co, ca $ NY</p>
            </div>
            <div>
                <p>6</p>
                <p>Years in the business, making it easier to work</p>
            </div>
            <div>
                <p>99</p>
                <p>Staff members, assisting all of our guests</p>
            </div>
            <div>
                <p>99999</p>
                <p>Customers over the last 8 years in the business</p>
            </div>
       </div>
    </section>);
}
 
export default StatsComponent;

