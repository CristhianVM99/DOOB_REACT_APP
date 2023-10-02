import React from "react";
import Typed from "react-typed";
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTwo from "../common/header/HeaderTwo";
import HeaderTopNews from "../common/header/HeaderTopNews";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import AboutOne from "../elements/about/AboutOne";
import ServiceFive from "../elements/service/ServiceFive";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import TeamTwo from "../elements/team/TeamTwo";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
import { TIPOS } from "../types/types";
import TeamFour from "../elements/team/TeamFour";
import VideoItem from "../elements/video/VideoItem";
import BrandTwo from "../elements/brand/BrandTwo";
var BlogListData = BlogClassicData.slice(0, 3);

const Index5 = () => {
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
                <SEO title="Business Consulting 02" />
                <main className="page-wrapper">
                    <HeaderTwo
                        btnStyle="round"
                        HeaderSTyle="header-not-transparent"
                    />

                    {/* Start Slider Area  */}
                    <div
                        className="slider-area slider-style-1 height-850"
                        style={{
                            background: `url(${img ?? images.BgOne})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span className="subtitle">
                                            {institucion_iniciales}
                                        </span>
                                        <h1
                                            className="title  display-two"
                                            style={{
                                                color: "#fff",
                                                textShadow:
                                                    "5px 0px 10px rgba(0,0,0,.5)",
                                            }}
                                        >
                                            {/* Carrera <br />{" "} */}
                                            <Typed
                                                strings={[
                                                    `${institucion_nombre}.`,
                                                    `${institucion_nombre}.`,
                                                    `${institucion_nombre}.`,
                                                ]}
                                                typeSpeed={80}
                                                backSpeed={5}
                                                backDelay={1000}
                                                loop
                                            />
                                        </h1>
                                        <p
                                            className="description"
                                            style={{
                                                background:
                                                    "linear-gradient(to right ,transparent, rgba(0,0,0,.3),rgba(0,0,0,.7),rgba(0,0,0,.3),transparent)",
                                                textShadow:
                                                    "0px 0px 10px rgba(0,0,0,.7)",
                                                color: "#fff",
                                            }}
                                        >
                                            {txt_content_banner_three}
                                        </p>
                                        <div className="button-group">
                                            <a
                                                className="btn-default btn-medium round btn-icon"
                                                target="_blank"
                                                href="/#"
                                            >
                                                Categorias{" "}
                                                <i className="icon">
                                                    <FiArrowRight />
                                                </i>
                                            </a>
                                            <Link
                                                className="btn-default btn-medium btn-border round btn-icon"
                                                to="/contacto"
                                            >
                                                Contacto{" "}
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
                    <div className="rwt-team-area rn-section-gap">
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
                            <TeamFour
                                column="col-lg-4 col-xl-4 col-md-6 col-12 mt--30"
                                teamStyle="team-style-three"
                            />
                        </div>
                    </div>
                    {/* final de autoridades */}

                    {/* inicio de video */}
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
                    {/* fin de video */}

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

                    <div
                        alt="intermedio"
                        style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                            backgroundImage: `url(${img2 ?? images.BgTwo})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "noRepeat",
                            backgroundAttachment: "fixed",
                        }}
                    ></div>

                    <FooterTwo />
                    <Copyright />
                </main>
            </>
        );
    }
    return null;
};
export default Index5;
