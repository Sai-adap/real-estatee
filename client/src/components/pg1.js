import React from "react";
import Aside from "./Leftsidebar";
import Header from "./Header";
import Page1 from "./Basicinfo";
import "./page1.css"
const Pg1=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Aside/></div>
        <div className="ac">
        <Header/>
        <Page1/>
        </div>
        </div>
        </>
    )
}
export default Pg1;