class InfoArtefactoModel { 

    constructor( 

        public nombre = "", 
        public imagen = "",
        public descripcion = "",  
        public categoria = "",
        public location= "", 
        public puntos = 0, 
        

    ){ 
     
        this.nombre = nombre ; 
        this.imagen = imagen; 
        this.descripcion=descripcion; 
        this.categoria = categoria; 
        this.location = location; 
        this.puntos = puntos; 
       
    } 

} 

export default InfoArtefactoModel; 