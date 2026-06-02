function boby(){  
            console.log(`${this.name} is from India`);        
}
let ind = {
        name: "Aditya"
}
let newara = boby.call(ind)
newara()
