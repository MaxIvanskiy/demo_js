let contextMinMax = { min : 10, max : 46367 };
let contextLength = { length : 10 };

export const task7 = (context) => {
    if(context == undefined){
        return false;
    }else if(typeof(context) != 'object' || Array.isArray(context)){
        return false;
    }else{
        let result = [];
        if( (context.min && context.max) && context.min > 0 && context.max <= 2000000000 ){
            if(result.length == 0){
                result.push(0, 1);
            }
            let newEl = result[result.length-1] + result[result.length-2];
            while(newEl < context.max){                
                result.push(newEl);
                newEl = result[result.length-1] + result[result.length-2];
            }
            let min = result.findIndex(el => el >= context.min);
            result.splice(0, min);
        }else if(context.length && context.length <= 47 && context.length > 0){        
            while(result.length < context.length){
                if(result.length == 0){
                    result.push(0);
                    result.push(1);
                }else{
                    let lastEl = result.length-1;
                    let lastButOne = result.length-2;
                    let newEl = result[lastEl] + result[lastButOne];
                    result.push(newEl);
                }
            }
        }else{
            result = false;
        }
        return result;
    }
}