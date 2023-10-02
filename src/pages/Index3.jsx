import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import HeaderTopBar from "../common/header/HeaderTopBar";
import AboutFour from "../elements/about/AboutFour";
import AdvanceTabTwo from "../elements/advancetab/AdvanceTabTwo";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import TeamFour from "../elements/team/TeamFour";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import FooterOne from "../common/footer/FooterOne";
import Copyright from "../common/footer/Copyright";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
import { TIPOS } from "../types/types";
import BlogList from "../components/blog/itemProp/BlogList";

const Index3 = () => {
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

    if (!loading_images && !loading_institucion && !loading_static_data) {
        const { institucion_nombre, portada, institucion_iniciales } =
            institucion;

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

        return (
            <>
                <SEO title="Consulting" />
                <main className="page-wrapper">
                    <HeaderTopBar />
                    <HeaderOne
                        btnStyle="btn-small"
                        HeaderSTyle="header-transparent"
                    />

                    {/* Start Slider area  */}
                    <div
                        className="slider-area slider-style-2 variation-2  height-850 bg_image"
                        style={{
                            backgroundImage: `url(${img ?? images.BgOne})`,
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-xl-6">
                                    <div className="inner text-start">
                                        <h1 className="title display-one">
                                            {institucion_nombre}
                                        </h1>
                                        <h6 className="tag-title">
                                            {txt_content_banner_two}
                                        </h6>
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
                                        subtitle="Lo Último de..."
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
                                        subtitle="Lo Último de..."
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

export default Index3;
