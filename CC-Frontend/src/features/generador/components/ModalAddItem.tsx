"use client";

import { useState } from "react";
import styles from "./modal-add-item.module.css";

interface ModalAddItemProps {
  onClose: () => void;
}

export default function ModalAddItem({ onClose }: ModalAddItemProps) {
  // Estado local para manejar las cantidades de las filas de ejemplo
  const [quantities, setQuantities] = useState<number[]>([0, 0, 0, 0]);

  const updateQty = (index: number, delta: number) => {
    setQuantities(prev => {
      const newQtys = [...prev];
      newQtys[index] = Math.max(0, newQtys[index] + delta);
      return newQtys;
    });
  };

  const headers = [
    "Descripcion",
    "Equipo",
    "Ensamble",
    "Costo",
    "Cantidad",
    "" // Columna para los botones +/-
  ];

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.header}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Buscar" />
          </div>
          <button className={styles.addButton}>Agregar</button>
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
                  <td style={{ textAlign: 'center' }}>{qty > 0 ? qty : ""}</td>
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
