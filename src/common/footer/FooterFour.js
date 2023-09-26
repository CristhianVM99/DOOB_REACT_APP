import React from 'react';
import {Link} from "react-router-dom";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import { getInstitucion, getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const FooterFour = () => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticData'],
        queryFn: getStaticData,
    });

    if(!loading_institucion && !loading_static_data){

        /* DATOS DE LA INSTITUCION */
        const {        
            institucion_nombre,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter, 
            institucion_iniciales       
        } = institucion

        /* DATOS ESTATICOS */
        const {
            txt_content_footer,
        } = staticData


        return (
            <>
                <footer className="rn-footer footer-style-default no-border">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <h4 className="title">Academia</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><Link to={`/academia/${TIPOS.CALENDARIO}`}>Calendario Académico</Link></li>
                                                <li><Link to={`/academia/${TIPOS.HORARIO}`}>Horario</Link></li>
                                                <li><Link to={`/academia/${TIPOS.PLANESTUDIO}`}>Plan de Estudio</Link></li>
                                                <li><Link to={`/academia/${TIPOS.REGLAMENTO}`}>Reglamento mod. de Graduacion</Link></li>                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <div className="widget-menu-top">
                                            <h4 className="title">Institución</h4>
                                            <div className="inner">
                                                <ul className="footer-link link-hover">
                                                    <li><Link to={`/institucion/${TIPOS.CONVENIOS}`}>Convenios Institucionales</Link></li>
                                                    <li><Link to={`/institucion/${TIPOS.PASANTIAS}`}>Pasantías</Link></li>
                                                    <li><Link to={`/institucion/${TIPOS.TRABAJOS}`}>Trabajos Dirigidos</Link></li>
                                                    <li><Link to={`/institucion/${TIPOS.INSTITUTO_INVESTIGACION}`}>Instituto de Investigación</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <h4 className="title">Convocatorias y Cursos</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><Link to={`/recursos/${TIPOS.CONVOCATORIAS}`}>Convocatorias</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.COMUNICADOS}`}>Comunicados</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.AVISOS}`}>Avisos</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.SEMINARIOS}`}>Cursos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <h4 className="title">Más</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><Link to={`/recursos/${TIPOS.SERVICIOS}`}>Servicios</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.OFERTAS_ACADEMICAS}`}>Ofertas Académicas</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.PUBLICACIONES}`}>Publicaciones</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.GACETAS}`}>Gacetas</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.EVENTOS}`}>Eventos</Link></li>
                                                <li><Link to={`/recursos/${TIPOS.VIDEOS}`}>Videos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <h4 className="title">{institucion_nombre} | {institucion_iniciales}</h4>
                                        <div className="inner">
                                            <h6 className="subtitle">{txt_content_footer}</h6>
                                            <ul className="social-icon social-default justify-content-start">
                                                <li><a target='_blank' rel="noopener noreferrer" href={institucion_facebook}><FiFacebook /></a></li>
                                                <li><a target='_blank' rel="noopener noreferrer" href={institucion_twitter}><FiTwitter /></a></li>
                                                <li><a target='_blank' rel="noopener noreferrer" href={institucion_youtube}><FiYoutube /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area copyright-style-one no-border">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="copyright-left">
                                        <ul className="ft-menu link-hover">
                                            <li><span>Universidad Pública de El Alto</span></li>
                                            <li><span>{institucion_nombre}</span></li>
                                            <li><a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/'>Web Developer <span>CristhianVM</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="copyright-right text-center text-md-end">
                                        <p className="copyright-text"><a target='_blank' rel="noopener noreferrer" href='https://sie.upea.bo/l'>© SIE {new Date().getFullYear()}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <ScrollTop />
            </>
        ) 
    }
    return null
}

export default FooterFour;
