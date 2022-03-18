import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  formatearDinero,
  obtenerDiferencaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    //  Una base
    let resultado = 2000;

    // obtener diferencia de años
    const diferencia = obtenerDiferencaYear(datos.year);

    // hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    // americano 15%
    // europeo 30%
    // asiatico 5%
    resultado *= calcularMarca(datos.marca);

    // basico  20%
    // completo 50%
    resultado *= calcularPlan(datos.plan);

    // formatear dinero
    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        cotizarSeguro,
        handleChangeDatos,
        datos,
        setError,
        error,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
