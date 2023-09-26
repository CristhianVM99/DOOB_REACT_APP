import React from 'react';
import { NavLink } from "react-router-dom";

const gacetaItem = ({ gaceta }) => {
    return (
        <div className="rwt-card">
            
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <NavLink to={`#`}>
                            <img className="img-fluid" src={`https://verdecora.es/blog/wp-content/uploads/2021/04/como-es-conejo.jpg.webp`} alt="gaceta-01"/>
                        </NavLink>
                    </figure>
                    <NavLink to={`#`} className="rwt-overlay"></NavLink>
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        <NavLink to={`#`}>
                            {gaceta.gaceta_titulo}
                        </NavLink>
                    </h5>
                    <span className="subtitle b2 text-capitalize">{gaceta.category}</span>
                </div>
            </div>
        </div>
    )
}
export default gacetaItem;