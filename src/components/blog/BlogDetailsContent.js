import React from 'react';
import SidebarTag from './sidebar/SidebarTag';
import SideCategories from './sidebar/SideCategories';
import Comment from './Comment';
import {slugify} from "../../utils";
import {Link} from "react-router-dom";
import { FiUser, FiCalendar } from "react-icons/fi";
import { TIPOS } from '../../types/types';
import ReactPlayer from 'react-player/youtube'



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
        
    return (
        <>
            {cat === TIPOS.SERVICIOS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.serv_nombre}</h1>
                                </div>
                                {/* <ul className="rn-meta-list">
                                    <li><FiUser /><Link to={"/"}>{cat}</Link></li>
                                    <li><FiCalendar />{`data.date`}</li>
                                </ul> */}
                                <div className="thumbnail alignwide mt--60 mr--5 ml--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="Blog Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
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
            
            {cat === TIPOS.OFERTAS_ACADEMICAS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.ofertas_titulo}</h1>
                                </div>                                
                                <div className="thumbnail alignwide mt--60 mr--5 ml--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt="Blog Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <hr />
                                <h5>DESCRIPCION</h5>
                                <hr />
                                <div dangerouslySetInnerHTML={{ __html: item.ofertas_descripcion }}></div>                                                                                                
                                <hr />
                                <h5>DATOS DEL SERVICIO</h5>
                                <hr />
                                <p>celular : <span>{item.serv_nro_celular}</span></p>
                                <p>Inicio de la Oferta : <span>{formatearFecha(item.ofertas_inscripciones_ini)}</span></p>
                                <p>Fin de la Oferta : <span>{formatearFecha(item.ofertas_inscripciones_fin)}</span></p>
                                <p>Fecha de Examen : <span>{formatearFecha(item.ofertas_fecha_examen)}</span> </p>
                                <p>Referencia de la Oferta : <span>{item.ofertas_referencia}</span></p>                                                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}

            {cat === TIPOS.PUBLICACIONES ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.publicaciones_titulo}</h1>
                                </div>                                
                                <div className="thumbnail alignwide mt--60 mr--5 ml--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="Blog Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />                    
                            <div dangerouslySetInnerHTML={{ __html: item.publicaciones_descripcion }}></div>                                                                                                                                                                            
                            <hr />
                            <h5>DATOS DE LA PUBLICACIÓN</h5>
                            <hr />
                            <p>Fecha de Publicacion : <span>{item.publicaciones_fecha}</span></p>
                            <p>Autor : <span>{item.publicaciones_autor}</span></p>
                            <p>Documento : <span>{item.publicaciones_documento}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}

            {cat === TIPOS.EVENTOS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.evento_titulo}</h1>
                                </div>                                
                                <div className="thumbnail alignwide mt--60 mr--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt="Blog Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />                    
                            <div dangerouslySetInnerHTML={{ __html: item.publicaciones_descripcion }}></div>                                                                                                                                                                            <div dangerouslySetInnerHTML={{ __html: item.evento_descripcion }}></div>                                                
                            <hr />
                            <h5>DATOS DEL EVENTO</h5>
                            <hr />
                            <p>Fecha del Evento : <span>{formatearFecha(item.evento_fecha)}</span></p>
                            <p>Hora del Evento : <span>{convertirHora(item.evento_hora)}</span></p>
                            <p>Lugar del Evento : <span>{item.evento_lugar}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}

            {cat === TIPOS.VIDEOS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.video_titulo}</h1>
                                </div>                                
                                <div className="thumbnail alignwide mt--60 mr--5 ml--5">
                                <ReactPlayer 
                                    url={item.video_enlace} 
                                    className='react-player'
                                    width='100%'
                                    height='400px'
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                        <hr />
                        <h5>DESCRIPCION</h5>
                        <hr />                    
                        <div dangerouslySetInnerHTML={{ __html: item.video_breve_descripcion }}></div>                                                                                                                                                                                                                                                                                                                            
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}

            {cat === TIPOS.CONVOCATORIAS || cat === TIPOS.COMUNICADOS || cat === TIPOS.AVISOS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.con_titulo}</h1>
                                </div>                                
                                <div className="thumbnail alignwide mt--60 mr--5 ml--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="Blog Images" />                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                        <hr />
                        <h5>DESCRIPCION</h5>
                        <hr />                    
                        <div dangerouslySetInnerHTML={{ __html: item.con_descripcion }}></div>                                                                                                                                                                            
                        <hr />
                        <h5>DATOS E INFORMACIÓN</h5>
                        <hr />
                        <p>Fecha de inicio : <span>{formatearFecha(item.con_fecha_inicio)}</span></p>
                        <p>Fecha de Fin : <span>{formatearFecha(item.con_fecha_fin)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}

            {cat === TIPOS.CURSOS || cat === TIPOS.SEMINARIOS ? (<>
                <div className="post-page-banner rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content text-left">
                                <div className="page-title text-center">
                                    <h1 className="theme-gradient">{item.det_titulo}</h1>
                                </div>                                
                                <div className="thumbnail alignwide mt--60 mr--5 ml--5">
                                    <img className="w-100 radius" src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="Blog Images" />                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-content pt--60 rn-section-gapBottom">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <hr />
                            <h5>DESCRIPCION</h5>
                            <hr />                    
                            <div dangerouslySetInnerHTML={{ __html: item.det_descripcion }}></div>                                                                                                                                                                            
                            <hr />
                            <h5>DATOS E INFORMACIÓN</h5>
                            <hr />
                            <p>Costo para estudiantes : <span>{item.det_costo}</span></p>
                            <p>Costo para Extranjeros : <span>{item.det_costo_ext}</span></p>
                            <p>Costo para Profesionales : <span>{item.det_costo_profe}</span></p>
                            <p>Cupos disponibles : <span>{item.det_cupo_max}</span></p>
                            <p>Carga Horaria : <span>{item.det_carga_horaria}</span></p>
                            <p>Lugar de Capacitacion : <span>{item.det_lugar_curso}</span></p>
                            <p>Modalidad : <span>{item.det_modalidad}</span></p>
                            <p>Fecha de Inicio : <span>{formatearFecha(item.det_fecha_ini)}</span></p>
                            <p>Fecha de Fin : <span>{formatearFecha(item.det_fecha_fin)}</span></p>
                            <p>Hora de Inicio : <span>{convertirHora(item.det_hora_ini)}</span></p>
                            <p>Enlace de WhatsApp : <span><a style={{color: 'var(--color-primario)'}} target='_blank' rel="noopener noreferrer" href={item.det_grupo_whatssap}>Link de Curso...</a></span></p>
                            <p>Version del Curso : <span>{item.det_version}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            </>) : null}
        </>
    )
}
export default BlogDetailsContent;
