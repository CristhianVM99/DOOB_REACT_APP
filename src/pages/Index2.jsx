import React from "react";
import { Link } from "react-router-dom";
import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderTwo from "../common/header/HeaderTwo";
import FooterOne from "../common/footer/FooterOne";

import CalltoActionSix from "../elements/calltoaction/CalltoActionSix";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import AboutTwo from "../elements/about/AboutTwo";
import SlipThree from "../elements/split/SlipThree";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
import TeamFour from "../elements/team/TeamFour";
import { TIPOS } from "../types/types";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import ServiceFive from "../elements/service/ServiceFive";
import VideoItem from "../elements/video/VideoItem";
var BlogListData = BlogClassicData.slice(0, 3);

const Index2 = () => {
    /* obtención de la información sobre la institución */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    /* obtención de la información estática necesaria para la pagina */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    /* obtención de información estática de imágenes */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    if (!loading_institucion && !loading_static_data && !loading_images) {
        const {
            institucion_nombre,
            portada,
            institucion_iniciales,
            institucion_link_video_vision,
        } = institucion;
        /* obtención de imágenes random de la portada */
        const img = RandomImage(portada);

        /* datos estáticos */
        const {
            txt_content_banner_two,
            txt_content_banner,
            txt_content_btn,
            txt_content_banner_three,
            txt_content_convocatorias,
            txt_content_cursos,
            txt_content_autoridades,
        } = staticData;

        const Video = [
            {
                id: "01",
                image: img ?? images.BgConvocatorias,
                popupLink: [institucion_link_video_vision],
            },
        ];

        return (
            <>
                <SEO title={`${institucion_nombre} | PRINCIPAL`} />
                <main className="page-wrapper">
                    <HeaderTwo
                        btnStyle="btn-small"
                        HeaderSTyle="header-not-transparent"
                    />

                    {/* Start Slider area  */}
                    <div
                        className="slider-area slider-style-5 bg-overlay-solid height-850 bg_image"
                        data-black-overlay="3"
                        style={{
                            backgroundImage: `url(${img ?? images.BgOne})`,
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-start">
                                        <h4 className="subtitle">
                                            {institucion_iniciales}
                                        </h4>
                                        <h1
                                            className="title display-one"
                                            style={{ fontSize: "6em" }}
                                        >
                                            {institucion_nombre}
                                        </h1>
                                        <div className="button-group mt--40 mt_sm--20">
                                            <p style={{ fontSize: "1.5em" }}>
                                                {txt_content_banner}
                                            </p>
                                            <a
                                                className="btn-default"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                                            >
                                                {txt_content_btn}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Slider area  */}

                    {/* inicio autoridades */}
                    <div className="rwt-testimonial-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Nuestras..."
                                        title={txt_content_autoridades}
                                        description={txt_content_banner_two}
                                    />
                                </div>
                            </div>
                            <TestimonialThree teamStyle="" />
                        </div>
                    </div>
                    {/* final de autoridades  */}

                    <Separator />
                    {/* inicio de convocatorias - comunicados - avisos  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Lo Último de..."
                                        title={txt_content_convocatorias}
                                        description={txt_content_banner_three}
                                    />
                                </div>
                            </div>
                            <ServiceFive
                                serviceStyle="gallery-style"
                                textAlign="text-start"
                                tipo={
                                    TIPOS.CONVOCATORIAS +
                                    TIPOS.COMUNICADOS +
                                    TIPOS.AVISOS
                                }
                            />
                        </div>
                    </div>
                    {/* fin de convocatorias - comunicados - avisos  */}

                    {/* Start Video Area  */}
                    <div className="rwt-video-area rn-section-gapBottom">
                        <div className="container">
                            <div className="row">
                                {Video.map((item) => (
                                    <div className="col-lg-12" key={item.id}>
                                        <VideoItem galleryItem={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}

                    <Separator />
                    {/* inicio de cursos - seminarios  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Lo Último de..."
                                        title={txt_content_cursos}
                                        description={txt_content_banner}
                                    />
                                </div>
                            </div>
                            <ServiceFive
                                serviceStyle="gallery-style"
                                textAlign="text-start"
                                tipo={TIPOS.CURSOS + TIPOS.SEMINARIOS}
                            />
                        </div>
                    </div>
                    {/* fin de cursos - seminarios */}

                    <FooterOne />
                </main>
            </>
        );
    }
    return null;
};

export default Index2;
