"use client";

import { useState } from "react";
import styles from "./nuevo-generador.module.css";
import ModalAddItem from "./ModalAddItem";
import ResumenCompra from "./ResumenCompra";

interface NuevoGeneradorViewProps {
  onBack: () => void;
}

export default function NuevoGeneradorView({ onBack }: NuevoGeneradorViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasIva, setHasIva] = useState(true);
  
  // Valores mock para el subtotal
  const mockSubtotal = 12500.50;

  const headers = [
    "Refacción",
    "No. Parte",
    "Cant.",
    "PU",
    "SUB",
    "Equipo",
    "Sitio/Pozo",
    "Color",
    "Status",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <button className={styles.backButton} onClick={onBack}>
          ← Volver a Generadores
        </button>
      </div>

      <h1 className={styles.title}>Nuevo generador</h1>

      <div className={styles.formHeader}>
        <div className={styles.field}>
          <label htmlFor="folio">Folio generador</label>
          <input type="text" id="folio" />
        </div>
        <div className={styles.field}>
          <label htmlFor="fecha">Fecha de creación</label>
          <input type="date" id="fecha" />
        </div>
        <div className={styles.field}>
          <label htmlFor="contrato">Contrato</label>
          <input type="text" id="contrato" />
        </div>
        <div className={styles.field}>
          <label htmlFor="orden">N° orden</label>
          <input type="text" id="orden" />
        </div>
      </div>

      <div className={styles.tableSection}>
        <div className={styles.tableHeaderActions}>
          <button 
            className={styles.addButton} 
            title="Agregar item"
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
            <tr>
              {headers.map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              {headers.map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={styles.sectionTitle}>Partidas de cobro</h2>
      <div className={styles.tableSection}>
        <div className={styles.tableHeaderActions}>
          <button 
            className={styles.addButton} 
            title="Agregar partida"
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
             <tr>
               {headers.map((_, index) => (
                 <td key={index}></td>
               ))}
             </tr>
             <tr>
               {headers.map((_, index) => (
                 <td key={index}></td>
               ))}
             </tr>
          </tbody>
        </table>
      </div>

      {/* Nueva sección de resumen */}
      <ResumenCompra 
        subtotal={mockSubtotal}
        hasIva={hasIva}
        onIvaToggle={setHasIva}
      />

      {isModalOpen && (
        <ModalAddItem onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
