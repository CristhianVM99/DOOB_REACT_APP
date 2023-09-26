import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";
import { getGacetas, getInstitucion, getPublicaciones, getStaticDataInstitucion } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { TIPOS } from '../../types/types';



const Institucion = () => {

    /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataInstitucion"],
        queryFn: getStaticDataInstitucion,
    });

    /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ["gacetas"],
        queryFn: getGacetas,
    });

    /* OBTENCION DE INFORMACION DEL STORE API PUBLICACIONES*/
    const { isLoading: loading_publicaciones, data: publicaciones } = useQuery({
        queryKey: ["publicaciones"],
        queryFn: getPublicaciones,
    });

    const { cat } = useParams();
    var categoria = cat;

    if(cat === TIPOS.PASANTIAS) categoria = "PASANTÍAS INSTITUCIONALES"
    if(cat === TIPOS.CONVENIOS) categoria = "CONVENIOS DE LA INSTITUCIÓN"
    if(cat === TIPOS.TRABAJOS) categoria = "TRABAJOS DIRIGIDOS"
    if(cat === TIPOS.INSTITUTO_INVESTIGACION) categoria = "INSTITUTO DE INVESTIGACIÓN"

    if(!loading_gacetas && !loading_institucion && !loading_publicaciones && !loading_static_data){

        const { institucion_nombre, institucion_iniciales } = institucion;
        const { txt_content_banner_institucion } = staticData;

        return (
            <>
                <SEO title={`${institucion_nombre} | Institución`} />
                <Layout>
    
                    <BreadcrumbOne 
                        title={categoria}
                        rootUrl="/"
                        parentUrl="PRINCIPAL"
                        currentUrl={categoria}
                    />
                    
                    <div className="main-content">
                        <div className="rwt-portfolio-area rn-section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                            <SectionTitle
                                                textAlign = "text-left"
                                                radiusRounded = ""
                                                subtitle = {institucion_iniciales}
                                                title = {institucion_nombre}
                                                description = {txt_content_banner_institucion}
                                            />
                                    </div>
                                </div>
                                <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio" gacetas={gacetas} publicaciones={publicaciones} institucion={institucion} categoria={cat} />
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
    return null
}
export default Institucion;
