
export const Api= async (url:string, method:string, data: any)=> {
  const headers = {
    Accept: 'application/json',
    "Content-Type": 'application/json'
  }  
  const obj:any = {
   method,
   headers
  }
  
  if(data){
    obj['body'] = JSON.stringify(data)
  }
  console.log('requestParams',url,obj)
  return new Promise(async(resolve,reject)=> {
   await fetch(url,obj)
   .then((response)=>response.json())
   .then((response)=> {
    console.log(response)
    resolve(response)
   })
   .catch((err)=>{
    console.log('err',err)
    reject(err)
   })
  })
}