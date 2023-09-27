import React from 'react';
import { FaSistrix } from "react-icons/fa";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogProp from './itemProp/BlogProp';
import SideCategories from './sidebar/SideCategories';
import SidebarPost from './sidebar/SidebarPost';
import SidebarTag from './sidebar/SidebarTag';
import SidebarArchive from './sidebar/SidebarArchive';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetailsContent from './BlogDetailsContent';
import BlogClassicData from '../../data/blog/BlogList.json';
import { getConvocatorias, getCursos, getEventos, getGacetas, getInstitucion, getOfertasAcademicas, getPublicaciones, getServicios, getStaticDataCategoryDetail, getStaticImages, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { AES } from 'crypto-js';
import { enc } from 'crypto-js'; 
import { TIPOS } from '../../types/types';

const Detalle = () => {

    /* OBTENEMOS EL TIPO DE CATEGORIA */      
    const {cat, id} = useParams()

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });        

    /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE CONVOCATORIAS */
    const { isLoading: loading_convocatorias, data: convocatorias } = useQuery({
        queryKey: ['convocatorias'],
        queryFn: getConvocatorias,
    });

    /* OBTENCION DE INFORMACION DEL STORE CURSO */
    const { isLoading: loading_cursos, data: cursos } = useQuery({
        queryKey: ['cursos'],
        queryFn: getCursos,
    });

    /* OBTENCION DE INFORMACION DEL STORE API SERVICIOS*/
    const { isLoading: loading_servicios, data: servicios } = useQuery({
        queryKey: ['servicios'],
        queryFn: getServicios,
    })

    /* OBTENCION DE INFORMACION DEL STORE API OFERTAS ACADEMICAS*/
    const { isLoading: loading_ofertas, data: ofertas } = useQuery({
        queryKey: ['ofertas'],
        queryFn: getOfertasAcademicas,
    })

    /* OBTENCION DE INFORMACION DEL STORE API PUBLICACIONES*/
    const { isLoading: loading_publicaciones, data: publicaciones } = useQuery({
        queryKey: ['publicaciones'],
        queryFn: getPublicaciones,
    })

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ['gacetas'],
        queryFn: getGacetas,
    })

    /* OBTENCION DE INFORMACION DEL STORE API EVENTOS*/
    const { isLoading: loading_eventos, data: eventos } = useQuery({
        queryKey: ['eventos'],
        queryFn: getEventos,
    })

    /* OBTENCION DE INFORMACION DEL STORE API VIDEOS*/
    const { isLoading: loading_videos, data: videos } = useQuery({
        queryKey: ['videos'],
        queryFn: getVideos,
    })

    /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataCategoryDetail'],
        queryFn: getStaticDataCategoryDetail,
    });       

    const decryptId = (encryptedData) => {
        const decodedData = decodeURIComponent(encryptedData); // Decodifica la entrada si es una URL
        const decrypted = AES.decrypt(decodedData, process.env.REACT_APP_ENCRYPT).toString(enc.Utf8);
        return JSON.parse(decrypted); // Parsea la cadena JSON descifrada
    };        

    if(!loading_convocatorias && !loading_cursos && !loading_eventos && !loading_gacetas && !loading_images && !loading_institucion && !loading_ofertas && !loading_publicaciones && !loading_servicios && !loading_static_data && !loading_videos){                

        const convocatorias_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const comunicados_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const avisos_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const cursos_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
        const seminarios_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);

        var item = null
        if(cat === TIPOS.SERVICIOS) item = servicios.find((e) => e.serv_id === parseInt(decryptId(id),10)); 
        if(cat === TIPOS.OFERTAS_ACADEMICAS) item = ofertas.find((e) => e.ofertas_id === parseInt(decryptId(id),10));
        if(cat === TIPOS.PUBLICACIONES) item = publicaciones.find((e) => e.publicaciones_id === parseInt(decryptId(id),10));
        if(cat === TIPOS.GACETAS) item = gacetas.find((e) => e.gaceta_id === parseInt(decryptId(id),10));
        if(cat === TIPOS.EVENTOS) item = eventos.find((e) => e.evento_id === parseInt(decryptId(id),10));
        if(cat === TIPOS.VIDEOS) item = videos.find((e) => e.video_id === parseInt(decryptId(id),10));
        if(cat === TIPOS.CONVOCATORIAS || cat === TIPOS.COMUNICADOS || cat === TIPOS.AVISOS) item = convocatorias.find((e) => e.idconvocatorias === parseInt(decryptId(id),10));
        if(cat === TIPOS.CURSOS || cat === TIPOS.SEMINARIOS) item = cursos.find((e) => e.iddetalle_cursos_academicos === parseInt(decryptId(id),10))

        return (
            <>
                <SEO title="Blog Grid Sidebar || Doob - React Business  Template" />
                
                <Layout>
                    <BreadcrumbOne 
                        title={cat}
                        rootUrl="/"
                        parentUrl="PRINCIPAL"
                        currentUrl={cat}
                    />
                    <div className="main-content">
                        {/* Start Blog Area  */}
                        <div className="rn-blog-area rn-section-gap">
                            <div className="container">
                                <div className="row row--30">
                                    <div className="col-lg-8">
                                        <div className="row mt_dec--30">
                                            <BlogDetailsContent cat={cat} item={item}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 mt_md--40 mt_sm--40">
                                        <aside className="rwt-sidebar">
    
                                            <div className="rbt-single-widget widget_search mt--40">
                                                <div className="inner">
                                                    <form className="blog-search" action="#">
                                                        <input type="text" placeholder="Search ..." />
                                                        <button className="search-button"><FaSistrix /></button>
                                                    </form>
                                                </div>
                                            </div>
    
    
                                            {/* Start Single Widget  */}
                                            <div className="rbt-single-widget widget_categories mt--40">
                                                <h3 className="title">Categories</h3>
                                                <div className="inner">
                                                    <SideCategories 
                                                        servicios={servicios} 
                                                        ofertas={ofertas} 
                                                        publicaciones={publicaciones} 
                                                        gacetas={gacetas} 
                                                        eventos={eventos} 
                                                        videos={videos}
                                                        convocatorias={convocatorias_cat}
                                                        comunicados={comunicados_cat}
                                                        avisos={avisos_cat}
                                                        cursos={cursos_cat}
                                                        seminarios={seminarios_cat}
                                                    />
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}
    
                                            {/* Start Single Widget  */}
                                            <div className="rbt-single-widget widget_recent_entries mt--40">
                                                <h3 className="title">Post</h3>
                                                <div className="inner">
                                                    <SidebarPost cat/>
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}
    
                                           
    
                                            {/* Start Single Widget  */}
                                            <div className="rbt-single-widget widget_archive mt--40">
                                                <h3 className="title">Archives</h3>
                                                <div className="inner">
                                                    <SidebarArchive />
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}
    
    
                                            {/* Start Single Widget  */}
                                            <div className="rbt-single-widget widget_tag_cloud mt--40">
                                                <h3 className="title">Tags</h3>
                                                <div className="inner mt--20">
                                                    <SidebarTag />
                                                </div>
                                            </div>
                                            {/* End Single Widget  */}
    
    
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Blog Area  */}
                    </div>
    
                </Layout>
            </>
        )
    }
    return null
}

export default Detalle;
