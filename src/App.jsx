import {useState, useEffect} from 'react'
import Header from "./componenets/Header"
import Formulario from "./componenets/Formulario"
import ListadoPacientes from "./componenets/ListadoPacientes"


function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect(()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //Si esta vacio arreglo // LS es string json.parse volverlo arreglo
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
