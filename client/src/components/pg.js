import React from "react";
import Aside from "./Leftsidebar";
import Header from "./Header";
import Table from "./Table";
import "./page1.css"
const Pg0=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Aside/></div>
        <div className="ac">
        <Header/>
        <Table/>
        </div>
        </div>
        </>
    )
}
export default Pg0;