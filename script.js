const boton = document.getElementById('boton');
const pagina = document.querySelector('body');
//Captura la configuracion oscura de su computadora, 
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
//LocalStorage, llave : tema
const localConfig = localStorage.getItem('tema');

if(localConfig === 'dark'){
    pagina.classList.toggle('dark-mode');
}else if(localConfig === 'light'){
    pagina.classList.toggle('light-mode');
}

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

  

    localStorage.setItem('tema', colorTema);
});