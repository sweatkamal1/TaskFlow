
console.log("yaha tak req aa raha hai");


export const userFun = async(req, res)=>{
    console.log("request aa raha hai ki nhi");
    
    res.send({message: "We are a Docker Developer"})
}