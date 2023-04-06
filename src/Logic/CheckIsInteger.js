export const CheckIsInteger = (val) => {
    // 354
    val = val.trim(); 
    let ok = 1; 
    let num = 0;
    // 3 
    for(let i=0;i<val.length;i++){
        if(!(val[i]>='0' && val[i]<='9')){
            ok = 0;
            break;
        }else{
            num = 10*num + (val[i]-'0'); 
        }
    }
    if(ok === 1){
        return num;
    }else{
        return null;
    }
}