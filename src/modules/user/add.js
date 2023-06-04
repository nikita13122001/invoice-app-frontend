import { useContext, useState } from 'react';
import { API_CLIENT } from '../../shared/api_clients';
//import React, {usecontext} from 'react';
//import {clientcontext} from '../../context/clientcontext';

export const Add = (props)=>{

    
    var tabled=[];
    var totalprice=props.totalprice
    var sgst=props.sgst
    var cgst=props.cgst
    var nettotal=props.nettotal
  //  var a= useContext(clientcontext)
    
 
 
 tabled=props.tabledata
  const [message , setMessage] = useState('');
  
                
                const doAdd = async ()=>{
                   
                    const result =await API_CLIENT.post(process.env.REACT_APP_ADD,{
                       'Data-':tabled,
                        
                        'Totalprice':totalprice,
                        'CGST':cgst,
                        'SGST':sgst,
                        'Nettotal':nettotal,
                       // 'a':a.clientcontext
                    });
                    setMessage(result.data.message);
                    console.log(message);
                    

                }
                
                //<h2>message</h2>
                return(<>
                  <h2> {message}</h2>
                <button button type="button" class="btn btn-success" onClick={doAdd} variant="contained">Save Data</button>
                </>)
                }