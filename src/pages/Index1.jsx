import SEO from "../common/SEO";
import HeaderTwo from "../common/header/HeaderTwo";
import FooterFour from "../common/footer/FooterFour";
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import {
    getInstitucion,
    getStaticDataIndex,
    getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../types/types";
import TeamFour from "../elements/team/TeamFour";
import RandomImage from "../utils/RandomImage";
import VideoItem from "../elements/video/VideoItem";
import ServiceTwo from "../elements/service/ServiceTwo";
import BrandTwo from "../elements/brand/BrandTwo";

const Index1 = () => {
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

    if (!loading_institucion && !loading_static_data && !loading_images) {
        /* datos de la institución */
        const { institucion_nombre, institucion_link_video_vision, portada } =
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

        const Video = [
            {
                id: "01",
                image: img3 ?? images.BgConvocatorias,
                popupLink: [institucion_link_video_vision],
            },
        ];

        return (
            <>
                {/* title de la pagina principal */}
                <SEO title={`${institucion_nombre} | PRINCIPAL`} />
                <main className="page-wrapper">
                    {/* header de la pagina principal */}
                    <HeaderTwo
                        btnStyle="btn-small"
                        HeaderSTyle="header-transparent"
                    />

                    {/* inicio banner principal  */}
                    <Slider
                        className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
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
                                            <div className="order-2 order-lg-1 col-lg-7">
                                                <div className="inner text-start">
                                                    <h1
                                                        className="title"
                                                        style={{
                                                            textShadow:
                                                                "0px 7px 15px rgba(0,0,0,.5)",
                                                        }}
                                                    >
                                                        {data.title}
                                                    </h1>
                                                    <p
                                                        className="description"
                                                        style={{
                                                            background:
                                                                "linear-gradient(to left,transparent,rgba(0,0,0,.4),rgba(0,0,0,.7),transparent)",
                                                            padding: "0.5em",
                                                            paddingRight: "2em",
                                                            paddingLeft:
                                                                "1.5em",
                                                            textShadow:
                                                                "0px 0px 20px rgba(0,0,0,.5)",
                                                        }}
                                                    >
                                                        {data.description}
                                                    </p>
                                                    <div className="button-group mt--30">
                                                        <a
                                                            className="btn-default"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="/#"
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
                    {/* final banner principal  */}

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
                            <ServiceTwo
                                cardStyle="card-style-1"
                                textAlign="text-start"
                                tipo={TIPOS.CURSOS + TIPOS.SEMINARIOS}
                            />
                        </div>
                    </div>
                    {/* fin de cursos - seminarios  */}

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
                            backgroundImage: `url(${img3 ?? images.BgThree})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "noRepeat",
                            backgroundAttachment: "fixed",
                        }}
                    ></div>

                    {/* footer de la pagina principal */}
                    <FooterFour />
                </main>
            </>
        );
    }
    return null;
};
export default Index1;
