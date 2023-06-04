export const Cdate=()=>
{
    //const date = "30/10/2022"; 
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
return date;
}