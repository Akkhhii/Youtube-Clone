export const useCommentsConverter = (num) => {

    if(num >= 1000000){
        num = Math.floor(num/1000000) + 'M'
        return num
    }
    if(num > 10000){
        num = Math.floor(num/1000) + 'K'
        return num
    }
    if(num < 10000){
        num = Math.floor(num/1000) + 'K'
        return num
    }
    if(num > 100){
        return num + ''
    }
   
}