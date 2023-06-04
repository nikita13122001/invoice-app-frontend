export const Ddate=()=>
{
    //const ddate = "7/11/2022";
    const current = new Date();
    const ddate = `${current.getDate()+7}/${current.getMonth()+1}/${current.getFullYear()}`;
return ddate;
}