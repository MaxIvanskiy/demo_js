const firstEnv = { a : 16, b : 25};
const secondEnv = { c : 20, d : 15};

const rotateEnv = (env) => {
    let values = Object.values(env);
    let rotatedEnv = {};

    rotatedEnv.max = values[0] > values[1] ? values[0] : values[1];
    rotatedEnv.min = values[0] > values[1] ? values[1] : values[0];

    return rotatedEnv;
}

export const checkEnv = (envFirst, envSecond) => {
    let result = 0;

    if(envFirst == undefined || envSecond == undefined){
        result = {
            status : 'failed',
            reason : 'function need 2 arguments'
        };
    }else if(typeof(envFirst) != 'object' || typeof(envSecond) != 'object'){
        result = {
            status : 'failed',
            reason : 'arguments must be an objects'
        };
    }else{
        const firstRotated = rotateEnv(envFirst);
        const secondRotated = rotateEnv(envSecond);

        if(firstRotated.max > 1000 || secondRotated.max > 1000 || firstRotated.min <= 0 || secondRotated.min <= 0){
            const invalidData = {
                status : 'failed',
                reason : 'side length min 0 - max 1000'
            };
            return invalidData;
        }

        if(firstRotated.max < secondRotated.max && firstRotated.min < secondRotated.min){
            result = 2;
        }else if(firstRotated.max > secondRotated.max && firstRotated.min > secondRotated.min){
            result = 1;
        }else{
            result = 0;
        }
    }
    return result;
}

