import React from "react";
import Slider from "react-slick";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterTwo from "../common/footer/FooterTwo";
import BlogList from "../components/blog/itemProp/BlogList";
import RandomImage from "../utils/RandomImage";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../types/types";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import VideoItem from "../elements/video/VideoItem";
import BrandTwo from "../elements/brand/BrandTwo";
import FooterFour from "../common/footer/FooterFour";

const Index4 = () => {
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
        const { institucion_nombre, portada, institucion_link_video_vision } =
            institucion;

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

        const BannerData = [
            {
                image: img ?? images.BgOne,
                title: institucion_nombre,
                description: txt_content_banner,
            },
            {
                image: img2 ?? images.BgTwo,
                title: institucion_nombre,
                description: txt_content_banner_two,
            },
            {
                image: img3 ?? images.BgThree,
                title: institucion_nombre,
                description: txt_content_banner_three,
            },
        ];

        const Video = [
            {
                id: "01",
                image: img3 ?? images.BgConvocatorias,
                popupLink: [institucion_link_video_vision],
            },
        ];

        return (
            <>
                <SEO title="Startup Agency" />
                <main className="page-wrapper">
                    <HeaderOne
                        btnStyle="btn-small btn-icon round"
                        HeaderSTyle="header-transparent"
                    />

                    {/* Start Slider Area  */}
                    <Slider
                        className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow"
                        {...BannerActivation}
                    >
                        {BannerData.map((data, index) => (
                            <div key={index} className="single-slide">
                                <div
                                    className="height-950 bg-overlay bg_image"
                                    style={{
                                        backgroundImage: `url(${data.image})`,
                                    }}
                                >
                                    <div className="container">
                                        <div className="row row--30 align-items-center">
                                            <div className="col-lg-12">
                                                <div className="inner text-center">
                                                    <h1
                                                        className="title"
                                                        style={{
                                                            textShadow:
                                                                "0px 5px 10px rgba(0,0,0,.5)",
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: data.title,
                                                        }}
                                                    ></h1>
                                                    <p
                                                        className="description"
                                                        style={{
                                                            background:
                                                                "linear-gradient(to left,transparent,rgba(0,0,0,.4),rgba(0,0,0,.9),transparent)",
                                                            borderRadius: "1em",
                                                            textShadow:
                                                                "0px 0px 10px rgba(0,0,0,.5)",
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: data.description,
                                                        }}
                                                    ></p>
                                                    <div className="button-group mt--30">
                                                        <a
                                                            className="btn-default btn-large round"
                                                            href="/#"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Categorias
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* End Slider Area  */}

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

                    {/* inicio de convocatorias - comunicados - avisos */}
                    <Separator />
                    <div className="blog-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        title={txt_content_convocatorias}
                                        subtitle={institucion_nombre}
                                        description={txt_content_banner_three}
                                    />
                                </div>
                            </div>
                            <div className="row row--15">
                                <BlogList
                                    StyleVar="box-card-style-default"
                                    tipo={
                                        TIPOS.CONVOCATORIAS +
                                        TIPOS.COMUNICADOS +
                                        TIPOS.AVISOS
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    {/* final de convocatorias - comunicados - avisos */}

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

                    {/* inicio de cursos - seminarios */}
                    <Separator />
                    <div className="blog-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        title={txt_content_cursos}
                                        subtitle={institucion_nombre}
                                        description={txt_content_banner}
                                    />
                                </div>
                            </div>
                            <div className="row row--15">
                                <div className="col-lg-2 col-md-6 col-12 mt--30"></div>
                                <BlogList
                                    StyleVar="box-card-style-default"
                                    tipo={TIPOS.CURSOS + TIPOS.SEMINARIOS}
                                />
                                <div className="col-lg-2 col-md-6 col-12 mt--30"></div>
                            </div>
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

                    <FooterFour />
                </main>
            </>
        );
    }
    return null;
};

export default Index4;
