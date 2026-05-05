"use client";

import styles from "./generadores.module.css";

interface GeneradoresViewProps {
  onAddNew: () => void;
}

export default function GeneradoresView({ onAddNew }: GeneradoresViewProps) {
  const headers = [
    "Folio",
    "Usuario",
    "Cantidad items",
    "Monto $",
    "SUB",
    "Equipo",
    "Sitio/Pozo",
    "Folio Almacén",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar" />
        </div>
        <button 
          className={styles.addButton} 
          title="Agregar Generador"
          onClick={onAddNew}
        >
          +
        </button>
      </div>

      <div className={styles.tableContainer}>
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
              <td colSpan={headers.length} className={styles.emptyRow}>
                No hay generadores registrados
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
