import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import { getInstitucion, getStaticData } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";


const HeaderOne = ({btnStyle, HeaderSTyle}) => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });    

    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };
    
    if(!loading_institucion){

        /* DATOS DE LA INSTITUCION */
        const {
            institucion_logo,            
        } = institucion;

        return (
            <>
                <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
                    <div className="container position-relative">
                        <div className="row align-items-center row--0">
                            <div className="col-lg-2 col-md-6 col-4">
                                <Logo 
                                    image={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`}
                                    image2={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`}
                                />
                            </div>
                            <div className="col-lg-10 col-md-6 col-8 position-static">
                                <div className="header-right">
                                    <nav className="mainmenu-nav d-none d-lg-block">
                                        <Nav />
                                    </nav>
                                    <div className="header-btn">
                                    <a className={`btn-default ${btnStyle}`} target="_blank" rel="noopener noreferrer" href={process.env.REACT_APP_ADMIN_API}>Ingresar</a>
                                    </div>
                                    <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                        <div className="hamberger">
                                            <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                        </div>
                                    </div>
                                    <Darkmode />
                                </div>  
                            </div>
                        </div>
                    </div>
                </header>
                <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
            </>
        )
    }
    return null
}
export default HeaderOne;