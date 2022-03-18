import React, { useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const yearRef = useRef(year);

  //   const [nombreMarca] = MARCAS.filter((m) => m.id === Number(marca));
  const [nombrePlan] = PLANES.filter((p) => p.id === Number(plan));

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca && nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan && nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotizacion: </span>
        {resultado && resultado}
      </p>
    </div>
  );
};

export default Resultado;
