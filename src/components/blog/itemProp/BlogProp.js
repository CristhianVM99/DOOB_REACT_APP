import React, { useState, useEffect } from "react";
import BlogClassicData from "../../../data/blog/BlogList.json";
import BlogList from "./BlogList";
import { FaSpinner } from "react-icons/fa";
import filters from "./Filters";
import { TIPOS } from "../../../types/types";

const alldataBLog = BlogClassicData;
const BlogProp = ({ column, StyleVarProp, cat }) => {
    const [getAllItems] = useState(alldataBLog);
    const [dataVisibleCount, setDataVisibleCount] = useState(6);
    const [dataIncrement] = useState(3);
    const [noMorePost, setNoMorePost] = useState(false);
    const [activeFilter, setActiveFilter] = useState("");
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        setActiveFilter(filters[0].text.toLowerCase());
        setVisibleItems(
            getAllItems.filter((item) => item.id <= dataVisibleCount)
        );
    }, []);

    const handleLoadmorebl = (e) => {
        e.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;
        if (dataVisibleCount >= getAllItems.length) {
            setNoMorePost(true);
        } else {
            setDataVisibleCount(tempCount);
            if (activeFilter === filters[0].text.toLowerCase()) {
                setVisibleItems(
                    getAllItems.filter((data) => data.id <= tempCount)
                );
            } else {
                setVisibleItems(
                    getAllItems.filter(
                        (data) =>
                            data.text === activeFilter && data.id <= tempCount
                    )
                );
            }
        }
    };

    return (
        <>
            {cat === TIPOS.SERVICIOS ||
            cat === TIPOS.OFERTAS_ACADEMICAS ||
            cat === TIPOS.PUBLICACIONES ||
            cat === TIPOS.GACETAS ||
            cat === TIPOS.EVENTOS ||
            cat === TIPOS.VIDEOS ||
            cat === TIPOS.CONVOCATORIAS ||
            cat === TIPOS.COMUNICADOS ||
            cat === TIPOS.AVISOS ||
            cat === TIPOS.CURSOS ||
            cat === TIPOS.SEMINARIOS ? (
                <>
                    <div className="col-lg-12">
                        <div className="row row--15">
                            <BlogList StyleVar={StyleVarProp} tipo={cat} />
                        </div>
                    </div>
                    {/* <div className="col-lg-12 text-center">
                <div className="rwt-load-more text-center mt--60">
                    <button
                        className="btn btn-default btn-icon"
                        onClick={handleLoadmorebl}
                        disabled={noMorePost ? "disabled" : null}
                    >
                        {noMorePost ? (
                        "No Post Here"
                        ) : (
                        <span>
                            View More Post 
                            <span className="icon">
                                <FaSpinner />
                            </span>
                        </span>
                        )}
                    </button>
                </div>
            </div> */}
                </>
            ) : null}
        </>
    );
};

export default BlogProp;
