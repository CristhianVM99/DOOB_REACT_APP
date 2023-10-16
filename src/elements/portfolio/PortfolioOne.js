import React, { useState, useEffect } from "react";
import PortfolioData from "../../data/portfolio/PortfolioData.json";
import PortfolioItem from "./PortfolioItem";
import { FaSpinner } from "react-icons/fa";
import { TIPOS } from "../../types/types";

const filters = [
    {
        id: 1,
        text: "TODOS",
    },
    {
        id: 2,
        text: TIPOS.PASANTIAS,
    },
    {
        id: 3,
        text: TIPOS.CONVENIOS,
    },
    {
        id: 4,
        text: TIPOS.TRABAJOS,
    },
    {
        id: 5,
        text: TIPOS.INSTITUTO_INVESTIGACION,
    },
];

const PortfolioOne = ({
    Column,
    institucion = null,
    gacetas = null,
    publicaciones = null,
    categoria = null,
}) => {
    /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO CONVENIO */
    const filterconvenios = gacetas.filter((e) =>
        e.gaceta_titulo.includes(TIPOS.CONVENIO)
    );
    const convenios = filterconvenios.map((item) => {
        // Copiar el objeto existente y agregar el nuevo campo
        return {
            ...item, // Copiar el objeto existente
            category: TIPOS.CONVENIOS,
        };
    });

    /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO PASANTIA */
    const filterpasantias = gacetas.filter((e) =>
        e.gaceta_titulo.includes(TIPOS.PASANTIA)
    );
    const pasantias = filterpasantias.map((item) => {
        // Copiar el objeto existente y agregar el nuevo campo
        return {
            ...item, // Copiar el objeto existente
            category: TIPOS.PASANTIAS,
        };
    });

    /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO TRABAJO DIRIGIDO */
    const filtertrabajos = gacetas.filter((e) =>
        e.gaceta_titulo.includes(TIPOS.TRABAJO_DIRIGIDO)
    );
    const trabajos = filtertrabajos.map((item) => {
        // Copiar el objeto existente y agregar el nuevo campo
        return {
            ...item, // Copiar el objeto existente
            category: TIPOS.TRABAJOS,
        };
    });

    /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO TRABAJO DIRIGIDO */
    const filterinstitucion = gacetas.filter((e) =>
        e.gaceta_titulo.includes(TIPOS.INSTITUTO)
    );
    const instituto_investigacion = filterinstitucion.map((item) => {
        // Copiar el objeto existente y agregar el nuevo campo
        return {
            ...item, // Copiar el objeto existente
            category: TIPOS.INSTITUTO_INVESTIGACION,
        };
    });

    /* CONCATENACION DE CONVENIOS - PASANTIAS - TRABAJOS DIRIGIDOS */
    const items = convenios.concat(
        pasantias,
        trabajos,
        instituto_investigacion
    );

    const alldata = items;

    const [getAllItems] = useState(alldata);
    //const [dataVisibleCount, setDataVisibleCount] = useState(6);
    //const [dataIncrement] = useState(6) ;
    //const [noMorePost, setNoMorePost] = useState(false);
    const [activeFilter, setActiveFilter] = useState(categoria);
    // let tempData = getAllItems.filter(
    //     (data) =>
    //       data.category === categoria
    // );
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        //setActiveFilter(categoria);
        let tempData = getAllItems.filter(
            (data) => data.category === categoria
        );
        setVisibleItems(tempData);
    }, [categoria]);

    const handleChange = (e) => {
        e.preventDefault();
        //setActiveFilter(e.target.textContent.toUpperCase());
        let tempData;
        if (
            e.target.textContent.toUpperCase() === filters[0].text.toUpperCase()
        ) {
            tempData = getAllItems;
        } else {
            tempData = getAllItems.filter(
                (data) => data.category === e.target.textContent.toUpperCase()
            );
        }
        setVisibleItems(tempData);
    };

    if (gacetas != null && publicaciones != null) {
        return (
            <>
                <div className="row row--15">
                    <div className="col-lg-12">
                        <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                            {filters.map((filter) => (
                                <li className="list-item" key={filter.id}>
                                    <button
                                        onClick={handleChange}
                                        className={
                                            filter.text.toUpperCase() ===
                                            categoria
                                                ? "current"
                                                : " "
                                        }
                                    >
                                        {filter.text ===
                                        TIPOS.INSTITUTO_INVESTIGACION
                                            ? "INSTITUTO DE INVESTIGACION"
                                            : filter.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row row--15">
                    {visibleItems.map((item) => (
                        <div key={item.gaceta_id} className={Column}>
                            <PortfolioItem gaceta={item} />
                        </div>
                    ))}
                </div>

                {/* <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="rwt-load-more text-center mt--50">
                            <button
                                className="btn btn-default btn-large btn-icon"
                                onClick={handleLoadmore}
                                disabled={noMorePost ? "disabled" : null}
                            >
                                {noMorePost ? (
                                "No Item Here"
                                ) : (
                                <span>
                                    Load More 
                                    <span className="icon">
                                        <FaSpinner />
                                    </span>
                                </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div> */}
            </>
        );
    }
    return null;
};

export default PortfolioOne;
