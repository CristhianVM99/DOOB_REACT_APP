import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";
import { getInstitucion } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const AboutFour = ({image}) => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    if(!loading_institucion){

        const {
            institucion_mision,
            institucion_vision,
            institucion_objetivos,
            institucion_nombre,
            institucion_link_video_vision,
            institucion_iniciales,
            portada,
        } = institucion;

        const PopupData = [
            {
                id: "01",
                image: "./images/bg/bg-image-4.jpg",
                popupLink: [
                    institucion_link_video_vision,
                ],
            }
        ]

        return (
            <div className="about-area about-style-4 rn-section-gap">
                <div className="container">
                    <div className="row row--40 align-items-center">
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <h3 className="title">Obten mas información sobre<br /> la carrera de <strong>{institucion_nombre}</strong></h3>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="icon">
                                                <FiCheck />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">{institucion_iniciales} | Misión</h4>
                                                <p className="text" dangerouslySetInnerHTML={{ __html: institucion_mision }}></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FiCheck />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">{institucion_iniciales} | Visión</h4>
                                                <p className="text" dangerouslySetInnerHTML={{ __html: institucion_vision }}></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FiCheck />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">{institucion_iniciales} | Objetivos</h4>
                                                <p className="text" dangerouslySetInnerHTML={{ __html: institucion_objetivos }}></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="about-btn mt--30">
                                        <a className="btn-default" href="#">About Our Doob</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {PopupData.map((item) => (
                                <div className="video-btn" key={item.id}>
                                    <VideoTwo imagename={`${image}`} galleryItem={item} />
                                </div>
                            ))}
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default AboutFour
