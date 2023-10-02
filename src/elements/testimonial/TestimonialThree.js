import React from "react";
import Slider from "react-slick";
import { slickDot } from "../../utils/script";
import { getInstitucion } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";

const TestimonialData = [
    {
        form: "Poland",
        description:
            "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "John Due",
        subtitle: "App Developer",
        image: "testimonial-dark-01",
    },
    {
        form: "Germany",
        description:
            "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "John Due",
        subtitle: "App Developer",
        image: "testimonial-dark-02",
    },
    {
        form: "USA",
        description:
            "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "Janen",
        subtitle: "App Developer",
        image: "testimonial-dark-03",
    },
];
const TestimonialThree = ({ teamStyle }) => {
    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    if (!loading_institucion) {
        /* INFORMACION DE LA INSTITUCION */
        const { autoridad, institucion_nombre } = institucion;

        return (
            <div className="row">
                <div className="col-lg-12">
                    <Slider
                        className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60"
                        {...slickDot}
                    >
                        {autoridad.map((item, index) => (
                            <div
                                key={index}
                                className={`testimonial-style-two ${teamStyle}`}
                            >
                                <div className=" order-md-2 col-lg-2 col-md-4"></div>
                                <div className="row align-items-center row--20">
                                    <div className="order-2 order-md-1 col-lg-5 col-md-8 offset-lg-1">
                                        <div className="content mt_sm--40">
                                            <span className="form">
                                                {institucion_nombre}
                                            </span>
                                            <div className="client-info">
                                                <h4
                                                    className="title"
                                                    style={{ fontSize: "2em" }}
                                                >
                                                    {item.nombre_autoridad}
                                                </h4>
                                                <h6 className="subtitle">
                                                    {item.cargo_autoridad}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 order-md-2 col-lg-5 col-md-4">
                                        <div className="thumbnail">
                                            <img
                                                className="w-100"
                                                src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`}
                                                alt="autoridad"
                                                style={{
                                                    objectFit: "cover",
                                                    height: "500px",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
    return null;
};
export default TestimonialThree;
