

let convertTime=(Time)=>{
   if(Time===undefined){
      return ("Please provide an input")
   }
   Time=Time.toString()
   if(Time.length<4){
      return ("At least 1000 miliseconds needs to be provided as input")
   }

   if(typeof(Time)!=="number"){
      Time=Number(Time)
   }

   if(Time>=0){
      
     if(Time<60000){
        let seconds=Math.ceil(Time/10000)
        if(seconds===1){
           return (seconds+"second")
        }else{
           return (seconds+"seconds")
        }
        
      }
     else if(Time===60000||Time>60000&&Time<3600000){
        
        let seconds = Math.floor((Time / 1000 ) % 60);
        let minutes=Math.floor((Time/1000)/60)
        if(minutes===1&&seconds===1){
           return (minutes+"minute"+seconds+"second")
        }else if(minutes===1&&seconds>1){
           return (minutes+"minute"+seconds+"seconds")
        }else if(minutes>1&&seconds===1){
           return (minutes+"minutes"+seconds+"second")
        }
        else{
           return (minutes+"minutes"+seconds+"seconds")
        }
        
     }
     else if(Time===3600000 || Time>3600000){
        let minutes = Math.ceil(((Time / 1000)/60)%60)  
        let hours = Math.floor(((Time / 1000)/60)/60)
        if(hours===1&&minutes===1){
           return (hours+"hour"+minutes+"minute")
        }else if(hours===1&&minutes>1){
           return (hours+"hour"+minutes+"minutes")
        }else if(hours>1&&minutes===1){
           return (hours+"hours"+minutes+"minute")
        }
        else{
           return (hours+"minutes"+minutes+"minutes")
        }
       //return (hours+" "+minutes)
    }
   }
    else{
      return("Time can not be negative")
    }
  }
  
  console.log(convertTime(" "))
  
//   export default convertTime
module.exports=convertTime
  
  