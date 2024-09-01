class LoginModel {
    constructor(
        public id = "",
        public user = "Introduce Usuario",
        public password = "Introduce Password"
    ){
        this.id = id;
        this.user = user;
        this.password = password;
    }
}

export default LoginModel;
