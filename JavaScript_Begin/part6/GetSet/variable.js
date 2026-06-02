let User = {
     _email : 'Aaditya@gmail.com',
     _password : 123 ,

     get email(){
        return this._email.toUpperCase()
     },

     set email(value){
        this._email = value
     },

     get password(){
        return this._password
     },

     set email(value){
        this._password = value
     }
}
let ak = Object.create(User)
console.log(ak.email);
console.log(ak.password);

