import React from 'react'
import SEO from "../common/SEO";
//import {Link} from "react-router-dom";
import HeaderTwo from '../common/header/HeaderTwo';
import FooterFour from '../common/footer/FooterFour';
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import BlogList from "../components/blog/itemProp/BlogList";
import { getInstitucion, getStaticDataIndex } from '../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../types/types';
import TeamFour from '../elements/team/TeamFour';

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
    
    if(!loading_institucion && !loading_static_data ){
        
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
            txt_content_convocatorias,
            txt_content_cursos,
            txt_content_autoridades,
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
                                                    <h1 className="title" style={{fontSize: '5em'}}>{data.title}</h1>
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
    
                    {/* Start Autoridades */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Nuestras..."
                                        title = {txt_content_autoridades}
                                        description = {txt_content_banner_two}
                                    />
                                </div>
                            </div>
                            <TeamFour column="col-lg-4 col-xl-4 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                        </div>
                    </div>
                    {/* End Autoridades */}

                    {/* Start Convocatorias */}
                    <Separator />          
                    <div className="blog-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        title = {txt_content_convocatorias}
                                        subtitle = {institucion_nombre}
                                        description = {txt_content_banner_three}
                                    />
                                </div>
                            </div>
                            <div className="row row--15">                                                                    
                                <BlogList StyleVar="box-card-style-default" tipo={TIPOS.CONVOCATORIAS+TIPOS.COMUNICADOS+TIPOS.AVISOS}/>                                
                            </div>
                        </div>
                    </div>
                    {/* End Convocatorias */}                

                    {/* Start Cursos */}
                    <Separator />          
                    <div className="blog-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        title = {txt_content_cursos}
                                        subtitle = {institucion_nombre}
                                        description = {txt_content_banner}
                                    />
                                </div>
                            </div>
                            <div className="row row--15">
                                <div className='col-lg-2 col-md-6 col-12 mt--30'></div>
                                <BlogList StyleVar="box-card-style-default" tipo={TIPOS.CURSOS+TIPOS.SEMINARIOS} />                                
                                <div className='col-lg-2 col-md-6 col-12 mt--30'></div>
                            </div>
                        </div>
                    </div>
                    {/* End Cursos */}                                                         

                    <FooterFour />
                </main>
            </>
        )
    }
    return null
}
export default Principal;