function User (email,password){
    this.email = email;
    this.password = password ;

    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    });
    Object.defineProperty(this , 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    });
     this.email = email;
    this.password = password ;

}
let detail = new User("Aditya@gmail.com", "123")
console.log(detail.email);
console.log(detail.password);


