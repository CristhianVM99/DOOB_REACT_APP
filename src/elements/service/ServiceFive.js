import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { AES } from "crypto-js";
import {
    getConvocatorias,
    getCursos,
    getEventos,
    getGacetas,
    getOfertasAcademicas,
    getPublicaciones,
    getServicios,
    getStaticDataIndex,
    getVideos,
} from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../../types/types";

const ServiceFive = ({ textAlign, serviceStyle, tipo }) => {
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

    /* OBTENCION DE INFORMACION DEL STORE API SERVICIOS*/
    const { isLoading: loading_servicios, data: servicios } = useQuery({
        queryKey: ["servicios"],
        queryFn: getServicios,
    });

    /* OBTENCION DE INFORMACION DEL STORE API OFERTAS ACADEMICAS*/
    const { isLoading: loading_ofertas, data: ofertas } = useQuery({
        queryKey: ["ofertas"],
        queryFn: getOfertasAcademicas,
    });

    /* OBTENCION DE INFORMACION DEL STORE API PUBLICACIONES*/
    const { isLoading: loading_publicaciones, data: publicaciones } = useQuery({
        queryKey: ["publicaciones"],
        queryFn: getPublicaciones,
    });

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ["gacetas"],
        queryFn: getGacetas,
    });

    /* OBTENCION DE INFORMACION DEL STORE API EVENTOS*/
    const { isLoading: loading_eventos, data: eventos } = useQuery({
        queryKey: ["eventos"],
        queryFn: getEventos,
    });

    /* OBTENCION DE INFORMACION DEL STORE API VIDEOS*/
    const { isLoading: loading_videos, data: videos } = useQuery({
        queryKey: ["videos"],
        queryFn: getVideos,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    const encryptId = (data) => {
        const encryptedData = AES.encrypt(
            JSON.stringify(data),
            process.env.REACT_APP_ENCRYPT
        ).toString();
        return encodeURIComponent(encryptedData); // Codifica el resultado antes de usarlo en una URL
    };

    function formatearFecha(fechaString) {
        const fecha = new Date(fechaString);

        const meses = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
        ];

        const día = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const año = fecha.getFullYear();

        return `${día} de ${mes} de ${año}`;
    }

    if (
        tipo === TIPOS.CONVOCATORIAS + TIPOS.COMUNICADOS + TIPOS.AVISOS &&
        !loading_convocatorias
    ) {
        const filteredDataComunicados = convocatorias.filter(
            (e) =>
                e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS
        );
        const lastComunicado =
            filteredDataComunicados[filteredDataComunicados.length - 1];

        const filteredDataConvocatorias = convocatorias.filter(
            (e) =>
                e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS
        );
        const lastConvocatoria =
            filteredDataConvocatorias[filteredDataConvocatorias.length - 1];

        const filteredDataAvisos = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS
        );
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];

        /* ARRAY CON LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS FILTRADOS */
        const ConvocatoriasAndComunicadosAndAvisos = [
            lastConvocatoria,
            lastComunicado,
            lastAviso,
        ].filter((item) => item !== undefined);

        const links = [TIPOS.CONVOCATORIAS, TIPOS.COMUNICADOS, TIPOS.AVISOS];

        return (
            <div className="row row--15 service-wrapper">
                {ConvocatoriasAndComunicadosAndAvisos.map((item, key) => (
                    <div
                        className="col-lg-4 col-md-6 col-sm-12 col-12"
                        key={key}
                    >
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}
                        >
                            <div
                                className={`service ${serviceStyle} ${textAlign}`}
                            >
                                <div className="inner">
                                    <div className="content">
                                        <h4 className="title">
                                            <Link
                                                to={`/detalle/${
                                                    links[key]
                                                }/${encryptId(
                                                    item.idconvocatorias
                                                )}`}
                                                dangerouslySetInnerHTML={{
                                                    __html: item.con_titulo,
                                                }}
                                            ></Link>
                                        </h4>
                                        <p
                                            className="description"
                                            dangerouslySetInnerHTML={{
                                                __html: formatearFecha(
                                                    item.con_fecha_inicio
                                                ),
                                            }}
                                        ></p>
                                    </div>
                                    <div className="image">
                                        <Link
                                            to={`/detalle/${
                                                links[key]
                                            }/${encryptId(
                                                item.idconvocatorias
                                            )}`}
                                        >
                                            <img
                                                src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`}
                                                alt="convocatorias"
                                                style={{
                                                    height: "500px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
        );
    }

    if (tipo === TIPOS.CURSOS + TIPOS.SEMINARIOS && !loading_cursos) {
        /* FILTRADO DE LOS ULTIMOS CURSOS Y SEMINARIOS. */
        const filteredDataCursos = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS
        );
        const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];

        const filteredDataSeminarios = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS
        );
        const lastSeminario =
            filteredDataSeminarios[filteredDataSeminarios.length - 1];

        /* ARRAY CON LOS ULTIMOS CURSOS Y SEMINARIOS FILTRADOS */
        const CursosAndSeminarios = [lastCurso, lastSeminario].filter(
            (item) => item !== undefined
        );

        const links = [TIPOS.CURSOS, TIPOS.SEMINARIOS];

        return (
            <div className="row row--15 service-wrapper">
                <div className="col-lg-2"></div>
                {CursosAndSeminarios.map((item, key) => (
                    <div
                        className="col-lg-4 col-md-6 col-sm-12 col-12"
                        key={key}
                    >
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}
                        >
                            <div
                                className={`service ${serviceStyle} ${textAlign}`}
                            >
                                <div className="inner">
                                    <div className="content">
                                        <h4 className="title">
                                            <Link
                                                to={`/detalle/${
                                                    links[key]
                                                }/${encryptId(
                                                    item.iddetalle_cursos_academicos
                                                )}`}
                                                dangerouslySetInnerHTML={{
                                                    __html: item.det_titulo,
                                                }}
                                            ></Link>
                                        </h4>
                                        <p
                                            className="description"
                                            dangerouslySetInnerHTML={{
                                                __html: formatearFecha(
                                                    item.det_fecha_ini
                                                ),
                                            }}
                                        ></p>
                                    </div>
                                    <div className="image">
                                        <Link
                                            to={`/detalle/${
                                                links[key]
                                            }/${encryptId(
                                                item.iddetalle_cursos_academicos
                                            )}`}
                                        >
                                            <img
                                                src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`}
                                                alt="convocatorias"
                                                style={{
                                                    height: "500px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
                <div className="col-lg-2"></div>
            </div>
        );
    }
    return null;
};
export default ServiceFive;
