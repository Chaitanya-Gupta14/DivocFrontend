import React from "react";
import Home from "../Home";
import { CardData } from "./CardData";

const Main = () => {
    return(
        <>
            <div>
                <Home details = {CardData} />
            </div>
        </>
    )
}

export default Main;