class Usuario {
    constructor(
        public id: string = "",
        public name: string = "",
        public surname: string = "",
        public email: string = "",
        public username: string = "",
        public password: string = "",
        public passwordSalt: string = "",

    ){}

}

export default Usuario;  