export const useViewConverter = (num) => {
  
    if(num >= 1000000){
        num = Math.floor(num/1000000) + 'M views'
        return num
    }
    if(num > 10000){
        num = Math.floor(num/1000) + 'K views'
        return num
    }
    if(num > 100){
        return num + 'views'
    }
   
}