const firstEnvelope = {
    a : 2,
    b : 4
};
const secondEnvelope = {
    a : 6, 
    b : 8
};

export const envelopes = (firstEnvelope, secondEnvelope) => {
    let result = 0;

    if(firstEnvelope == undefined || secondEnvelope == undefined){
        result = {
            status : 'failed',
            reason : 'function need 2 arguments'
        };
    }else if(typeof(firstEnvelope) != 'object' || typeof(secondEnvelope) != 'object'){
        result = {
            status : 'failed',
            reason : 'arguments must be an objects'
        };
    }
    
    return result;
}
