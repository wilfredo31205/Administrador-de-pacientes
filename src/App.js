import React, { useState , useEffect } from "react";
import Formulario from "./component/formulario";
import Cita from "./component/Cita"; // importando el componenete de cita donde se desglozan los detalles 
import Particles from 'react-particles-js'
import Swal  from 'sweetalert2';

function App() {


// citas en localstorage, para que se mantengan los datos y no se borren 


  let  citasIniciales = JSON.parse( localStorage.getItem('citas')) // obteniendo el localstorage con getItem y le colocamos en el
  // parentesis el nombre para identificar, en este caso lo nombro citasd 

  // colocamos json.parse porque tenemos un arreglo y convierte ese arreglo dentro de ese string que pueda ser facilmente de manipular

  if(!citasIniciales){ // si no hay citas iniciales 

    citasIniciales = []; // entonces va a hacer o haber  a un arreglo vacio 

  }



  // arreglo de citas 

 // const [citas, guardarCitas] = useState([]) //creando un arreglo vacio de citas, ya  que van a hacer diferentes citas
  
  const [citas, guardarCitas] = useState(citasIniciales) // citas iniciales pasa a ser el valor inicial del usestate

  // utilizando useefect para realizar operaciones cuando el state cambia 

    useEffect(() => {


      if(citasIniciales){

        localStorage.setItem('citas', JSON.stringify(citas))


      }else{

        localStorage.setItem('citas',JSON.stringify([]))

      }
  
    }, [citas]) // para decurle a useefect que se ejecute una vez, siempre le pasamos un arreglo vacio 

    // si le pasamos las citas del state a la dependencia , cada vez que el state de citas cambie , se va a volver a ejectuar el useefect





  // funcion que toma las citas actuales y agrega la nueva 

    const Crearcitas = cita =>{

        console.log(cita);

     


            guardarCitas([

              ...citas, // tomando una copia del state y copiamos la copia de citas o del state  
              // Porque si tenemos una y agregamos otra, la va a eliminar, necesitamos copiar la que haiga
    
    
    
              cita // pasandole las citas 
    
            ])



         



        

      

      }


      // Funcion que elimina las citas


      const deleteCitas = id => {

        console.log(id);

        const nuevaCita = citas.filter(cita=> cita.id !== id) // iterando por todas las citas con filter 
        // o buscando o accedemos a cada cita de manera individual y nos traiga los que sean diferentes al id que estamos accediendo 


        guardarCitas(nuevaCita) // cuando creamos un arreglo nuevo no necesitamos los corchetes ya es un arreglo 
        // y lo guardamos en el arreglo vacio de este state 

        }



        // Mensaje condicional 

        // colocando un mensaje ternario que si no hay citas que nos coloque que no hay pacientes y si hay que diga
        // que administre una cita 
        const TitleMensaje = citas.length === 0 ? 'No hay consultas'  : 'Consultas en espera'

  return (

    <>  


  
    <h1>Dr. Esteban Escarfuller</h1>
    <h2>Ginecologo-Obstetricia</h2>

    

    <div className="container">{/* estas son clases de esqueleton .. puedo centrar mis contenidos con mis propias clases de css */ }

    <div className="row">

      <div className="one-half column">{/* estas son las columnas en esqueleton  */ }

        <Formulario
        
        Crearcitas={Crearcitas} // pasando los props 
        
        />


      </div>

        <div className="one-half column">

 

          <h1>{TitleMensaje}</h1>

          {citas.map(cita => ( // dando por explicito el return con el parentesis , e iteramos el arreglo de citas con .map ya que es un objeto
          // donde trae multiples informaciones }

              <Cita

              
              cita={cita} // pasandole la cita que estoy iterando en el map 



              key={cita.id} // en react cuando listamos  o iteramos , siempre tenemos que pasrle un key 
              // y ese key va a hacer cita.id o el nombre de la iteracion , seguido del id 


              deleteCitas={deleteCitas} // pasando via props la funcion de eliminar cita a este componente de Cita




              /> // creando un componente donde le vamos a pasar el arreglo . o la iteracion que estamos haciendo con map 

      
 
          ))}


        </div>

    </div> 

    </div>


</>



  );
  
}



export default App;
