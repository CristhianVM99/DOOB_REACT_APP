import React from 'react'
import { getInstitucion } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Copyright = () => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    if(!loading_institucion){

        /* DATOS DE LA INSTITUCION */
        const {        
            institucion_nombre,            
        } = institucion

        return (
            <div className="copyright-area copyright-style-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="copyright-left">
                                <ul className="ft-menu link-hover">
                                    <li><span>Universidad Pública de El Alto</span></li>
                                    <li><span>{institucion_nombre}</span></li>
                                    <li><a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/'>Web Developer <span>CristhianVM</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text"><a target='_blank' rel="noopener noreferrer" href='https://sie.upea.bo/l'>© SIE {new Date().getFullYear()}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null 
}
export default Copyright;