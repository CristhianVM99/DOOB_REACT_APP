import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogProp from './itemProp/BlogProp';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const Recursos = () => {

    const { cat } = useParams();

    return (
        <>
            <SEO title="Blog List || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title={cat=== "OFERTAS_ACADEMICAS" ? "OFERTAS ACADÉMICAS" : cat}
                    rootUrl="/"
                    parentUrl="INICIO"
                    currentUrl={cat=== "OFERTAS_ACADEMICAS" ? "OFERTAS ACADÉMICAS" : cat}
                />
                <div className="main-content">
                    {/* Start Blog Area  */}
                    <div className="rn-blog-area rn-section-gap">
                        <div className="container">
                            <div className="row mt_dec--30">
                                <BlogProp column="col-lg-4 col-md-6 col-12 mt--30" StyleVarProp="box-card-style-default" cat={cat} />
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Recursos;