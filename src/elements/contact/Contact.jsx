import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import { getInstitucion, getStaticDataContact } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Contact = () => {    

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataContact"],
        queryFn: getStaticDataContact,
    });

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    if(!loading_static_data && !loading_institucion){        
      
        const { txt_content_contact, txt_content_banner_contact } = staticData;
        const { institucion_nombre } = institucion

        return (
            <>
                {/* <SEO title="Contact || Doob - React Business  Template" /> */}
                <Layout>
                    <BreadcrumbOne 
                        title={txt_content_contact}
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl={txt_content_contact}
                    />
                    <div className="main-content">
                        {/* Start Contact Area  */}
                        <div className="rwt-contact-area rn-section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 mb--40">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = {institucion_nombre}
                                            title = "Información de la Institución."
                                            description = ""
                                        />
                                    </div>
                                </div>
                                <ContactOne />
                            </div>
                        </div>
                        {/* End Contact Area  */}
                    </div>
                </Layout>
            </>
        )
    }
    return null
}
export default Contact;