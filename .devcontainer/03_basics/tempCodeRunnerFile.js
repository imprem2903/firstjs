const user = {
    username: "Prem malhotra",
    price: 999, 
    welcomemessage : function(){
        console.log(` ${this.username}, welcome to our website`);
        console.log(this);

        return this.welcomemessage
    }
}

user.welcomemessage()
user.username = "Sam"
user.welcomemessage()
