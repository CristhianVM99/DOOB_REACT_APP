import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import SlpitOne from "./SlpitOne";
import SlipTwo from "./SlipTwo";
import SlipThree from "./SlipThree";
import SlipFour from "./SlipFour";
import Separator from "../separator/Separator";
import { useQuery } from "@tanstack/react-query";
import {
    getGacetas,
    getInstitucion,
    getStaticDataAcademia,
    getStaticImages,
} from "../../api/institucionAPI";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { TIPOS } from "../../types/types";
import sinRegistros from "../../common/SinRegistros";
import ConfigColorIcon from "../../utils/ConfigColorIcon";

const Split = () => {
    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataAcademia"],
        queryFn: getStaticDataAcademia,
    });

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ["gacetas"],
        queryFn: getGacetas,
    });

    /* OBTENEMOS EL TIPO DE CATEGORIA */
    const { cat } = useParams();
    var categoria = null;

    if (cat === "PLANESTUDIO") {
        categoria = "PLAN DE ESTUDIO";
    } else {
        categoria = cat;
    }

    /* configuraciones correspondientes a la pagina */
    useEffect(() => {
        /* configuración del color y icono de la pagina */
        if (!loading_institucion) ConfigColorIcon(institucion);
    });
    if (
        !loading_institucion &&
        !loading_images &&
        !loading_static_data &&
        !loading_gacetas
    ) {
        const { institucion_nombre, institucion_sobre_ins, portada } =
            institucion;

        const {
            txt_content_calendario,
            txt_content_horario,
            txt_content_plan_de_estudio,
            txt_content_reglamento,
        } = staticData;

        var item = null;
        var content = "";

        if (cat === TIPOS.CALENDARIO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) =>
                e.gaceta_titulo.includes(TIPOS.CALENDARIO)
            );
            content = txt_content_calendario;
        }
        if (cat === TIPOS.HORARIO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) => e.gaceta_titulo.includes(TIPOS.HORARIO));
            content = txt_content_horario;
        }
        if (cat === TIPOS.PLANESTUDIO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) => e.gaceta_titulo.includes(TIPOS.PLAN));
            content = txt_content_plan_de_estudio;
        }

        if (cat === TIPOS.REGLAMENTO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) => e.gaceta_titulo.includes(TIPOS.PLAN));
            content = institucion_sobre_ins;
        }

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <SEO title={`${institucion_nombre} | ACADEMIA`} />
                {item && cat !== TIPOS.REGLAMENTO ? (
                    <Layout>
                        <BreadcrumbOne
                            title={categoria}
                            rootUrl="/"
                            parentUrl="PRINCIPAL"
                            currentUrl={categoria}
                        />
                        <div className="main-content">
                            {/* Start Elements Area  */}
                            <div className="rwt-split-area rn-section-gap">
                                <div className="wrapper">
                                    <SlpitOne
                                        title={item.gaceta_titulo}
                                        description={content}
                                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png"
                                        link={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`}
                                    />
                                </div>
                            </div>
                            {/* End Elements Area  */}
                        </div>
                    </Layout>
                ) : null}
                {cat === TIPOS.REGLAMENTO ? (
                    <Layout>
                        <BreadcrumbOne
                            title={categoria}
                            rootUrl="/"
                            parentUrl="PRINCIPAL"
                            currentUrl={categoria}
                        />
                        <div className="main-content">
                            {/* Start Elements Area  */}
                            <div className="rwt-split-area rn-section-gap">
                                <div className="wrapper">
                                    {cat === TIPOS.REGLAMENTO ? (
                                        <SlipFour
                                            title={txt_content_reglamento}
                                            content={institucion_sobre_ins}
                                            img={img ?? images.BgOne}
                                        />
                                    ) : null}
                                </div>
                            </div>
                            {/* End Elements Area  */}
                        </div>
                    </Layout>
                ) : null}
            </>
        );
    }
    return null;
};
export default Split;
