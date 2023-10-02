import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiLinkedin,
    FiChevronRight,
    FiMapPin,
    FiPhone,
    FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { getInstitucion } from "../../api/institucionAPI";

const HeaderTopBar = () => {
    // /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });
    if (!loading_institucion) {
        /* datos de la institución */
        const {
            institucion_nombre,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,
            institucion_iniciales,
            institucion_logo,
            institucion_direccion,
            institucion_celular1,
        } = institucion;

        return (
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="header-left">
                                <p>
                                    <a href="#link">
                                        Desarrolladores <FiChevronRight />
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="header-right">
                                <div className="address-content">
                                    <p>
                                        <FiMapPin />
                                        <span>{institucion_direccion}</span>
                                    </p>
                                    <p>
                                        <FiPhone />
                                        <span>
                                            (+591) {institucion_celular1}
                                        </span>
                                    </p>
                                </div>
                                <div className="social-icon-wrapper">
                                    <ul className="social-icon social-default icon-naked">
                                        <li>
                                            <a
                                                href={institucion_facebook}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <FiFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={institucion_twitter}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <FiTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={institucion_youtube}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <FiYoutube />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default HeaderTopBar;
