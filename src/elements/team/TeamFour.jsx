import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import { getInstitucion } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";

const TeamFour = ({ column, teamStyle }) => {
    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    if (!loading_institucion) {
        /* INFORMACION DE LA INSTITUCION */
        const { autoridad, institucion_nombre } = institucion;

        return (
            <div className="row row--15">
                {autoridad.map((item, index) => (
                    <div className={`${column}`} key={index}>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}
                        >
                            <div className={`rn-team ${teamStyle}`}>
                                <div className="inner">
                                    <figure className="thumbnail">
                                        <img
                                            src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`}
                                            alt="Corporate React Template"
                                            style={{
                                                height: "600px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </figure>
                                    <figcaption className="content">
                                        <div className="team-info">
                                            <h2
                                                className="title"
                                                style={{ color: "#fff" }}
                                            >
                                                {institucion_nombre}
                                            </h2>
                                            <h6 className="subtitle ">
                                                {item.nombre_autoridad}
                                            </h6>
                                            <div className="team-form">
                                                <span className="location">
                                                    {item.cargo_autoridad}
                                                </span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};
export default TeamFour;
