Hola gente! 
Este es nuestro primer proyecto juntos usando git. 

Vamos hacer la pagina con CSS Vainilla es decir que vamos a usar todos estilos de forma manual je y para que el codigo de CSS no se haga tan extenso y sea complicado de leer vamos a utilizar SASS.

Para que SASS funcione tienen que descargar node.js ( vayan a la pagina web de node.js y descargan el programa para sus versiones de sistemas )

Paso 1 - Para que SASS pueda utilizarse en el proyecto primero tienen que abrir la consola (visual studio ) y despues seguir la linea de comandos :
--> npm init (que la funcion es traernos todo el paquete de node.js)

Paso 2 - Luego crean las carpetas de CSS y SASS (sass siempre la extension es .scss )

Paso 3 - Para que SASS compile todo en CSS tenemos que linkear el css en nuestro head y despues vamos a nuestra consola para tirar el siguiente comando. 

sass --watch scss/style.scss css/style.css (con esto hacemos que sass compile todo lo que escribimos y lo traduzca en el CSS, el orden es por carpeta y por archivo.)

Paso 4 - Luego creamos un archivo raiz de scss que es el style.scss que este es nuestro archivo principal de sass y dentro de el vamos a estar @importando los componentes.

Paso 5 - Para que ir finalizando sass tenemos que crear en la carpeta components los nombres de los componentes y van al archivo raiz utilizando los 
@import 'nombreCarpeta/nombreArchivo.scss'; <-- siempre el ; para que pueda funcionar! 

Paso 6 - Anidamiento : Para que podamos usar la sintaxis de sass es importante que la usemos de la siguiente manera :

Por ej tenemos un nav y queremos modificar todo, lo hacemos de la siguiente manera.

header{
    nav{
        ul{
            li{
                a{
                    color: red;
                }
            }
        }
    }
}

