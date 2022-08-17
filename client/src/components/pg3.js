import React from "react";
import Aside from "./Leftsidebar";
import Header from "./Header";
import Page3 from "./page3";
import "./page1.css"
const Pg3=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Aside/></div>
        <div className="ac">
        <Header/>
        <Page3/>
        </div>
        </div>
        </>
    )
}
export default Pg3;