import React from 'react';
import PropTypes from 'prop-types'; // importando  PropTypes para documentar nuestos componenetes 



const Cita  = ({cita , deleteCitas}) => {

    const { Paciente , FamiliarPaciente , fecha , hora, sintomas,notasMedicas} = cita;

    return ( 



        <div className="cita">

        <p>Paciente:<span>{Paciente}</span></p>
        <p>Tutor o responsable:<span>{FamiliarPaciente}</span></p>
        <p>Fecha:<span>{fecha}</span></p>
        <p>Hora:<span>{hora}</span></p>
        <p>Sintomas:<span>{sintomas}</span></p>
        <p>Observaciones Dr:<span>{notasMedicas}</span></p>
      

        <button 
        
        className="button eliminar u-full-width"
        // onClick={deleteCitas()} // si lo coloco de esta manera va a mandar a llamar a la funciuon por lo tanto 
        // tiene que ser con un arrow function para que espere a que suceda ese onclick 
        
        onClick={ () => deleteCitas (cita.id) } // pasandoole el id de la cita para eliminar 
        
        >Eliminar &times;</button>
    
    
    
        </div>

     );
}

Cita.propTypes = {

    cita: PropTypes.object.isRequired,
    
    deleteCitas : PropTypes.func.isRequired


  
  
  }
  
 
export default Cita ;