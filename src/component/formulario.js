import { Fragment, useState } from "react";
import Particles from 'react-particles-js'
import PropTypes from 'prop-types'; // importando  PropTypes para documentar nuestos componenetes 
import Swal  from 'sweetalert2';
import {v4 as uuidv4} from 'uuid';; // importando uuid que nos funciona para colocar id automaticamente 


const Formulario = ({Crearcitas}) => { // pasando via props la funcion  de Crearcitas 

   
    // Creando  State o objeto  de Citas
    const [cita, actualizarCita] = useState({  // actualizarCita : funcion que nos permite reescribir lo que hay en state 
        Paciente: '',
        FamiliarPaciente: '',
        fecha: '',
        hora: '',
        sintomas: '',
        notasMedicas: ''
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita, // obteniendo una copia del state con spread operator
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const {  Paciente, FamiliarPaciente, fecha, hora, sintomas,  notasMedicas } = cita;



    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar / con trim: eliminos los espacios en blancos que coloque el usuario



        if( Paciente.trim() === '' || FamiliarPaciente.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ||notasMedicas.trim() === ''){
            

            actualizarError(true); // si hay un error lo pasamos en true



            return;
        }



        // Eliminar el mensaje previo o si ya pasa la validaciobn 
        actualizarError(false);

        // Asignar un ID
        cita.id = uuidv4(); // colocando el arreglo de objeto del state seguido de .id y le pasamos uuid

        //console.log(citas);

         // Crear la cita
         Crearcitas(cita); // funcion que se esta pasando desde app.js y se pasa en este componente via props Y SE LE PASA LAS CITAS O SE LE PASA EL ARREGLO DE OBJETO DE CITAS

    
        Swal.fire(
            
            'Correcto',
            'El Paciente se ha añadido correctamente '

          )


        
        // Reiniciar el form
        actualizarCita({
            Paciente: '',
            FamiliarPaciente: '',
            fecha: '',
            hora: '',
            sintomas: '',
            notasMedicas: ''

        })
    }








    return ( 
        <Fragment>
{/* 
            <Particles 
            


              /> */}
      
        <h2>Crear consulta</h2>

        { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }

        <form
            onSubmit={submitCita}
        >
            <label>Nombre</label>
            <input 
                type="text"
                name="Paciente"
                className="u-full-width"
                placeholder="Nombre Paciente"
                onChange={actualizarState}
                value={Paciente}
            />

            <label>Apellido</label>
            <input 
                type="text"
                name="FamiliarPaciente"
                className="u-full-width"
                placeholder="Familiar o tutor responsable del paciente"
                onChange={actualizarState}
                value={FamiliarPaciente}
            />

            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />

            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />

            <label>Síntomas</label>

            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
            ></textarea>

             <label>Notas Médicas</label>
                <textarea
                className="u-full-width"
                name="notasMedicas"
                onChange={actualizarState}
                value={notasMedicas}
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>
        </form>
    </Fragment>


     );
}

Formulario.propTypes = {

    Crearcitas: PropTypes.func.isRequired // documentando que en este componenete de formulario 
    // tenemos una funcion y que es obligatorio
  
  
  }
  
 
export default Formulario;