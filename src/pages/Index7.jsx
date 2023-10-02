import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderTwo from "../common/header/HeaderTwo";
import TabThree from "../elements/tab/TabThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import SlipFour from "../elements/split/SlipFour";
import SlpitOne from "../elements/split/SlpitOne";
import AdvancePricingOne from "../elements/advancePricing/AdvancePricingOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import Separator from "../elements/separator/Separator";
import PortfolioOne from "../elements/portfolio/PortfolioOne";

import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import VideoItem from "../elements/video/VideoItem";
import BrandTwo from "../elements/brand/BrandTwo";
import { TIPOS } from "../types/types";
import ServiceTwo from "../elements/service/ServiceTwo";
import ServiceFive from "../elements/service/ServiceFive";
var BlogListData = BlogClassicData.slice(0, 3);

const Index7 = () => {
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

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    if (!loading_images && !loading_institucion && !loading_static_data) {
        /* datos de la institución */
        const {
            institucion_nombre,
            institucion_iniciales,
            institucion_link_video_vision,
            portada,
        } = institucion;

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

        /* obtención de imágenes random de la portada */
        const img = RandomImage(portada);
        const img2 = RandomImage(portada);
        const img3 = RandomImage(portada);

        const Video = [
            {
                id: "01",
                image: img3 ?? images.BgConvocatorias,
                popupLink: [institucion_link_video_vision],
            },
        ];

        return (
            <>
                <SEO title="International Consulting" />
                <main className="page-wrapper">
                    <HeaderTwo
                        btnStyle="btn-small btn-icon"
                        HeaderSTyle="header-transparent"
                    />

                    {/* Start Slider Area  */}
                    <div
                        className="slider-area slider-style-1 variation-default height-850 bg_image"
                        data-black-overlay="7"
                        style={{
                            backgroundImage: `url(${img ?? images.BgOne}`,
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <h1 className="title display-one">
                                            {institucion_iniciales} <br />{" "}
                                            <span className="theme-gradient">
                                                {institucion_nombre}
                                            </span>
                                        </h1>
                                        <p className="description">
                                            {txt_content_banner_three}
                                        </p>
                                        <div className="button-group">
                                            <Link
                                                className="btn-default btn-medium btn-icon"
                                                to="#"
                                            >
                                                Categorías
                                                <i className="icon">
                                                    <FiArrowRight />
                                                </i>
                                            </Link>
                                            <Link
                                                className="btn-default btn-medium btn-border btn-icon"
                                                to="/contacto"
                                            >
                                                Contacto
                                                <i className="icon">
                                                    <FiArrowRight />
                                                </i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Slider Area  */}

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

                    <div
                        alt="intermedio"
                        style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                            backgroundImage: `url(${img3 ?? images.BgThree})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "noRepeat",
                            backgroundAttachment: "fixed",
                        }}
                    ></div>

                    {/* inicio de video */}
                    <div className="rwt-video-area rn-section-gapBottom mt--160">
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
                    {/* fin de video */}

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
                            <ServiceTwo
                                cardStyle="card-style-1"
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

                    <div
                        alt="intermedio"
                        style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                            backgroundImage: `url(${img3 ?? images.BgThree})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "noRepeat",
                            backgroundAttachment: "fixed",
                        }}
                    ></div>

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

                    {/* inicio links externos */}
                    <div className="rwt-brand-area pb--80 mt--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <h3 className="title">
                                            Links Externos
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <BrandTwo brandStyle="brand-style-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin de links externos */}

                    <FooterTwo />
                    <Copyright />
                </main>
            </>
        );
    }
    return null;
};

export default Index7;
