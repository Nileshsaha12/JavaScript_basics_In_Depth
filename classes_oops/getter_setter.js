class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email= value
    }
    get password(){
        return `${this._password}nilu`
    }

    set password(value){
        this._password=value;
    }
}

const nilesh =new User("nilesh@ai","abc");
console.log(nilesh.password)
console.log(nilesh.email)