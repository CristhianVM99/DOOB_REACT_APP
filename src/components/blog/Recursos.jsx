import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogProp from "./itemProp/BlogProp";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getInstitucion } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import ConfigColorIcon from "../../utils/ConfigColorIcon";
import { TIPOS } from "../../types/types";

const Recursos = () => {
    const { cat } = useParams();

    /* obtención de la información sobre la institución */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    /* configuraciones correspondientes a la pagina */
    useEffect(() => {
        /* configuración del color y icono de la pagina */
        if (!loading_institucion) ConfigColorIcon(institucion);
    });

    if (!loading_institucion) {
        const { institucion_nombre } = institucion;
        return (
            <>
                <SEO
                    title={`${institucion_nombre} | ${
                        cat === TIPOS.OFERTAS_ACADEMICAS
                            ? "OFERTAS ACADÉMICAS"
                            : cat
                    }`}
                />
                <Layout>
                    <BreadcrumbOne
                        title={
                            cat === TIPOS.OFERTAS_ACADEMICAS
                                ? "OFERTAS ACADÉMICAS"
                                : cat
                        }
                        rootUrl="/"
                        parentUrl="INICIO"
                        currentUrl={
                            cat === "OFERTAS_ACADEMICAS"
                                ? "OFERTAS ACADÉMICAS"
                                : cat
                        }
                    />
                    <div className="main-content">
                        {/* Start Blog Area  */}
                        <div className="rn-blog-area rn-section-gap">
                            <div className="container">
                                <div className="row mt_dec--30">
                                    <BlogProp
                                        column="col-lg-4 col-md-6 col-12 mt--30"
                                        StyleVarProp="box-card-style-default"
                                        cat={cat}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* End Blog Area  */}
                    </div>
                </Layout>
            </>
        );
    }
    return null;
};
export default Recursos;
