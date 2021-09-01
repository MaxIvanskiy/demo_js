export const chess = (width, height, symbol) => {
    let result = '';
    if(width <= 0 || height <= 0){
        let invalidData = {
            status : 'failed',
            reason : 'width and height must be bigger than 0'
        };
        return invalidData;
    }else if(width == undefined || height == undefined || symbol == undefined){
        let invalidData = {
            status : 'failed',
            reason : 'please, put width, length and symbol to the function call'
        };
        return invalidData;
    }else if(typeof(symbol) != 'string'){
        let invalidData = {
            status : 'failed',
            reason : 'symbol must be a string'
        }
        return invalidData;
    }else{ 
        for (let i = 0; i < height; i += 1) {
            for (let j = 0; j < width / 2; j += 1) {
                result = `${result}${symbol} `;
            }
            result = i % 2 ? `${result}\n` : `${result}\n `
         }
        return result;
    }
} 
