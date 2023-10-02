import React from 'react';
import { NavLink } from "react-router-dom";
import { TIPOS } from '../../../types/types';
import { AES } from 'crypto-js';
import ReactPlayer from 'react-player/youtube'

const SidebarPost = ({cat,post}) => {
    const encryptId = (data) => {
        const encryptedData = AES.encrypt(JSON.stringify(data), process.env.REACT_APP_ENCRYPT).toString();
        return encodeURIComponent(encryptedData); // Codifica el resultado antes de usarlo en una URL
    };

    return (
        <ul>
            {cat === TIPOS.SERVICIOS ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.serv_id)}`}>
                            <img className="radius" style={{width: '100%',height:'200px'}} src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="servicios" />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.serv_nombre}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
            {cat === TIPOS.OFERTAS_ACADEMICAS ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.ofertas_id)}`}>
                            <img className="radius" style={{width: '100%'}} src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt="ofertas" />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.ofertas_titulo}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
            {cat === TIPOS.PUBLICACIONES ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.publicaciones_id)}`}>
                            <img className="radius" style={{width: '100%'}} src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="publicaciones" />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.publicaciones_titulo}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
            {cat === TIPOS.EVENTOS ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.evento_id)}`}>
                            <img className="radius" style={{width: '100%'}} src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt="eventos" />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.evento_titulo}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
            {cat === TIPOS.VIDEOS ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.video_id)}`}>
                        <ReactPlayer 
                          url={item.video_enlace} 
                          className='react-player'
                          width='100%'
                          height='400px'
                        />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.video_titulo}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
            {cat === TIPOS.CONVOCATORIAS || cat === TIPOS.COMUNICADOS || cat === TIPOS.AVISOS ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.idconvocatorias)}`}>
                            <img className="radius" style={{width: '100%'}} src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="convocatorias" />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.con_titulo}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
            {cat === TIPOS.CURSOS || cat === TIPOS.SEMINARIOS ? post.map((item, index) => {
                return(
                    <li key={index}>                        
                        <NavLink to={`/detalle/${cat}/${encryptId(item.iddetalle_cursos_academicos)}`}>
                            <img className="radius" style={{width: '100%'}} src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="cursos" />
                            <span style={{fontSize:'1em',textAlign:'center',display:'block',paddingTop:'1em'}}>{item.det_titulo}</span>
                        </NavLink>
                    </li>
                )
            }) : null}
        </ul>
    )
}

export default SidebarPost
