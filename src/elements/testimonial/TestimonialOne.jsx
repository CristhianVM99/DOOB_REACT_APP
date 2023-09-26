import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { getInstitucion } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const testimonialData = [
    {
        image: 'testimonial-01',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'CO Miego, AD, USA', 
        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
       
    },
    {
        image: 'testimonial-02',
        name: 'Afsana Nila',
        designation: 'App Developer',
        location: 'Bangladesh', 
        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
      
    },
    {
        image: 'testimonial-03',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
        location: 'Poland', 
        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
    },
]


const TestimonialOne = ({column , teamStyle}) => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    if(!loading_institucion){
        /* INFORMACION DE LA INSTITUCION */
        const { autoridad, institucion_nombre } = institucion;

        return (
            <div className="row row--15">
                {autoridad.map((item, index) => (
                    <div className={`${column}`} key={index}>
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className={`rn-box-card ${teamStyle}`}>
                                <div className="inner">
                                    <figure className="thumbnail" style={{objectFit:'cover',width:'100%',height:'100%'}}>
                                        <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`} alt="Autoridad Institucion" style={{objectFit:'cover',width:'100%',height:'100%',overflow:'hidden'}}/>
                                    </figure>
                                    <figcaption className="content">
                                        <p className="description">{institucion_nombre}</p>
                                        <h2 className="title">{item.nombre_autoridad}</h2>
                                        <h6 className="subtitle theme-gradient">{item.cargo_autoridad}</h6>
                                    </figcaption>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
        )
    }
}

export default TestimonialOne;
