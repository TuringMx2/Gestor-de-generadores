"use client";

import styles from "./conceptos.module.css";

export default function ConceptosView() {
  const headers = [
    "Descripcion",
    "Número de parte",
    "U. M",
    "Equipo",
    "Contrato",
    "Costo adquisición",
    "Moneda",
    "Costo anexo",
    "Porcentaje",
    "Tipo de refacción",
    "" // Columna vacía adicional
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchBox}>
          <input type="text" />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={row}>
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
                  <div className={styles.refaccionType}>
                    <span className={styles.typeOption}>Oficial</span>
                    <span className={styles.typeDivider}>/</span>
                    <span className={styles.typeOption}>No oficial</span>
                  </div>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
