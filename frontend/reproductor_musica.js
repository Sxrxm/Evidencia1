const reproductorMusica = {
    estado : "apagado",
    play : function(cancion) {
        if(this.estado === "apagado"){
            console.log(`Comenzando reproducción ${ cancion }...`)
            //cambiar estado
            this.estado = "play"
        }else{
            console.log("...Canción en ejecución: Stop para terminar")
        }
    },

    stop: function(){
        if(this.estado === "apagado"){
            console.log(`Reproductor ya está apagado`)
        }else{
            console.log(`Apagando reproductor`)
            this.estado = "apagado"
        }
    },
    //Crear get y set
    getEstado : function(){
        return this.estado;
    }
    ,
    setEstado : function(estado){
        this.estado = this.estado
    }
}

reproductorMusica.play("Daga adicta");
reproductorMusica.stop();
reproductorMusica.stop();
