import React from 'react';
import SidebarTag from './sidebar/SidebarTag';
import SideCategories from './sidebar/SideCategories';
import Comment from './Comment';
import {slugify} from "../../utils";
import {Link} from "react-router-dom";
import { FiUser, FiCalendar } from "react-icons/fi";
import { TIPOS } from '../../types/types';



const BlogDetailsContent = ({cat, item}) => {

    /* FORMATEAR FECHA */
    function formatearFecha(fechaString) {
        const fecha = new Date(fechaString);      
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];      
        const día = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const año = fecha.getFullYear();      
        return `${día} de ${mes} de ${año}`;
    }

    function convertirHora(hora24) {
        const [hora, minutos] = hora24.split(':');        
        const horaNum = parseInt(hora, 10);      
        const periodo = horaNum >= 12 ? 'PM' : 'AM';    
        const hora12 = horaNum > 12 ? horaNum - 12 : horaNum === 0 ? 12 : horaNum;
        const horaFormateada = `${hora12}:${minutos} ${periodo}`;
        return horaFormateada;
    }      

    console.log("CATEGORIA",cat);
    console.log("item",item);
    return (
        <>
            {cat === TIPOS.SERVICIOS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.serv_nombre}</h1>
                                </div>
                                <ul className="rn-meta-list">
                                    <li><FiUser /><Link to={"/"}>{`data.author`}</Link></li>
                                    <li><FiCalendar />{`data.date`}</li>
                                </ul>
                                <div className="thumbnail alignwide mt--60 mr--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="Blog Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-2">
                            <div className="">
                                <hr />
                                <h5>DESCRIPCION</h5>
                                <hr />
                                <div dangerouslySetInnerHTML={{ __html: item.serv_descripcion }}></div>                                                                                                
                                <hr />
                                <h5>DATOS DEL SERVICIO</h5>
                                <hr />
                                <p>celular : <span>{item.serv_nro_celular}</span></p>
                                <p>inicio del servicio : <span>{formatearFecha(item.serv_registro)}</span></p>
                            
                                {/* <div className="category-meta">
                                    <span className="text">Tags:</span>
                                    <SidebarTag />
                                </div> */}

                                {/* <div className="rn-comment-form pt--60">
                                    <div className="comment-respond">
                                        <h4 className="title mb--40">Leave a Reply</h4>
                                        <Comment 
                                            url=""
                                            id={data.id}
                                            title={data.title}
                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}
        </>
    )
}
export default BlogDetailsContent;
