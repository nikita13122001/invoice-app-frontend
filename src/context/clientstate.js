import react from "react";
import {clientcontext} from "./clientcontext";
import { Clientdetail } from "../component/clientdetail";

const clientstate = (props)=>{
   const state= {Clientdetail}

     return(
        <clientcontext.Provider value={state} >
            props.children
        </clientcontext.Provider> 
     )
}
export default clientstate;