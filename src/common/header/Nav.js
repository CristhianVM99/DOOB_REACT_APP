import React from 'react';
import {Link} from "react-router-dom";
import { TIPOS } from '../../types/types';
import { getLinksInstExtAll } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Nav = () => {

    /* OBTENCION DE INFORMACION DEL STORE LINKS  */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ['links_externos'],
        queryFn: getLinksInstExtAll,
    })

    /* TIPADO PARA LA FILTRACION PARA LOS LINKS QUE PERTENCEN AL NAV CON EL NOMBRE DE KARDEX */
    const TIPO_LINK = {
        KARDEX: 'KARDEX',
        BIBLIOTECA: 'BIBLIOTECA'
    }

    if(!loading_links_externos){

        /* FILTRADO DE LINKS QUE TENGAN EL TIPO 'KARDEX' y 'BIBLIOTECA' */
        const links_filter = links.filter((e) => e.ei_tipo === TIPO_LINK.KARDEX)
        const links_biblioteca = links.filter((e) => e.ei_tipo === TIPO_LINK.BIBLIOTECA)

        return (
            <ul className="mainmenu">
    
                <li><Link to="/">Inicio</Link></li>
    
                <li className="has-droupdown"><Link to="#">Nosotros</Link>
                    <ul className="submenu">
                        <li><Link to="/sobreNosotros">Misión y Visión</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>                    
                    </ul>
                </li>   
    
                <li className="has-droupdown"><Link to="#">Academia</Link>
                    <ul className="submenu">
                        <li><Link to={`/academia/${TIPOS.CALENDARIO}`}>Calendario Académico</Link></li>
                        <li><Link to={`/academia/${TIPOS.HORARIO}`}>Horario</Link></li>
                        <li><Link to={`/academia/${TIPOS.PLANESTUDIO}`}>Plan de Estudio</Link></li>
                        <li><Link to={`/academia/${TIPOS.REGLAMENTO}`}>Reglamento mod. De Graduación</Link></li>
                    </ul>
                </li>                  
    
                <li className="has-droupdown"><Link to="#">Institucion</Link>
                    <ul className="submenu">
                        <li><Link to={`/institucion/${TIPOS.CONVENIOS}`}>Convenios Institucionales</Link></li>
                        <li><Link to={`/institucion/${TIPOS.PASANTIAS}`}>Pasantias</Link></li>
                        <li><Link to={`/institucion/${TIPOS.TRABAJOS}`}>Trabajos Dirigidos</Link></li>
                        <li><Link to={`/institucion/${TIPOS.INSTITUTO_INVESTIGACION}`}>Instituto de Investigacion</Link></li>
                    </ul>
                </li>
    
                <li className="has-droupdown"><Link to="#">Convocatorias y Cursos</Link>
                    <ul className="submenu">
                        <li><Link to={`/recursos/${TIPOS.CONVOCATORIAS}`}>Convocatorias</Link></li>
                        <li><Link to={`/recursos/${TIPOS.COMUNICADOS}`}>Comunicados</Link></li>
                        <li><Link to={`/recursos/${TIPOS.AVISOS}`}>Avisos</Link></li>
                        <li><Link to={`/recursos/${TIPOS.CURSOS}`}>Cursos</Link></li>
                        <li><Link to={`/recursos/${TIPOS.SEMINARIOS}`}>Seminarios</Link></li>
                    </ul>
                </li>
    
                <li className="has-droupdown"><Link to="#">Más</Link>
                    <ul className="submenu">
                        <li><Link to={`/recursos/${TIPOS.SERVICIOS}`}>Servicios</Link></li>
                        <li><Link to={`/recursos/${TIPOS.OFERTAS_ACADEMICAS}`}>Ofertas Académicas</Link></li>
                        <li><Link to={`/recursos/${TIPOS.PUBLICACIONES}`}>Publicaciones</Link></li>
                        <li><Link to={`/recursos/${TIPOS.GACETAS}`}>Gacetas</Link></li>
                        <li><Link to={`/recursos/${TIPOS.EVENTOS}`}>Eventos</Link></li>
                        <li><Link to={`/recursos/${TIPOS.VIDEOS}`}>Videos</Link></li>
                    </ul>
                </li>

                {links_filter.length > 0 ? (
                    <li className="has-droupdown"><Link to="#">Kardex</Link>
                        <ul className="submenu">
                            {links_filter.map((item, index)=>(
                                <li key={index}><a href={item.ei_link} target='_blank' rel="noopener noreferrer">{item.ei_nombre}</a></li>                            
                            ))}
                        </ul>
                    </li>
                ): null}

                {links_biblioteca.length > 0 ? (
                    <li className="has-droupdown"><Link to="#">Biblioteca</Link>
                        <ul className="submenu">
                            {links_biblioteca.map((item, index)=>(
                                <li key={index}><a href={item.ei_link} target='_blank' rel="noopener noreferrer">{item.ei_nombre}</a></li>                            
                            ))}
                        </ul>
                    </li>
                ):null}
            </ul>
        )
    }
    return null
}
export default Nav;
