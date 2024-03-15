let sum=0;
import {subir} from './api.js'
const empezar   = document.querySelector('.boton1');

/**PAGINA 1 */
empezar.addEventListener('click', e =>{
    e.preventDefault();
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML=`
        <div class="contenedor2">
            <h2>¿Qué nivel de calidad estás buscando?</h2>
            <div class="content2">
            <div class="content2-fotos" id="opcion1-1">
            <img src="images/answer-1-1.png" alt="">
            <h5>Calidad óptima</h5>
            </div>
            <div class="content2-fotos" id="opcion1-2">
            <img src="images/answer-1-2.png" alt="">
            <h5>Buena relación/precio</h5>
            </div>
            <div class="content2-fotos" id="opcion1-3">
            <img src="images/answer-1-3.png" alt="">
            <h5>No me importa tanto la calidad</h5>
            </div>
            </div>
        </div>
            `;

            document.querySelector('#opcion1-1').addEventListener('click',function (){
                sum = sum + 3000000;
            });
            document.querySelector('#opcion1-2').addEventListener('click',function (){
                sum = sum + 3000000;
            });
            document.querySelector('#opcion1-3').addEventListener('click',function (){
                sum = sum + 3000000;
            });
            
/**PAGINA 2 */
    
    const opcionesCalidad = document.querySelectorAll('.content2-fotos');
    opcionesCalidad.forEach(opcion => {
        opcion.addEventListener('click', e =>{
            e.preventDefault();
            const contenedor= document.querySelector('.contenedor');
            contenedor.innerHTML=`
                <div class="contenedor3">
                    <h2>¿Qué tipo de App necesitas?</h2>
                    <div class="content3">
                    <div class="content3-fotos" id="opcion2-1">
                    <img src="images/answer-2-1.png" alt="">
                    <h5>Aplicacion Android</h5>
                    </div>
                    <div class="content3-fotos" id="opcion2-2">
                    <img src="images/answer-2-2.png" alt="">
                    <h5>Aplicacion iOS</h5>
                    </div>
                    <div class="content3-fotos" id="opcion2-3">
                    <img src="images/answer-2-3.png" alt="">
                    <h5>Aplicacion Windows Phone</h5>
                    </div>
                    <div class="content3-fotos" id="opcion2-4">
                    <img src="images/answer-2-4.png" alt="">
                    <h5>Aplicacion Android + iOS</h5>
                    </div>
                    </div>
                </div>
            `;

            document.querySelector('#opcion2-1').addEventListener('click', function () {
            sum = sum + 2000000;
            console.log(sum);
            
            });
            document.querySelector('#opcion2-2').addEventListener('click', function () {
            sum = sum + 3000000;
            console.log(sum)
            });
            document.querySelector('#opcion2-3').addEventListener('click', function () {
            sum = sum + 800000;
            console.log(sum)
            });;
            document.querySelector('#opcion2-4').addEventListener('click', function () {
            sum = sum + 3500000;
            console.log(sum);
                
                });


/**PAGINA 3 */

    const opcionesDiseño = document.querySelectorAll('.content3-fotos');
    opcionesDiseño.forEach(elige=>{
        elige.addEventListener('click',e=>{
            e.preventDefault();
            const contenedor=document.querySelector('.contenedor');
            contenedor.innerHTML=`
            <div class="contenedor4">
                <h2>¿Que diseño quieres que tenga tu App?</h2>
                <div class="content4">
                <div class="content4-fotos" id="opcion3-1">
                <img src="images/answer-3-1.png" alt="">
                <h5>Interfaz sencilla</h5>
                </div>
                <div class="content4-fotos" id="opcion3-2">
                <img src="images/answer-3-2.png" alt="">
                <h5>Interfaz personalizada</h5>
                </div>
                <div class="content4-fotos" id="opcion3-3">
                <img src="images/answer-3-3.png" alt="">
                <h5>Interfaz replicada de la web</h5>
                </div>
                <div class="content4-fotos" id="opcion3-4">
                <img src="images/answer-3-4.png" alt="">
                <h5>No necesito diseño</h5>
                </div>
                </div>
                </div>
            </div>
            `
            document.querySelector('#opcion3-1').addEventListener('click', function () {
            sum = sum + 500000;
            console.log(sum);
            
            });
            document.querySelector('#opcion3-2').addEventListener('click', function () {
            sum = sum + 1000000;
            console.log(sum)
            });
            document.querySelector('#opcion3-3').addEventListener('click', function () {
            sum = sum + 800000;
            console.log(sum)
            });;
            document.querySelector('#opcion3-4').addEventListener('click', function () {
            sum = sum + 300000;
            console.log(sum);
            });
       
/**PAGINA 4 */
    
    const opcionesMoneda=document.querySelectorAll('.content4-fotos');
    opcionesMoneda.forEach(elige=>{
        elige.addEventListener('click',e=>{
            e.preventDefault();
            const contenedor=document.querySelector('.contenedor');
            contenedor.innerHTML=`
            <div class="contenedor5">
                <h2>¿Cómo monetizar tu App?</h2>
                <div class="content5">
                <div class="content5-fotos" id="opcion4-1">
                <img src="images/answer-4-1.png" alt="">
                <h5>Aplicacion gratuita con <br> publicidad</h5>
                </div>
                <div class="content5-fotos" id="opcion4-2">
                <img src="images/answer-4-2.png" alt="">
                <h5>Aplicacion de pago</h5>
                </div>
                <div class="content5-fotos" id="opcion4-3">
                <img src="images/answer-4-3.png" alt="">
                <h5>Compras dentro de la <br>app</h5>
                </div>
                <div class="content5-fotos" id="opcion4-4">
                <img src="images/answer-4-4.png" alt="">
                <h5>Otros/No lo sé <br> todavia</h5>
                </div>
                </div>
            </div>
            `
            document.querySelector('#opcion4-1').addEventListener('click', function () {
            sum = sum + 600000;
            console.log(sum);
            
            });
            document.querySelector('#opcion4-2').addEventListener('click', function () {
            sum = sum + 1000000;
            console.log(sum)
            });
            document.querySelector('#opcion4-3').addEventListener('click', function () {
            sum = sum + 2000000;
            console.log(sum)
            });;
            document.querySelector('#opcion4-4').addEventListener('click', function () {
            sum = sum + 3500000;
            console.log(sum);
            });


/**PAGINA 5 */

    const opcionesAutenticacion=document.querySelectorAll('.content5-fotos');
    opcionesAutenticacion.forEach(elige=>{
        elige.addEventListener('click', e=>{
            e.preventDefault();
            const contenedor=document.querySelector('.contenedor');
            contenedor.innerHTML=`
            <div class="contenedor6">
                <h2>¿Tu app necesita sistema de autenticación ?</h2>
                <div class="content6">
                <div class="content6-fotos" id="opcion5-1">
                <img src="images/answer-5-1.png" alt="">
                <h5>Si, con redes sociales<br> email</h5>
                </div>
                <div class="content6-fotos" id="opcion5-2">
                <img src="images/answer-5-2.png" alt="">
                <h5>Si, con email</h5>
                </div>
                <div class="content6-fotos" id="opcion5-3">
                <img src="images/answer-5-3.png" alt="">
                <h5>No</h5>
                </div>
                <div class="content6-fotos" id="opcion5-4">
                <img src="images/answer-5-4.png" alt="">
                <h5>No lo sé todavia</h5>
                </div>
                </div>
                </div>
            </div>
            `
            document.querySelector('#opcion5-1').addEventListener('click', function () {
            sum = sum + 600000;
            console.log(sum);
            });
            document.querySelector('#opcion5-2').addEventListener('click', function () {
            sum = sum + 1000000;
            console.log(sum)
            });
            document.querySelector('#opcion5-3').addEventListener('click', function () {
            sum = sum + 2000000;
            console.log(sum)
            });;
            document.querySelector('#opcion5-4').addEventListener('click', function () {
            sum = sum + 3500000;
            console.log(sum);
            });
        
        
/**PAGINA 6 */
        
    const ultimaPage=document.querySelectorAll('.content6-fotos');
    ultimaPage.forEach(elige=>{
        elige.addEventListener('click',e =>{
            e.preventDefault();
            const contenedor=document.querySelector('.contenedor');
            contenedor.innerHTML=`
            <div class="contenedor6">
                <h6>¡Bien! ¡Hemos terminado!</h6>
                <br><br>
                <h4>¡Compártenos si te ha gustado!</h4>
                <div class="redes">
                    <button class="redes1"> <i class="fa-brands fa-facebook-f"></i>Share</button>
                    <button class="redes2"> <i class="fa-brands fa-linkedin-in"></i>  Share</button>
                    <button class="redes3"> <i class="fa-brands fa-google"></i>Google  </button>
                    <button class="redes4"> <i class="fa-brands fa-twitter"></i>Tweet</button>
                </div>
                <h3>El costo estimado de tu app es</h3>
                <br><br><br>
                
                <h1 class="valor">${sum} COP</h1>
                <br><br><br>
                <a href="">Editar respuestas</a>
                <h6>En GBP contamos con los mejores desarroladores de apps y webs para tu proyecto.Publica tu proyecto en GBP</h6>
                
                <br><br>
                <div class="content-boton1">
                    <button class="boton1" id="terminar"><strong>Terminar</strong></button>
                </div>
            </div>
            `;

            document.querySelector('#terminar').addEventListener('click', e => {
                e.preventDefault();
                const contenedor = document.querySelector('.contenedor');
                contenedor.innerHTML = `
                    <div class="formulario">
                        <h3>Rellene los datos</h3>
                        <br>
                        <form>
                            <p>Nombre</p>
                            <input type="text" id="nombre">
                            <p>Numero de contacto</p>
                            <input type="number" id="telefono">
                            <p>Correo electronico</p>
                            <input type="email" id="email">
                            <br><br><br>
                            <div class="content-boton1">
                                <button class="boton1" id="data"><strong>Guardar</strong></button>
                            </div>
                        </form>
                    </div>
                `;
            
                const enviar = document.querySelector('#data');
                enviar.addEventListener('click', e => {
                    e.preventDefault();
            
                    let name = document.querySelector('#nombre').value;
                    let number = document.querySelector('#telefono').value;
                    let mail = document.querySelector('#email').value;
            
                    let datos = { name, number, mail,sum};
                    subir(datos)
                        .then(response => {
                            if (response.ok) {
                                alert('Informacion enviada correctamente');
                            } else {
                                alert('Hubo un error al enviar la información. Por favor, inténtalo de nuevo.');
                            }
                        })
                        .catch(error => {
                            console.error('Error al enviar los datos:', error);
                            alert('Hubo un error al enviar la información. Por favor, inténtalo de nuevo.');
                        });
                });
            });
    })
        })
    })
            })

    })
        })
    })
        
        });

    })

        })
    })
            
