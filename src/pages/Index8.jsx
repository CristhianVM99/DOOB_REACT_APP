import React from "react";
import SEO from "../common/SEO";
import { Link } from "react-router-dom";

import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ServiceOne from "../elements/service/ServiceOne";
import AboutFour from "../elements/about/AboutFour";
import GalleryOne from "../elements/gallery/GalleryOne";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
var BlogListData = BlogClassicData.slice(0, 3);

const Index8 = () => {
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
        const { institucion_nombre, portada } = institucion;

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

        /* configuraciones para el banner principal */
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

        return (
            <>
                <SEO title="Travel Agency" />
                <main className="page-wrapper">
                    <HeaderOne
                        btnStyle="btn-small"
                        HeaderSTyle="header-transparent"
                    />

                    {/* Start Slider Area  */}
                    <Slider
                        className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
                        {...BannerActivation}
                    >
                        {BannerData.map((data, index) => (
                            <div key={index} className="single-slide">
                                <div
                                    className="height-950 bg_image"
                                    data-black-overlay="5"
                                    style={{
                                        backgroundImage: `url(${data.image})`,
                                    }}
                                >
                                    <div className="container">
                                        <div className="row row--30 align-items-center">
                                            <div className="col-12">
                                                <div className="inner text-center">
                                                    <h1
                                                        className="title"
                                                        dangerouslySetInnerHTML={{
                                                            __html: data.title,
                                                        }}
                                                    ></h1>
                                                    <p
                                                        className="description"
                                                        dangerouslySetInnerHTML={{
                                                            __html: data.description,
                                                        }}
                                                    ></p>
                                                    <div className="button-group mt--30">
                                                        <Link
                                                            className="btn-default"
                                                            to="#"
                                                        >
                                                            Categorias
                                                        </Link>
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

                    <FooterTwo />
                </main>
            </>
        );
    }
    return null;
};

export default Index8;
