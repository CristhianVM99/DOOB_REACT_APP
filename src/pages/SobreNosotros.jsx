import React, { useEffect } from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterFour from "../common/footer/FooterFour";
import BrandThree from "../elements/brand/BrandThree";
import AboutFour from "../elements/about/AboutFour";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import { getInstitucion, getStaticImages } from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../utils/RandomImage";
import ConfigColorIcon from "../utils/ConfigColorIcon";

const SobreNosotros = () => {
    /* obtención de la imágenes estáticas */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    /* obtención de los datos de la institución */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    /* configuraciones correspondientes a la pagina */
    useEffect(() => {
        /* configuración del color y icono de la pagina */
        if (!loading_institucion) ConfigColorIcon(institucion);
    });

    if (!loading_images && !loading_institucion) {
        const {
            institucion_nombre,
            institucion_iniciales,
            institucion_historia,
            portada,
        } = institucion;

        const img = RandomImage(portada);
        const img2 = RandomImage(portada);

        return (
            <>
                <SEO title={`${institucion_nombre} | SOBRE NOSOTROS`} />
                <main className="page-wrapper">
                    {/* header principal  /> */}
                    <HeaderOne
                        btnStyle="btn-small round btn-icon"
                        HeaderSTyle="header-transparent"
                    />

                    {/* inicio de banner */}
                    <div
                        className="slider-area slider-style-1 height-850 bg_image"
                        data-black-overlay="7"
                        style={{
                            backgroundImage: `url(${img ?? images.BgOne})`,
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner pt--80 text-center">
                                        <div>
                                            <h3 className="rn-sub-badge">
                                                <span className="theme-gradient">
                                                    {institucion_iniciales}
                                                </span>
                                            </h3>
                                        </div>
                                        <h1 className="title display-one">
                                            {institucion_nombre} <br /> Sobre
                                            Nosotros
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* final de banner */}

                    {/* inicio de historia e información sobre la institución */}
                    <div className="service-area rn-section-gapTop">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <h3 className="title">
                                            historia de la carrera de <br />
                                            <strong>
                                                {institucion_nombre}
                                            </strong>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <p
                                        className="mb--10"
                                        dangerouslySetInnerHTML={{
                                            __html: institucion_historia,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin de la historia e información sobre la institución */}

                    <AboutFour image={img2 ?? images.BgTwo} />

                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Nuestras..."
                                        title="Autoridades"
                                        description=""
                                    />
                                </div>
                            </div>
                            <TeamFour
                                column="col-lg-6 col-xl-4 col-md-6 col-12 mt--30"
                                teamStyle="team-style-three"
                            />
                        </div>
                    </div>
                    {/* End Elements Area  */}

                    <FooterFour />
                </main>
            </>
        );
    }
    return null;
};

export default SobreNosotros;
