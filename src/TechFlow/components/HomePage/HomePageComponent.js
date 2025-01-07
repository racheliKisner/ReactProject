import Footer from "../Footer/FooterCopmponent";
import React from 'react';
import ContainerHome from "./ContainerHome";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is import
function HomePage()
{
    return(
        <>
          <ContainerHome></ContainerHome>
           <Footer></Footer>
        
        </>
    );
}
export default HomePage;