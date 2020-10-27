# Navegación de Menú
* [Créditos al Autor](#cr%C3%A9ditos-del-autor)
* [Panorama Breve del Proyecto](#panorama-breve-del-proyecto)
* [Los Primeros Pasos: El Establecer de un Entorno de Desarrollo Para React](#los-primeros-pasos-el-establecer-de-un-entorno-de-desarrollo-para-react) 
* [Etapa 1: Planear La Aplicación y Crear un Sitio Estático sin Estado](#etapa-1-planear-la-aplicaci%C3%B3n-y-crear-un-sitio-est%C3%A1tico-sin-estado)
* [Etapa 2: Integrar El Estado y Diseñar la Funcionalidad de Maestro-Detalle](#etapa-2-integrar-el-estado-y-dise%C3%B1ar-la-funcionalidad-de-maestro-detalle)
* [Etapa 3: Expandir el Estado por Añadir la Funcionalidad de Crear y Eliminar](#etapa-3-expandir-el-estado-por-a%C3%B1adir-la-funcionalidad-de-crear-y-eliminar)
* [Etapa 4: Completar la Aplicación Y Armar la Funcionalidad de Actualización](#etapa-4-completar-la-aplicaci%C3%B3n-y-armar-la-funcionalidad-de-actualizaci%C3%B3n)
* [Créditos](#cr%C3%A9ditos)
* [Observaciones Finales, Conclusiones y Próximos Pasos](#observaciones-finales-conclusiones-y-pr%C3%B3ximos-pasos)

# Créditos del Autor
Esta tutoría y el código del proyecto fueron creados por **Marcus “Arroyo” B.**   Su usuario y apodo de GitHub es el [codesport](https://github.com/codesport)

## Licencia
Este proyecto (es decir, el código así como también esta tutoría) está presentado con [licencia de MIT](LICENSE.md).


# Panorama Breve del Proyecto

Esta es una tutoría comprehensiva. Se dirige al aprendedor por la creación de una aplicación de software para manejar el inventario de la cosecha de una granja.
Al aprendedor se le guía en crear un programa interactivo y de estado. Este programa será una aplicación completa con las funciones de Crear, Leer, Actualizar, y Eliminar. Encima de eso,  se realiza la aplicación como un base y fundación para ser adaptada para otras aplicaciones así como una tienda de comercio electrónico, un sistema de reservaras para un hotel o restaurante así como también una lista de tareas pendientes 

## Versión 6 de JavaScript / ESCM Script Versión 6 (ES6)

Una meta adicional de esta tutoría es proporcionar al aprendedor una fundación firme de los conceptos de primordiales de React. Así, una parte importante de tal fundación es un entendimiento de las actualizaciones a JavaScript realizado por ES6.

## Como Obtener el Beneficio Máximo de Este Tutorial

Dado el tratamiento del tema al fondo, se recomienda que el estudiante se dirija a las secciones más relevantes a su etapa de aprendizaje. Por ejemplo, una persona que tenga cero conocimientos de React deber enfocarse en las secciones “Sobre React” y  “Para Comenzar”. En cambio un aprendedor que ya tiene un ambiente de desarrollo de node.js instalado en su portátil puede comenzar con la Etapa 1. 
En resumen, el aprendedor debería sentirse cómodo con navegar a las etapas y secciones que le sierva mejor.


# Sobre React

React es una biblioteca  del lado cliente (es, decir, “front end”) creado por Facebook.  Se enfoca en la interfaz de usuario renderizado. Es decir, la “Vista” del  Vista Modelo y Control  paradigma  de arquitectura de diseño de desarrollo de software. Adicionalmente, fue lanzado al público por Facebook  el [29 de mayo de 2013](https://www.google.com.mx/search?q=cuando+fue+creado+React?).

React se aprovecha de JavaScript ES6.  Y programas de React son escritos en un sintaxis llamado [JSX](https://www.google.com.mx/search?q=Que%20es%20el%20JSX). JSX es innovador por la razón que permite el desarrollador combinar HTML y JavaScript en una manera natural. Tan natural que efectivamente se escribe y combine HTML y JavaScript en la misma línea de código.

## Convencionales de Codificación en React
Código en React se trata de elementos básicos  o “bloques de construcción”  que se llaman componentes, en lo cual hay dos tipos: componentes de clase y  funcionales.  Y  escribimos los nombres de tales componentes en Caso Pascal.  Es decir, con la primera letra en de cada palabra en escrita en mayúsculas. En cambio, los nombres de métodos de clases, variables, y funciones dentro de componentes se escribe con la primera letra en minúscula. Es, decir caso Camello.
Para aprender más sobre el sintaxis de React, refiérase a este artículo sobre [Componentes y Props](https://es.reactjs.org/docs/components-and-props.html). 

## Actualizaciones a JavaScript por ES6
React se aprovecha del JavaScript ES6. ES6 se lleva nuevos caracterices (e.g., como el uso de clases) a JavaScript que ya fueron comunes en lenguajes de programaciones tradicionales y Orientados a Objetos (OO) como C, Java, y Python.  Para el propósito de este tutorial, nos enfocaremos en los 3 siguientes características y adiciones a JavaScript:   funciones de flecha `() =>`  y las palabras claves de `let` y `const`.  React utiliza el transcompilador [Babel](https://www.google.com.mx/search?q=cual+es+babel+para+ES6) que permite que el ES6 sea compatible con navegadores antiguos asi como también aquellos que no sean basados en el Chromium de Google.

**[`let`](https://www.google.com/search?q=el+uso+de+let+en+JavaScript+ES6):** es una declaración de variable como `var`, pero es "hiperlocalizada" y se limita a un bloque de código determinado en el que está asignada. Conclusión: `let` es preferible a `var` debido a su localización granular y ser limitada y confinado por bloques.  Estas características, a su vez, aseguran que nuestros programas y código son más predecibles y estables. !Aprende más en sobre [`let`en Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let)!

**[`const`](https://www.google.com/search?q=el+uso+de+la+declaracion+const+en+JavaScript+ES6):** es la declaración constante. También es *hiperlocalizada* y se limita a un bloque de código determinado en lo que está asignada. Conclusión:  Las funciones pueden ser asignadas a constantes y se usan a menudo en React. Funciones de constantes son utilizados para las declaraciones de función usando funciones de flecha. También, vale la pena mencionar que, en React, normalmente no escribimos nuestras constantes en mayúsculas. !Aprende más en acerca de [`const`en Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const)!

### Las Funciones de Flecha: [`()=>`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions)

Como `let` y `const`, las funciones de las flechas son "hiperlocalizadas". Esto significa que sólo son "conscientes de" y se ejecutan en el alcance y ámbito donde fueron creadas. Por otro lado, las funciones tradicionales de JavaScript suben al alcance de la ventana (es decir, suben al window scope de JavaScript).

 Debido a esta localización del scope, las funciones de flecha son de particular interés a los desarrolladores de React usando funciones de clase y haciendo referencia a instancias de `this`.  De hecho, las funciones de flecha anulan la necesidad de enlazar "manualmente" las funciones su una clase adentro de su constructor. [Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions) tiene un tutorial excelente acerca de las funciones de flecha. 

El siguiente ejemplo muestra la función tradicional y su equivalente función de flecha. 

**Favor de Notar:** Observe que la muestra abajo **solo demuestra el uso del sintaxis**, no el limite al nivel de bloque ni el enlace de la declaraciones al "scope" local.

```javascript
const OUTER = 10;

//Traditional Function
function MyComponent(){
  let number = 3;
  number = number*OUTER; //expect 3*10 = 30
  return number;
}

//Arrow Function
const MyOtherComponent = () => {
  let number = 3;
  number = number*OUTER; //expect 3*10 = 30
  return number;  
}
```

   * **Consejo Pro 1:** Una buena regla general para los novatos es **siempre usar las funciones de flecha** al definir los métodos dentro de los componentes de la clase. 

    Si no se usan funciones de flecha para declarar un método, tal método debe ser apegado y enlazado dentro del constructor de su clase asi: `this.miMetodoEspecial = this.miMetodoEspecial.bind(this);` 

    Si te decides utilizar las funciones de flechas para definir componentes funcionales, hay que declararlas como constantes por medio de la palabra clave de `const`

   * **Consejo Pro 2:** Si tu controlador de eventos requiere parámetros, hay que usar funciones de flechas para prevenir la función de ejecutar automáticamente cuando la pagina sea cargada y renderizada en el navegador. 


   * **Consejo Pro 3:** hablando francamente, componentes hijos deberían ser componentes funcionales y no manejar el estado. De hecho, el estado que tendrían naturalmente un hijo, deber ser levantado y por consiguiente controlado por su padre

   * **Consejo Pro 4:** Si se encuentra repitiendo las mismas líneas de código a lo largo y ancho de un componente padre o hijo, es avisado que estas líneas sean combinadas en un método de clase o en una función. Después, llámelo (es decir, la función o método de clase) cuando Ud. lo necesite.
   
   * **Consejo Pro 5:** Semejante al numero 4, si se encuentra usando la misma función en más de 2 componentes, es mejor poner tal función en su propio archivo y importarlo cuando se lo necesite

### Los Componentes de Clase

Componentes de clase son estructuras de lenguajes de OO. Se usan para manejar el estado en aplicaciones de React. Adicionalmente, cada componente de clase deber tener un método de `render()` con una declaración `return`.

   * **Consejo Pro 6:** Crea un componente de padre que controlar el estado de la aplicación. Tal clase de padre será la *única fuente de verdad*

---
# Los Primeros Pasos: El Establecer de un Entorno de Desarrollo Para React

## A. Configuración de VSCode

VS Code es nuestro editor preferido. Las siguientes extensiones lo optimizarán para el desarrollo con React

1. Instale [Babel Javascript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel). Creado por Michael McDermont, provee resaltado de sintaxis  para JavaScript ES6, React JSX, Flow y GraphQL.

2. Instale [Oceanic Theme](https://marketplace.visualstudio.com/items?itemName=naumovs.theme-oceanicnext) de Sergii Naumov. Funciona con Babel JavaScript. Y, soporta un nivel más granular de resaltado de sintaxis para propiedades de JSX.

## B. Configuración del Entorno de React

1. Instale el LTS de la versión de [node.js](https://nodejs.org/es/)

2. Usando el terminal (es decir, linea de comandos), navegue hasta la carpeta de proyectos donde guardará el proyecto

3. Dentro de su terminal teclee `npx create‐react‐app admin‐panel`

    -> i. NB: `admin-panel` es el nombre de la aplicación en este tutorial.

    -> ii. Consulte los [tutorías oficiales de React](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app) para aprender más sobre las directivas `npx` y `create‐react‐app`

4. Por último, teclee `npm start` en su terminal para ejecutar React. La aplicación se renderizará en su máquina local en http://localhost:3000


## C. `create-react-app`: Comprensión de los Archivos Predeterminados y La Estructura de los Directorios

1. **node_modules/:** Carpeta de node estándar para almacenar dependencias, paquetes (por ejemplo, Babel) y bibliotecas (por ejemplo, React).

2. **paquete.json:** Configuración estándar y archivo de configuración del guión para proyectos de node. Se puede especificar dependencias e incrustar [scripts personalizados](https://css-tricks.com/why-npm-scripts/) para automatizar su flujo de trabajo de desarrollo

3. **público/:** Carpeta con privilegios de lectura global (es decir, pública, accesible por la web). Sólo almacena contenido público aquí, como imágenes y archivos de html. 

    **TODO Opcional:** Se puede cambiar o eliminar el favicon, el manifiesto y los archivos de logotipos para adaptarse a las necesidades de su proyecto. Pero, asegúrese de que index.html también refleje esos cambios. `logo512.png` no será usado en nuestro proyecto así que es bienvenido a eliminarlo.

4. **public/index.html:** Usado por index.js para hacer la aplicación de reacción. La aplicación se renderiza a un DOM arbitrario (por defecto es 'root') en este archivo mediante este código `<div id="root"></div>`

5. **index.css:** Hoja de estilo global para el proyecto de React. Dentro de la comunidad de desarrolladores de React se considera una buena práctica el optar
por el CSS de componentes específicos. Es decir, dicho CSS se escribe directamente en el componente. Se realiza a través de objetos CSS o [Bibliotecas de CSS adentro de JavaScript](https://www.npmtrends.com/styled-components-vs-emotion-vs-react-bootstrap) como *styled-components*, *react-bootstrap*, etc.

6. **App.css:** Hoja de estilo externa para el App.js. Como el index.css, el App.css es minificada y agregada en una hoja de estilo "global" durante la construcción y compilación de la aplicación. 

    **TODO:** Eliminar este archivo

7. **index.js:** Punto de entrada de la aplicación.  Renderiza App.js a una `id` arbitrario (por defecto la id es 'root') en public/index.html.  

    **TODO:** Abra este archivo y actualice para importar la aplicación desde './componentes/App'.

8. **App.js:** Un componente de contenedor y padre para las aplicaciones de React. 
    
    **TODO:** Borre su contenido y muévalo al `src/componentes`


### Actualización de la Estructura del Directorio

1. Crear las carpetas de `componentes/` e `imágenes/` bajo del directorio `src/`
2. Eliminar `App.css` y `App‐test.js` del directorio de `src/`. Mueva el `App.js` a `componentes/`
3. Si Ud. aún no lo ha hecho, siga los "TODOs" mencionados anteriormente, en la Parte C.

Añadiremos nuestros archivos de componentes en la siguiente sección. Sin embargo, su estructura de carpetas debería parecerse a esto:

```text
admin-panel/
  ├──📁node_modules/
  ├──📁public/
  │ ├── index.html
  | |     ...
  | |── favicon.ico  
  | └── robots.txt
  ├──📁src/
  │ ├──📁components/
  | | ├── App.js 
  │ | |── ComponentNum_1.js
  | | |     ...
  │ | └── ComponentNum_n.js
  | └──📁images/
  |
  ├── index.css
  ├── index.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

**Figura 1: Una Estructura de Carpetas Propuesta para React**



---
# Etapa 1: Planear La Aplicación y Crear un Sitio Estático sin Estado


La rama de la Etapa 1 de nuestro tutorial está disponible para su **[descarga](https://github.com/codesport/admin-panel/blob/main-basic-static-public/src/components)**. 

Nuestro primer paso es crear un sitio web estático y no interactivo. A menudo la morada de los especialistas en UX/UI, el wireframing es una forma común de planificar el diseño y desarrollo de una aplicación. Como desarrollador, encontrará que diagramar el diseño de una aplicación es una metodología conveniente y táctica para planificar y crear estrategias para las aplicaciones de React. Puedes usar lápiz y papel, Photoshop, o alternativas gratuitas en línea como
[Diagrams.net](https://www.diagrams.net/index.html). Sin embargo, en este tutorial se utiliza un diagrama de bloques de color para representar el diseño.


![Etapa 1 - Diagrama de distribución de la aplicación con la correspondiente estructura de archivos](src/images/color-block-simple-v2-and-folder-layout.png "Etapa 1 - Diagrama de distribución de la aplicación con la correspondiente estructura de archivos")

**Figura 2: Etapa 1 - Diagrama de distribución de la aplicación con la correspondiente estructura de archivos**

**Favor de Notar:** Como se muestra en la carpeta de la Figura 2, cada parte de la aplicación que se encarga de renderizar una vista debe ser su propio componente. Claramente, necesitamos usar nuestro juicio para decidir a qué nivel "componemos" nuestra aplicación. Sin embargo, la estructura nos proporciona un plan de juego previo al desarrollo de nuestra aplicación.

**La Observación Destacada:** Cada sección de la estructura de alambre representará un Componente de React. Cada componente puede ser subdividido en otros adicionales, si es necesario.

## Codificar La Aplicacion Estátic: App.js, Controller.js, Header.js, y Master.js

El código de los componentes de App, Controller, Header, y Master se muestra en la Figura 3, abajo, con comentarios. Aquí hay un resumen:

1. **Controller.js:** Gestionará la complejidad resultante de nuestra aplicación. Controller dicta la disposición de cada componente. En futuras iteraciones
gestionará el estado de la aplicación.

2. **Master.js:** Hace el trabajo pesado. Las [líneas 4 hasta 38](https://github.com/codesport/admin-panel/blob/main-basic-static-public/src/components/Master.js#L4-L38) muestran que almacenamos nuestro inventario en una matriz JSON. En el mundo real almacenaríamos nuestro inventario en una base de datos. En las [líneas 53 a 60](https://github.com/codesport/admin-panel/blob/main-basic-static-public/src/components/Master.js#L53-L60) del Master.js (ver Figura abajo) usamos el método [`Array.map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) para iterar sobre un array JSON de
artículos. Una copia del archivo Master.js de la Etapa 1 está disponible [para su descarga](https://github.com/codesport/admin-panel/blob/main-basic-static-public/src/components/Master.js)

3. **Header.js:** Muestra el título de la aplicación. También usa la propiedad de [`length`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/length) de JavaScript para contar el inventario total.

4. **App.js:** Muchos desarrolladores prefieren mantener el App.js simple. Para este proyecto, mantendrá su utilidad como un único punto de entrada llamado por
index.js para colocarlo en index.html. El Controller es importado en App.js


![App.js](src/images/stage-1-app.png "App.js for Static App") ![Controller.js](src/images/stage-1-controller.png "Controller.js for Static App")

![Header.js](src/images/stage-1-header.png "Header.js Functional Component for Static App") ![Master.js](src/images/stage-1-master.png "Master.js Functional Component for Static App")

**Figura 3: App.js, Controller.js, Header.js, y Master.js**


Dada la simplicidad de la actual iteración de nuestra aplicación, puede argumentarse que lo anterior es exagerado. Que tal vez todo este código podría ser colocado en un solo archivo. ¡Todo es cierto! Sin embargo, como desarrolladores siempre queremos codificar con la modularidad, la facilidad de mantenimiento, y la facilidad de refactorización en mente. A medida que construyamos nuestra aplicación y agreguemos estado, la lógica de este ethos de diseño se hará más clara.


## Captura de Pantalla Resultante de la Aplicación Estática


![Static Version of Admin App](src/images/static-version.png "Static Website Produced by the 3 Component Files")

**Figura 4: Etapa 1 - La Aplicación Estática Producida por Nuestros 3 Archivos**

---
# Etapa 2: Integrar El Estado y Diseñar la Funcionalidad de Maestro-Detalle

**Consejo Pro 7**

> Para armar la aplicación en un manera correcta, se necesita pensar sobre la mínima cantidad de 
> estado mutable que requeriría la aplicación. Se necesita desentrañar la mínima representación 
> del estado que la aplicación necesitaría y después calcule el resto bajo demanda.
>  *- [Pensando en React](https://es.reactjs.org/docs/thinking-in-react.html)*


La etapa 2 de nuestro tutorial es la rama denominada `main-basic-state-public`, y su base de código **[está disponible para su descargar](https://github.com/codesport/admin-panel/blob/main-basic-state-public/src/components)**. La etapa 2 implica convertir nuestro Controller en un componente de clase para gestionar el estado. También crearemos Detail.js que contendrá JSX para renderizar la página de detalles.

Aunque cada componente de React puede generar y contener datos, es una buena práctica elevar el estado al componente padre. El estado de elevación es un principio básico del diseño de React. Aporta organización y simplicidad a lo que potencialmente puede ser una base de código bastante compleja y poco manejable.

Como se mencionó anteriormente, el estado es complejo y es más fácil tener un archivo como nexo y controlador de todas las cosas del estado.

Aquí está nuestro diseño de aplicación actualizado:

![Etapa 2 - Diagrama de diseño para la construcción de la Aplicación de Master-Detalle](src/images/color-block-master-detail-v2.png "Etapa 2: Diagrama de diseño para la construcción de la Aplicación de Master-Detalle")                   

**Figura 5: Etapa 2 - El Diagrama de Diseño para la construcción de la Aplicación de Master-Detalle**

Ahora, al hacer clic en un elemento de la página maestra, somos transportados a una página de detalles.

**Favor de Notar:** En las Etapas 2 - 4 de este tutorial, puede consultar los comentarios de las capturas de pantalla para obtener explicaciones adicionales sobre la funcionalidad del código.

Analicemos las piezas clave del código añadido:

## 1. Análisis de Controller.js

Hemos convertido el Controller en un componente de clase para gestionar el estado. Una aplicación que tenga estado implica la memoria así como el almacenamiento de datos volátiles y/o disposición en el DOM.

Nuestro código en el Controller puede dividirse en 3 métodos:

### a. `constructor()`
En primer lugar, se añade el método constructor requerido para inicializar el estado como se describe en la Figura 6:

![Stage 2 - Analysis of Controller's Constructor Method](src/images/stage-2-controller-constructor.png "Stage 2: Analysis of Controller's Constructor")

**Figura 6: Análisis del método de constructor del Controller**

Segundo, tenemos nuestro manejador de eventos que determina los detalles de cada artículo. La figura 7, Análisis del método `handleSelectedDetail` del Controller, explica el código:

### b. `handleSelectedDetail()`

En la Figura 7 se muestra el método incorporado de JavaScript [`Array.filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter) y es el uso de [`setState()`](https://www.google.com.mx/search?q=como+usamos+setState()+en+React) para asignar un nuevo valor a la variable de estado SelectedDetail. En React, [`setState()`](https://www.google.com.mx/search?q=como+usamos+setState()+en+React) siempre se llama para actualizar las variables de estado.

![Stage 2 - Analysis of Controller's handleSelectedDetail Method](src/images/stage-2-controller-handleSelectedDetail.png "Stage 2: Analysis of Controller's handleSelectedDetail()")

**Figura 7: Análisis del Método de `handleSelectedDetail`**

### `c. render()`

Por último, en la figura 8 tenemos el método de representación actualizado. Envía la presentación de la vista a App.js para su renderización en el DOM:


![Stage 2 - Analysis of Controller's Render Method](src/images/stage-2-controller-render.png "Stage 2: Analysis of Controller's Render()")

Figura 8: Análisis del método de renderización del Controller con énfasis en el callback enviada al componente Master

## 2. Análisis de Master.js

El Master.js y su callback ya se discute en detalle en los comentarios de la figura 8, arriba.

Sin embargo, vale la pena mencionar que cuando se pasan argumentos a otros componentes, se envían como objetos. Se accede a estos objetos con el parámetro
"props" combinado con la notación de puntos.


![Stage 2 - Analysis of the Master Functional Component](src/images/stage-2-master.png "Stage 2: The Master Functional Component")

**Figura 9: El Componente Master**


## 3. Análisis de Detail.js

El componente de detalle es bastante poco inspirador. Recibe los accesorios del Controller y los coloca en una tabla HTML. Sin embargo, cabe destacar la línea 11 que utiliza la desestructuración de objetos para simplificar el acceso a las propiedades de los objetos


![Stage 2 - The Detail Component](src/images/stage-2-detail.png "Stage 2: Detail Component")
**Figura 10: El componente de detalle**



---
# Etapa 3: Expandir el Estado por Añadir la Funcionalidad de Crear y Eliminar


A medida que nuestro Controller se vuelve más complejo es prudente identificar formas de refactorizar y simplificar nuestro código. En la figura 8, nuestro Controller utilizó [condicionales](https://github.com/codesport/admin-panel/blob/main-basic-state-public/src/components/Controller.js#L77-L81) para decidir qué rendirle al usuario. Para manejar el renderizado de la vista de forma más elegante, crearemos un método personalizado llamado `renderView` que simplificará nuestro código de base.

## El método de `renderView()` del Controller
[`renderView`](src/components/Controller.js#L71-L88) es un método de ayuda dentro de Controller. Gestiona [`this.state.view`](src/components/Controller.js#L57) por administrando lo que se muestra al usuario. También reduce drásticamente la repetición de códigos innecesarios.

![Stage 3 - renderView() Helper Method](src/images/stage-3-controller-renderview.png "Stage 3 - renderView() Helper Method")
**Figura 11: Etapa 3 - El Método de Ayuda de renderView() para la Gestiona la Creciente Complejidad de Nuestra Aplicación**


## El método de `handleDelete()` del Controller

Aquí hay un análisis del método de `handleDelete`:

1. Recupera una lista de los artículos del inventario que deseamos eliminar. Esto se almacena en `this.state.arrayToEdit`

2. Hace una copia del inventario existente en esta lista maestra del estado.

3. Aplica el filtro [`Array.filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter) a la copia. El filtro devuelve todo excepto el elemento que [contiene el ID](src/components/Controller.js#L314) que queremos eliminar


```JSX
    handleDelete = () => {
        
        console.log('Delete function called')

        if(this.state.arrayToEdit.length > 0){ 
               
            const confirmDelete = window.confirm('Are you sure you want to delete these ' + this.state.arrayToEdit.length + ' items?')
            
            if (confirmDelete === true) {

                let newMasterList = this.state.masterList 

                this.state.arrayToEdit.map( ( id, index) =>     
                    newMasterList = newMasterList.filter( detail => detail.id !== id)    
                )

                console.log(newMasterList)
            
                this.setState({

                    masterList: newMasterList, 

                }, function(){
                    this.emptyArrayToEdit()
                    console.log(this.state.masterList)
                    this.renderView( 
                        <h3>Success! { this.state.arrayToEdit.length } Item(s) Deleted</h3>  
                    )
                
                })

            }  else {
                this.emptyArrayToEdit()
                this.renderView(
                    <h3>Delete Process Canceled By User.</h3> 
                     )                  
            } 
         
        } else {

            this.renderView(
                <h3>Delete Attempt Aborted. Please Select an Item to Delete.</h3> 
                )                
        }    
    }
```

**Figura 12: Etapa 3 - La Funcionalidad de Eliminar Está Añadida al Controller**



## Create.js

El componente Crear muestra el formulario para crear un nuevo elemento. Sin embargo, el Controller procesa el formulario a través de una función de callback
enviada al componente Create.

**Favor de Nota:** React requiere que cada elemento de una lista que se presenta al DOM tenga un UUID. En la [línea 2 de Create.js](src/components/Create.js#L2) importamos la biblioteca UUID de JavaScript: `import { v4 } from 'uuid'`.

En la figura 13, invocamos el UUID en la [línea 44 de Create.js](src/components/Create.js#L44) por  uso del `id v4 `

Por favor, consulte los comentarios de la Figura 13 para un análisis adicional de Create.js


![Stage 3 - Create Component](src/images/stage-3-create.png "Stage 3 - Create Component")
**Figura 13: Etapa 3 - Los comentarios explican la funcionalidad del componente de Create**


## `handleCreateFormView()` Un Método Dentro de Controller.js

*`handleCreateFormView()`* es un método adentro del archivo llamado Controller.js.  Se envía un callback a Create.js y manipula lo que se muestra al usuario.

Aquí es su código:

```JSX
    handleCreateFormView = () => {
        this.renderView('', <Create onCallbackSubmit={this.handleCreate} />) 
        this.hideButton('create-button')
        this.hideButton('update-button')
        this.hideButton('delete-button')
    }
```
**Figura 14: Etapa 3 - `handleCreateFormView()` es un Método del Componente Llamado `Controller`**

## El Método de `handleCreate()`del Componente Controller


Examinando la línea 2 de la figura 15, [`handleCreate()`](src/components/Controller.js#L231) concatena el objeto de inventario recién creado con una copia de nuestra lista de inventario (masterList). Luego actualiza la masterList por medio de [`setState()`](https://www.google.com.mx/search?q=que+es+setState()+en+React)

```JSX
    handleCreate = ( creation ) =>{
        const newMasterList = this.state.masterList.concat( creation )
        
        this.setState({
            masterList: newMasterList,
            }, function(){this.renderView( <h3>Successfully Created {creation.name}!</h3> )}
        )

    }
```

**Figura 15: Etapa 3 - Método de handleCreateFormView**



---
# Etapa 4: Completar la aplicación Y Armar la Funcionalidad de Actualización

La base de código de las Etapas 3 y 4 se puede descargar en la sección [`main-final-public`](https://github.com/codesport/admin-panel/blob/main-final-public/src/components/)


Para proporcionar una experiencia óptima al usuario, el componente de actualización se diseñó para ser un símil visual cercano al componente de detalle. Esto se logró superponiendo un formulario [HTML5](src/components/Update.js#L49-L61) sobre el código utilizado para generar el componente [Detail](src/components/Detail.js). 

Cabe mencionar que la propiedad [`defaultValue`](https://es.reactjs.org/docs/uncontrolled-components.html#default-values) de la forma React se utiliza para rellenar previamente el componente Update con la información del artículo.

Por último, al igual que Create.js, Update.js también recibe una función callback de Controller.js. A su vez, el componente Update envía los datos del
formulario de vuelta al Controller a través de el callback de `handleUpdate()`. El código del Update.js es bastante mundano, pero no dude en [examinarlo](src/components/Update.js). La Figura 16 es un extracto:

![Stage 4 - Update Component](src/images/stage-4-update.png "Stage 4 - Update Component")
**Figura 16: Etapa 4 - El Extracto del Componente de Update**


Mucho más interesante es cómo manejamos las actualizaciones a través del Controller:

1. **`handleSelectedDetail()`**
    Un método de limpieza y ayuda. Se utiliza una serie de condicionales para determinar si se debe mostrar la vista de detalle o de actualización.

2. **`handleUpdate()`**

    Aprovechándonos del método de `Array.filter()`, eliminamos la version original del elemento que actualicemos por uso del `!==`. También nos aprovechamos de un otro método integrado en JavaScript de `Array.concat()`, la cual hace una copia de la matriz que está manipulando.  Luego, concatena el elemento actualizado a la copia truncada. Finalmente, utilizamos el `setState()` para actualizar la lista original y autorizada llamada masterList.

    **Favor de Nota:** Tenga en cuenta que estas son operaciones de manipulación de matrices. Si estuviéramos almacenando en una base de datos, nuestra
funcionalidad de actualización sería bastante diferente.

```JSX
    handleUpdate = (updates) =>{
        const updatedDetail = this.state.masterList.filter( detail => detail.id !== updates.id).concat(updates)
        console.log('Contents of Updated Detail:')
        console.log(updatedDetail)
        this.setState({
            masterList: updatedDetail,
            }, function(){
                    this.emptyArrayToEdit()
                    this.renderView( 
                            <h3>Successfully Updated {updates.name}!</h3> 
                    )
                }
            )
    }
```
**Figura 17: Etapa 4 - El Método de handleUpdate que Está en el Componente Controller**

---
# Créditos

El diseño pedagógico de este tutorial se inspiró en [Pensando en React](https://es.reactjs.org/docs/thinking-in-react.html).

La interfaz de experiencia usario (es decir, la UX) para esta aplicación se inspiró  en la aplicación móvil de [Amazon y  Wholefoods](https://www.amazon.com/alm/storefront??tag=7475725-20)

El CSS usado para los [botones de acción](https://github.com/codesport/admin-panel/blob/main-final-public/src/index.css) es de [Adventures In Techland](https://www.adventuresintechland.com/bootstrap-css-buttons-only/)

Como se muestra en la Figura 18 abajo, los comentarios de toda la base de código de esta aplicación hacen referencia a entradas y discusiones de Stackoverflow, así como a otras fuentes que fueron útiles para construir esta aplicación.

![Stage 4 - buildEditArray Method](src/images/stage-4-controller-build-edit-array.png "Stage 4 - buildEditArray Method")
**Figura 18: Etapa 4 - Comentarios que Explican el Método `buildEditArray` en el Componente Controller**

---
# Observaciones Finales, Conclusiones y Próximos Pasos

Este tutorial y su código resultante pueden utilizarse como plantilla para construir aplicaciones más avanzadas. Las opciones de expansión incluyen la construcción de una tienda en línea, un sistema de reservas, una libreta de direcciones, una lista de tareas, etc.

El aprender React nos hace mejores desarrolladores de Javascript. De hecho, como desarrolladores de React tenemos la oportunidad de entender y apreciar realmente el poder y la extensibilidad de JavaScript. Además, el uso de ESLint por parte de `create-react‐app` proporciona numerosos beneficios que nos enseñan a escribir un base de código más seguro y estable.

Algunos de los próximos pasos inmediatos para este proyecto incluirían:

* Usar Jest para ejecutar pruebas automatizadas e incorporar las mejores prácticas de desarrollo impulsadas por pruebas
* La integración con una base de datos NoSQL como MongoDB o Firebase
* Añadiendo autenticación y control de acceso para la seguridad
* Hospedaje en un servidor en vivo corriendo el nodo y NGINX
* Integrarse con las API para obtener datos externos

Otras posibles integraciones podrían implicar:

* Explorar usando el router React como un medio para manejar la navegación y la administración de URL.
* Potencialmente usar el Redux para gestionar el estado mientras nuestra aplicación continúa creciendo y la gestión del estado se vuelve más compleja
* Eliminar los mensajes de verificación y depuración del estado de la consola.log
* Explorando el uso de CSS en las librerías de JavaScript como Styled-Components, react-bootstrap, etc.


Que Uds. estén bien. Tengan cuidado. Y, gracias por leer.