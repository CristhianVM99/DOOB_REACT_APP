import React from "react";
import { NavLink } from "react-router-dom";

const gacetaItem = ({ gaceta }) => {
    return (
        <div className="rwt-card">
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <a
                            href={`${process.env.REACT_APP_ROOT_API}/Gaceta/${gaceta.gaceta_documento}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="img-fluid"
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png"
                                }
                                style={{ width: "400px" }}
                                alt="gaceta-01"
                            />
                        </a>
                    </figure>
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        <a
                            href={`${process.env.REACT_APP_ROOT_API}/Gaceta/${gaceta.gaceta_documento}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {gaceta.gaceta_titulo}
                        </a>
                    </h5>
                    <span className="subtitle b2 text-capitalize">
                        {gaceta.category}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default gacetaItem;
