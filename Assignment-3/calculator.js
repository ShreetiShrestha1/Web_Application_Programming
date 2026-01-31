export let add= (x,y) => x+y;
export let sub= (x,y) => x-y;   
export let mul= (x,y) => x*y;

export let div= (x,y) => {
    if(y===0){
        return "Error: Division by zero";
    }
    return x/y;
}