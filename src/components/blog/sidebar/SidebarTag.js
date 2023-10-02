import React from 'react';
import {flatDeep, slugify, containsObject} from '../../../utils';
import BlogListData from "../../../data/blog/BlogList.json";
import {Link} from "react-router-dom";
import { TIPOS } from '../../../types/types';


const SidebarTag = () => {
    const links = [
        {title: "Calendario Académico",link:`/academia/${TIPOS.CALENDARIO}`},
        {title: "Horario",link:`/academia/${TIPOS.HORARIO}`},
        {title: "Plan de Estudio",link:`/academia/${TIPOS.PLANESTUDIO}`},
        {title: "Reglamento",link:`/academia/${TIPOS.REGLAMENTO}`},
        {title: "Convenios Institucionales",link:`/academia/${TIPOS.CONVENIOS}`},
        {title: "Pasantias",link:`/academia/${TIPOS.PASANTIAS}`},
        {title: "Trabajos Dirigidos",link:`/academia/${TIPOS.TRABAJOS}`},
        {title: "Instituto de Investigacion",link:`/academia/${TIPOS.INSTITUTO_INVESTIGACION}`},
    ]
    return (
        <ul className="tagcloud">
            {links.map((link, index) => {
                return(
                    <Link key={index} to={link.link}>{link.title}</Link>
                )
            })}
        </ul>
    )
}

export default SidebarTag
