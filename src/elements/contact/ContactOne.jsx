import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import { getInstitucion, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import RandomImage from '../../utils/RandomImage';

const ContactOne = () => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    if(!loading_institucion && !loading_images){

        const {
            institucion_celular1,
            institucion_celular2,
            institucion_telefono1,
            institucion_telefono2,
            institucion_correo1,
            institucion_correo2,
            institucion_direccion,
            institucion_api_google_map,
            institucion_iniciales,
            portada,
        } = institucion;
        
        const img = RandomImage(portada)

        return (
            <>
                <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="rn-contact-address mt_dec--30">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiHeadphones />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Celulares y Teléfonos de la Institución</h4>
                                            <p><a href={`tel:+591 ${institucion_celular1}`}>+591 {institucion_celular1}</a></p>
                                            <p><a href={`tel:+591 ${institucion_celular2}`}>+591 {institucion_celular2}</a></p>
                                            <p><a href={`tel: ${institucion_telefono1}`}>tel : {institucion_telefono1}</a></p>
                                            <p><a href={`tel: ${institucion_telefono2}`}>tel : {institucion_telefono2}</a></p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiMail />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Correos Electrónicos de la Institución</h4>
                                            <p><a href={`mailto:${institucion_correo1}`}>{institucion_correo1}</a></p>
                                            <p><a href={`mailto:${institucion_correo2}`}>{institucion_correo2}</a></p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiMapPin />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Direccion</h4>
                                            <p>{institucion_direccion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row mt--40 row--15">
                    <div className="col-lg-7">
                        <img src={img ?? images.BgThree} alt='Carrera' style={{height:'100%',width:'100%'}}/>
                    </div>
                    <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <iframe
                        src={institucion_api_google_map}
                        width="100%"
                        height="400px"
                        loading="lazy"
                    ></iframe>
                    </div>
                </div>
            </>
        )
    }
    return null
}
export default ContactOne;