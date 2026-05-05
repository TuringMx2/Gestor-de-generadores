"use client";

import { useState } from "react";
import styles from "./orden-trabajo.module.css";
import ModalAddOrdenTrabajo from "./ModalAddOrdenTrabajo";

export default function OrdenTrabajoView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const headers = [
    "Descripción",
    "Monto",
    "Tipo de mant.",
    "Equipo",
    "Area usuaria",
    "Numero de contrato",
    "Cantidad",
    "Fecha de creación",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar" />
        </div>
      </div>

      <div className={styles.tableSection}>
        <div className={styles.tableHeaderActions}>
          <button 
            className={styles.addButton} 
            title="Agregar orden"
            onClick={() => setIsModalOpen(true)}
          >
            +
          </button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((row) => (
              <tr key={row}>
                {headers.map((_, index) => (
                  <td key={index}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <ModalAddOrdenTrabajo onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
