import React, { useEffect } from "react";
import { getInstitucion } from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import ConfigColorIcon from "../utils/ConfigColorIcon";
import Index1 from "./Index1";
import Index2 from "./Index2";
import Index3 from "./Index3";
import Index4 from "./Index4";
import Index5 from "./Index5";
import Index6 from "./Index6";
import Index7 from "./Index7";
import Index8 from "./Index8";

const Principal = () => {
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

    const index1 = process.env.REACT_APP_INDEX_1 === "true";
    const index2 = process.env.REACT_APP_INDEX_2 === "true";
    const index3 = process.env.REACT_APP_INDEX_3 === "true";
    const index4 = process.env.REACT_APP_INDEX_4 === "true";
    const index5 = process.env.REACT_APP_INDEX_5 === "true";
    const index6 = process.env.REACT_APP_INDEX_6 === "true";
    const index7 = process.env.REACT_APP_INDEX_7 === "true";
    const index8 = process.env.REACT_APP_INDEX_8 === "true";

    return (
        <>
            {index1 && <Index1 />}
            {index2 && <Index2 />}
            {index3 && <Index3 />}
            {index4 && <Index4 />}
            {index5 && <Index5 />}
            {index6 && <Index6 />}
            {index7 && <Index7 />}
            {index8 && <Index8 />}
        </>
    );
};
export default Principal;
