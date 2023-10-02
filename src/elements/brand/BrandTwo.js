import React from "react";
import {
    getLinksInstExtAll,
    getStaticDataIndex,
} from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../../types/types";

const BrandList = [
    {
        image: "./images/brand/brand-01.png",
    },
    {
        image: "./images/brand/brand-02.png",
    },
    {
        image: "./images/brand/brand-03.png",
    },
    {
        image: "./images/brand/brand-04.png",
    },
    {
        image: "./images/brand/brand-05.png",
    },
    {
        image: "./images/brand/brand-06.png",
    },
    {
        image: "./images/brand/brand-07.png",
    },
    {
        image: "./images/brand/brand-08.png",
    },
    {
        image: "./images/brand/brand-01.png",
    },
    {
        image: "./images/brand/brand-02.png",
    },
    {
        image: "./images/brand/brand-03.png",
    },
    {
        image: "./images/brand/brand-04.png",
    },
    {
        image: "./images/brand/brand-05.png",
    },
    {
        image: "./images/brand/brand-06.png",
    },
    {
        image: "./images/brand/brand-07.png",
    },
    {
        image: "./images/brand/brand-08.png",
    },
    {
        image: "./images/brand/brand-07.png",
    },
    {
        image: "./images/brand/brand-08.png",
    },
];

const BrandTwo = ({ brandStyle }) => {
    /* OBTENCION DE INFORMACON DE LINKS EXTERNOS */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ["links_externos"],
        queryFn: getLinksInstExtAll,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    if (!loading_links_externos && !loading_static_data) {
        /* OBTENCION DE LINKS EXTERNOS Y FILTRACION SEGUN KARDEX */
        const { txt_content_links_externos, txt_content_links_btn } =
            staticData;
        const links_filter = links.filter((e) => e.ei_tipo === TIPOS.KARDEX);
        return (
            <ul className={`brand-list ${brandStyle}`}>
                {links_filter.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.ei_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/LinksExternos/${item.ei_imagen}`}
                                alt="Brand Image"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
    return null;
};

export default BrandTwo;
