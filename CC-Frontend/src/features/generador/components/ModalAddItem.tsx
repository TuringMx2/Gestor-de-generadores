"use client";

import { useState } from "react";
import styles from "./modal-add-item.module.css";

interface ModalAddItemProps {
  onClose: () => void;
}

export default function ModalAddItem({ onClose }: ModalAddItemProps) {
  // Estado local para manejar las cantidades y el filtro
  const [quantities, setQuantities] = useState<number[]>([0, 0, 0, 0]);
  const [filter, setFilter] = useState<"todos" | "oficial" | "no-oficial">("todos");

  const updateQty = (index: number, delta: number) => {
    setQuantities(prev => {
      const newQtys = [...prev];
      newQtys[index] = Math.max(0, newQtys[index] + delta);
      return newQtys;
    });
  };

  const headers = [
    "Descripcion",
    "Número de parte",
    "Unidad de medida",
    "Equipo",
    "Contrato",
    "Costo adquisición",
    "Moneda",
    "Costo anexo",
    "Porcentaje",
    "Tipo de refacción",
    "Cantidad",
    "" // Columna para los botones +/-
  ];

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.header}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Buscar concepto..." />
          </div>
          
          <div className={styles.filterContainer}>
            <button 
              className={`${styles.filterBtn} ${filter === "todos" ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter("todos")}
            >
              Todos
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === "oficial" ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter("oficial")}
            >
              Oficial
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === "no-oficial" ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter("no-oficial")}
            >
              No oficial
            </button>
          </div>

          <button className={styles.addButton}>Agregar seleccionados</button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {quantities.map((qty, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span style={{ 
                      color: index % 2 === 0 ? 'var(--accent-neon)' : 'var(--text-muted)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase'
                    }}>
                      {index % 2 === 0 ? 'Oficial' : 'No oficial'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--accent-neon)' }}>
                    {qty > 0 ? qty : ""}
                  </td>
                  <td>
                    <div className={styles.qtyCell}>
                      <button className={styles.qtyBtn} onClick={() => updateQty(index, 1)}>+</button>
                      <button className={styles.qtyBtn} onClick={() => updateQty(index, -1)}>−</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
