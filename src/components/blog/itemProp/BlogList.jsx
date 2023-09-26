import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import BlogClassicData from '../../../data/blog/BlogList.json';
import { TIPOS } from '../../../types/types';
import { getConvocatorias, getCursos, getEventos, getGacetas, getOfertasAcademicas, getPublicaciones, getServicios, getStaticDataIndex, getVideos } from '../../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { AES } from 'crypto-js';
import ReactPlayer from 'react-player/youtube'
var BlogListData = BlogClassicData.slice(0, 3);

const BlogList = ({ StyleVar, tipo }) => {   

    /* OBTENCION DE INFORMACION DEL STORE CONVOCATORIAS */
    const { isLoading: loading_convocatorias, data: convocatorias } = useQuery({
        queryKey: ["convocatorias"],
        queryFn: getConvocatorias,
      });
  
    /* OBTENCION DE INFORMACION DEL STORE CURSO */
      const { isLoading: loading_cursos, data: cursos } = useQuery({
        queryKey: ["cursos"],
        queryFn: getCursos,
    });  
    
    /* OBTENCION DE INFORMACION DEL STORE API SERVICIOS*/
    const { isLoading: loading_servicios, data: servicios } = useQuery({
        queryKey: ["servicios"],
        queryFn: getServicios,
    });
  
    /* OBTENCION DE INFORMACION DEL STORE API OFERTAS ACADEMICAS*/
    const { isLoading: loading_ofertas, data: ofertas } = useQuery({
        queryKey: ["ofertas"],
        queryFn: getOfertasAcademicas,
    });
  
    /* OBTENCION DE INFORMACION DEL STORE API PUBLICACIONES*/
    const { isLoading: loading_publicaciones, data: publicaciones } = useQuery({
        queryKey: ["publicaciones"],
        queryFn: getPublicaciones,
    });
  
    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ["gacetas"],
        queryFn: getGacetas,
    });
  
    /* OBTENCION DE INFORMACION DEL STORE API EVENTOS*/
    const { isLoading: loading_eventos, data: eventos } = useQuery({
        queryKey: ["eventos"],
        queryFn: getEventos,
    });
  
    /* OBTENCION DE INFORMACION DEL STORE API VIDEOS*/
    const { isLoading: loading_videos, data: videos } = useQuery({
        queryKey: ["videos"],
        queryFn: getVideos,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    const encryptId = (data) => {
        const encryptedData = AES.encrypt(JSON.stringify(data), process.env.REACT_APP_ENCRYPT).toString();
        return encodeURIComponent(encryptedData); // Codifica el resultado antes de usarlo en una URL
    };

    function formatearFecha(fechaString) {
        const fecha = new Date(fechaString);
      
        const meses = [
          "enero", "febrero", "marzo", "abril", "mayo", "junio",
          "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];
      
        const día = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const año = fecha.getFullYear();
      
        return `${día} de ${mes} de ${año}`;
    }
    
    if(tipo === TIPOS.CONVOCATORIAS+TIPOS.COMUNICADOS+TIPOS.AVISOS  &&  !loading_convocatorias){

        /* DATOS ESTATICOS */
        const { txt_content_convocatorias, txt_content_btn } = staticData;

        const filteredDataComunicados = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS
        );
        const lastComunicado =
            filteredDataComunicados[filteredDataComunicados.length - 1];
      
        const filteredDataConvocatorias = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS
        );
        const lastConvocatoria =
            filteredDataConvocatorias[filteredDataConvocatorias.length - 1];
      
        const filteredDataAvisos = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS
        );
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];
    
        /* ARRAY CON LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS FILTRADOS */
        const ConvocatoriasAndComunicadosAndAvisos = [
            lastConvocatoria,
            lastComunicado,
            lastAviso,
        ].filter((item) => item !== undefined); 

        return (
            ConvocatoriasAndComunicadosAndAvisos.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt={`Convocatoria`} style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{item.tipo_conv_comun.tipo_conv_comun_titulo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.con_fecha_inicio)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.con_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.CURSOS+TIPOS.SEMINARIOS && !loading_cursos){

        /* FILTRADO DE LOS ULTIMOS CURSOS Y SEMINARIOS. */
        const filteredDataCursos = cursos.filter(
          (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS
        );
        const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];
        
        const filteredDataSeminarios = cursos.filter(
          (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS
        );
        const lastSeminario =
          filteredDataSeminarios[filteredDataSeminarios.length - 1];
        
        /* ARRAY CON LOS ULTIMOS CURSOS Y SEMINARIOS FILTRADOS */
        const CursosAndSeminarios = [lastCurso, lastSeminario].filter(
          (item) => item !== undefined
        );

        return (
            CursosAndSeminarios.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="curso" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{item.tipo_curso_otro.tipo_conv_curso_nombre}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.det_fecha_ini)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.det_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if((tipo === TIPOS.CONVOCATORIAS || tipo === TIPOS.COMUNICADOS || tipo === TIPOS.AVISOS ) && ( !loading_convocatorias)){        

        const items = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === tipo)

        return (
            items.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt={`Convocatoria`} style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{item.tipo_conv_comun.tipo_conv_comun_titulo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.con_fecha_inicio)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.con_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }    
    if((tipo === TIPOS.CURSOS || tipo === TIPOS.SEMINARIOS) && (!loading_cursos)){

        const items = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === tipo
          );

        return (
            items.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="curso" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{item.tipo_curso_otro.tipo_conv_curso_nombre}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.det_fecha_ini)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.det_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.SERVICIOS && !loading_servicios){
        return (
            servicios.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/detalle/${TIPOS.SERVICIOS}/${encryptId(item.serv_id)}`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="curso" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{tipo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.serv_registro)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.serv_nombre}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.OFERTAS_ACADEMICAS && !loading_ofertas){
        return (
            ofertas.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt="oferta" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{tipo==="OFERTAS_ACADEMICAS"?"OFERTAS ACADEMÍCAS" : tipo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.ofertas_inscripciones_ini)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.ofertas_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.PUBLICACIONES && !loading_publicaciones){
        return (
            publicaciones.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="oferta" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{tipo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.publicaciones_fecha)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.publicaciones_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.GACETAS && !loading_gacetas){
        return (
            publicaciones.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="oferta" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{tipo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.publicaciones_fecha)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.publicaciones_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.EVENTOS && !loading_eventos){
        return (
            eventos.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/`} className="image">
                            <img src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt="oferta" style={{height:'600px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{tipo}</Link></li>
                            <li className="separator">/</li>
                            <li>{formatearFecha(item.evento_fecha)}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.evento_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    if(tipo === TIPOS.VIDEOS && !loading_videos){
        return (
            videos.map((item, key) => (
            <div key={key} className="col-lg-4 col-md-6 col-12 mt--30">
                <div className={`rn-card ${StyleVar}`}>
                <div className="inner">
                    <div className="thumbnail">
                        <ReactPlayer 
                          url={item.video_enlace} 
                          className='react-player'
                          width='100%'
                          height='400px'
                        />
                    </div>
                    <div className="content">
                        <ul className="rn-meta-list">
                            <li><Link to={`/`}>{tipo}</Link></li>
                            <li className="separator">/</li>
                            <li>{tipo}</li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/`}>
                                {item.video_titulo}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
            </div>
            ))
        )
    }
    return null
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;
