import React from 'react'
import SEO from "../common/SEO";
//import {Link} from "react-router-dom";
import HeaderTwo from '../common/header/HeaderTwo';
import FooterFour from '../common/footer/FooterFour';

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import ServiceFive from '../elements/service/ServiceFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import CircleProgress from "../elements/progressbar/CircleProgress";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import { getConvocatorias, getCursos, getInstitucion, getStaticDataIndex } from '../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../types/types';
var BlogListData = BlogClassicData.slice(0, 3);

const Principal = () => {

     /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
      queryKey: ["institucion"],
      queryFn: getInstitucion,
    });
     /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
      queryKey: ["staticDataIndex"],
      queryFn: getStaticDataIndex,
    });     

    /* OBTENCION DE INFORMACION DEL STORE CONVOCATORIAS */
    const { isLoading: loading_convocatorias, data: convocatorias } = useQuery({
      queryKey: ["convocatorias"],
      queryFn: getConvocatorias,
    });

    /* OBTENCION DE INFORMACION DEL STORE CURSO */
    const { isLoading: loading_cursos, data: cursos } = useQuery({
      queryKey: ["cursos"],
      queryFn: getCursos,
    });  

    if(!loading_institucion && !loading_static_data && !loading_convocatorias && !loading_cursos){
        
        /* DATOS DE LA INSTITUCION */
        const {
            institucion_nombre,            
            portada,
          } = institucion;
      
          /* DATOS STATICOS  */
          const {
            txt_content_banner_two,
            txt_content_banner,
            txt_content_btn,
            txt_content_banner_three,
          } = staticData;
      
        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${
          process.env.REACT_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada}`;
    
        const indiceAleatorio2 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada2 = portada[indiceAleatorio2].portada_imagen;
        const img2 = `${
          process.env.REACT_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada2}`;
    
        const indiceAleatorio3 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada3 = portada[indiceAleatorio3].portada_imagen;
        const img3 = `${
          process.env.REACT_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada3}`;

        /* ULTIMAS CONVOCATORIAS - COMUNICADOS - AVISOS - CURSOS - SEMINARIOS */

        const filteredDataComunicados = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS
        );
        const lastComunicado =
            filteredDataComunicados[filteredDataComunicados.length - 1];
      
        const filteredDataConvocatorias = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS
        );
        const lastConvocatoria =
            filteredDataConvocatorias[filteredDataConvocatorias.length - 1];
      
        const filteredDataAvisos = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS
        );
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];

        const filteredDataCursos = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS
        );
        const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];
        
        const filteredDataSeminarios = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS
        );
        const lastSeminario =
            filteredDataSeminarios[filteredDataSeminarios.length - 1];

        const BannerData = [
            {
                image: img,
                title: institucion_nombre,
                description: txt_content_banner
            },
            {
                image: img2,
                title: institucion_nombre,
                description: txt_content_banner_two
            },
            {
                image: img3,
                title: institucion_nombre,
                description: txt_content_banner_three
            },
        ]
        

        return (
        
            <>
                <SEO title="Digital Agency" />
                <main className="page-wrapper">
                    
                    <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-transparent" />
    
                    {/* Start Slider Area  */}
                    <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                        {BannerData.map((data, index) => (
                            <div key={index} className="single-slide">
                                <div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url(${data.image})`}}>
                                    <div className="container">
                                        <div className="row row--30 align-items-center">
                                            <div className="order-2 order-lg-1 col-lg-7">
                                                <div className="inner text-start">
                                                    <h1 className="title">{data.title}</h1>
                                                    <p className="description">{data.description}</p>
                                                    <div className="button-group mt--30">
                                                        <a className="btn-default" target="_blank" rel="noopener noreferrer"  href="/">{txt_content_btn}</a>
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
    
                    <Separator />          
                    <div className="blog-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        title = "Convocatorias, Comunicados y Avisos."
                                        subtitle = "Lo Ultimos de ..."
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                                </div>
                            </div>
                            <div className="row row--15">
                                {BlogListData.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                        <BlogList StyleVar="box-card-style-default" data={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Separator />          
                    <div className="blog-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        title = "Cursos y Seminarios."
                                        subtitle = "Lo Ultimo de ..."
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                                </div>
                            </div>
                            <div className="row row--15">
                                {BlogListData.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                        <BlogList StyleVar="box-card-style-default" data={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
    
                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "About Our Company."
                                        title = "Services provide for you."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                        />
                                </div>
                            </div>
                            <ServiceFive 
                                serviceStyle = "gallery-style"
                                textAlign = "text-start"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}
    
                    <Separator />
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Why Choose Us"
                                            title = "Companies Choose us!"
                                            description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                        />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-6 col-md-6 col-sm-6 col-12 mt--30 portfolio no-overlay"  />
                        </div>
                    </div>
    
                    <Separator />            
                    <div className="rwt-progressbar-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--25">
                                <div className="col-lg-10 offset-lg-1">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Expertise."
                                        title = "Compnanies Expertise."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                                </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1">
                                <CircleProgress />
                            </div>
                        </div>
                    </div>
    
    
                    <Separator />            
                    {/* Start Testimonial Area  */}
                    <div className="rwt-testimonial-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Client Feedback"
                                            title = "What People Are Saying."
                                            description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                        />
                                </div>
                            </div>
                            <TestimonialOne column="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one style-two" />
                        </div>
                    </div>
                    {/* End Testimonial Area  */}

                    <FooterFour />
                </main>
            </>
        )
    }
    return null
}
export default Principal;