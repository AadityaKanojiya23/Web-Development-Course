function boby(kami){
    console.log(`${this.name} is from India and live in ${kami}`);        
}
 let ind = {
        name: "Aditya"
 }

 boby.apply(ind, ["Mumbai"])

