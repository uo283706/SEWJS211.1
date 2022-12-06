class MiGeolocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    getLongitud(){
        return this.longitud;
    }
    getPrecision(){
        return this.precision;
    }
    getPrecisionAltitud(){
        return this.precisionAltitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    getRumbo(){
        return this.rumbo;
    }
    getVeloc(){
        return this.velocidad;
    }


    verTodo(elemento){
        var ubicacion=document.getElementById(elemento);
        var datos ='<p>Longitud: '+ this.getLongitud() +' grados</p>'; 
        datos+='<p>Latitud: '+this.getLatitud() +' grados</p>';
        datos+='<p>Precisión de la latitud y longitud: '+ this.getPrecision() +' metros</p>';
        datos+='<p>Altitud: '+ this.getAltitud() +' metros</p>';
        datos+='<p>Precisión de la altitud: '+ this.getPrecisionAltitud() +' metros</p>'; 
        datos+='<p>Rumbo: '+ this.getRumbo() +' grados</p>'; 
        datos+='<p>Velocidad: '+ this.getVeloc() +' metros/segundo</p>';
        ubicacion.innerHTML = datos;
    }
}

var posicion = new MiGeolocalizacion();