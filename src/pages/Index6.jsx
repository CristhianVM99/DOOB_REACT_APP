import React from "react";
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from "../common/header/HeaderTopBar";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Copyright from "../common/footer/Copyright";
import ServiceTwo from "../elements/service/ServiceTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutTwo from "../elements/about/AboutTwo";
import CounterUpTwo from "../elements/counterup/CounterUpTwo";

import Separator from "../elements/separator/Separator";
import TeamFour from "../elements/team/TeamFour";
import PricingTwo from "../elements/pricing/PricingTwo";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
import BlogList from "../components/blog/itemProp/BlogList";
import { TIPOS } from "../types/types";

const Index6 = () => {
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
        const { institucion_nombre, institucion_iniciales, portada } =
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

        return (
            <>
                <SEO title="Corporate" />
                <main className="page-wrapper">
                    <div className="header-transparent-with-topbar">
                        <HeaderTopBar />
                        <HeaderOne
                            btnStyle="btn-small btn-icon"
                            HeaderSTyle="header-not-transparent"
                        />
                    </div>

                    {/* Start Slider area  */}
                    <div
                        className="slider-area slider-style-2 height-950 bg_image"
                        data-black-overlay="2"
                        style={{
                            backgroundImage: `url(${img ?? images.BgOne})`,
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-start">
                                        <h4 className="subtitle">
                                            <span className="theme-gradient">
                                                {institucion_iniciales}
                                            </span>
                                        </h4>
                                        <h1 className="title display-one">
                                            {institucion_nombre}
                                        </h1>
                                        <ul className="list-icon">
                                            <li>
                                                <span className="icon">
                                                    <FiCheck />
                                                </span>{" "}
                                                {txt_content_banner}
                                            </li>
                                            <li>
                                                <span className="icon">
                                                    <FiCheck />
                                                </span>{" "}
                                                {txt_content_banner_two}
                                            </li>
                                            <li>
                                                <span className="icon">
                                                    <FiCheck />
                                                </span>{" "}
                                                {txt_content_banner_three}
                                            </li>
                                        </ul>
                                        <div className="button-group mt--40 mt_sm--20">
                                            <button
                                                className="btn-default btn-icon"
                                                target="_blank"
                                                href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                                            >
                                                {txt_content_btn}{" "}
                                                <i className="icon">
                                                    <FiArrowRight />
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Slider area  */}

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

                    <FooterOne />
                    <Copyright />
                </main>
            </>
        );
    }
    return null;
};

export default Index6;
