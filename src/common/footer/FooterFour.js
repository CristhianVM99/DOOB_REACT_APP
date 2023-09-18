import React from 'react';
import {Link} from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import NewsletterOne from "./NewsletterOne";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import { getInstitucion, getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

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
            institucion_correo1,
            institucion_correo2,
            institucion_celular1,
            institucion_celular2,
            institucion_telefono1,
            institucion_telefono2,
            institucion_logo,
            institucion_direccion,
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
                                        <h4 className="title">{footerIntemOne.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexOneLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <div className="widget-menu-top">
                                            <h4 className="title">{footerIntemTwo.title}</h4>
                                            <div className="inner">
                                                <ul className="footer-link link-hover">
                                                    {indexThreeLink.map((data, index) => (
                                                        <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <h4 className="title">{footerIntemThree.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexTwoLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
    
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                    <div className="rn-footer-widget">
                                        <h4 className="title">{footerIntemFour.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexTwoLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
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
                    <NewsletterOne newsletetrStyle="rn-newsletter-default" extraClass="border-top-bottom" />
                    <div className="copyright-area copyright-style-one no-border">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="copyright-left">
                                        <ul className="ft-menu link-hover">
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms And Condition</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="copyright-right text-center text-md-end">
                                        <p className="copyright-text">© Doob {new Date().getFullYear()}</p>
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
