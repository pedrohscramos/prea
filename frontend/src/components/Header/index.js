import React from "react";
import {Logo, HeaderContainer} from './styles'; 

import Icone from '../../assets/web_server.png';

function Header(props){
    return(
        <>
         <HeaderContainer>
            <Logo src={Icone} alt='Preá - Encurtador de URL' />
            <h1>Preá</h1>
            <p>{props.children}</p>
         </HeaderContainer>
        </>
    )
}

export default Header;