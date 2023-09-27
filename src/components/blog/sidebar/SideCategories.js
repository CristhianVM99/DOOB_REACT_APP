import React from 'react';
import {flatDeep, slugify, containsObject} from '../../../utils';
import BlogListData from "../../../data/blog/BlogList.json";
import {Link} from "react-router-dom";
import { TIPOS } from '../../../types/types';


const SideCategories = ({servicios, ofertas, publicaciones, gacetas, eventos, videos, convocatorias, comunicados, avisos, cursos, seminarios}) => {
    const cats = BlogListData.map(item => {
        return item.categories;
    });

    let singleCatArray = flatDeep(cats);
    let categories = [];
    singleCatArray.forEach(cat => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1
        }
        const objIndex = containsObject(obj, categories);
        if(objIndex !== -1){
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1
            }
        } else {
            categories.push(obj);
        }
    })

    return (
        <ul className="category-list ">
            <li>
                <Link to={`/recursos/${TIPOS.SERVICIOS}`}>
                    <span className="left-content">{`SERVICIOS`}</span> 
                    <span className="count-text">{servicios.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.OFERTAS_ACADEMICAS}`}>
                    <span className="left-content">{`OFERTAS ACADEMICAS`}</span> 
                    <span className="count-text">{ofertas.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.PUBLICACIONES}`}>
                    <span className="left-content">{`PUBLICACIONES`}</span> 
                    <span className="count-text">{publicaciones.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.GACETAS}`}>
                    <span className="left-content">{`GACETAS`}</span> 
                    <span className="count-text">{gacetas.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.EVENTOS}`}>
                    <span className="left-content">{`EVENTOS`}</span> 
                    <span className="count-text">{eventos.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.VIDEOS}`}>
                    <span className="left-content">{`VIDEOS`}</span> 
                    <span className="count-text">{videos.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.CONVOCATORIAS}`}>
                    <span className="left-content">{`CONVOCATORIAS`}</span> 
                    <span className="count-text">{convocatorias.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.COMUNICADOS}`}>
                    <span className="left-content">{`COMUNICADOS`}</span> 
                    <span className="count-text">{comunicados.length}</span>
                </Link>
            </li>            
            <li>
                <Link to={`/recursos/${TIPOS.AVISOS}`}>
                    <span className="left-content">{`AVISOS`}</span> 
                    <span className="count-text">{avisos.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.CURSOS}`}>
                    <span className="left-content">{`CURSOS`}</span> 
                    <span className="count-text">{cursos.length}</span>
                </Link>
            </li>
            <li>
                <Link to={`/recursos/${TIPOS.SEMINARIOS}`}>
                    <span className="left-content">{`SEMINARIOS`}</span> 
                    <span className="count-text">{seminarios.length}</span>
                </Link>
            </li>
        </ul>
    )
}

export default SideCategories
