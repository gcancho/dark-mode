const boton = document.getElementById('boton');
const pagina = document.querySelector('body');
//Captura la configuracion oscura de su computadora, 
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
//LocalStorage, llave : tema
const localConfig = localStorage.getItem('tema');
const textoConfig = localStorage.getItem('texto');

let textoBoton;let contenidoBoton;

if(localConfig === 'dark'){
    pagina.classList.toggle('dark-mode');
    textoBoton = 'oscuro';
}else if(localConfig === 'light'){
    pagina.classList.toggle('light-mode');
    textoBoton = 'blanco';
}else{
    if(configUser.matches){
        textoBoton = 'oscuro';
    }else{
        textoBoton = 'blanco';
    }
}

if(textoBoton === 'oscuro')
boton.innerHTML = 'Ir a modo claro';
else{
boton.innerHTML = 'Ir a modo oscuro';
}

localStorage.setItem('texto', textoBoton);


boton.addEventListener('click',()=>{
    //Creando variable tipo let porque se va a reescribir
    let colorTema;

    if(configUser.matches){
        pagina.classList.toggle('light-mode');
        //Si el color tema contiene la clase ligth-mode
        if(pagina.classList.contains('light-mode')){
            colorTema = 'light';
        }else{
            colorTema = 'dark';
        }
    }else{
        pagina.classList.toggle('dark-mode');

        if(pagina.classList.contains('dark-mode')){
            colorTema = 'dark';
        }else{
            colorTema = 'light';
        }
    }

    if(colorTema === 'dark'){
        textoBoton = 'oscuro';
    }else{
        textoBoton = 'blanco';
    }
    
    localStorage.setItem('tema', colorTema);
    localStorage.setItem('texto', textoBoton);
    
    
    if(textoBoton === 'oscuro')
        boton.innerHTML = 'Ir a modo claro';
    else{
        boton.innerHTML = 'Ir a modo oscuro';
    }
    
                
});
