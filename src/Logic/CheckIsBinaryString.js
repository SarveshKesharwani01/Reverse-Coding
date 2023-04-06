export const CheckIsBinaryString = (val) => {
    val = val.trim(); 
    let s = "";
    let ok = 1; 
    for(let i=0;i<val.length;i++){
       if(!(val[i]>='0' && val[i]<='1')){
        ok = 0;
        break;
       }else{
        s = s+val[i]; 
       }
    }
    if(ok === 1)return s; 
    else return null; 
}