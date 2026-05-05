"use client";

import styles from "./modal-add-orden.module.css";

interface ModalAddOrdenTrabajoProps {
  onClose: () => void;
}

export default function ModalAddOrdenTrabajo({ onClose }: ModalAddOrdenTrabajoProps) {
  const handleSave = () => {
    // Aquí iría la lógica para guardar
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.xButton} onClick={onClose}>✕</button>
        
        {/* Fila 1 de inputs */}
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label>N.º orden</label>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <label>Num de contrato</label>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <label>Area usuaria</label>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <label>Equipo</label>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <label>Fecha de creación</label>
            <input type="date" />
          </div>
        </div>

        {/* Fila 2 de inputs */}
        <div className={styles.formGridRow2}>
          <div className={styles.field}>
            <label>Tipo de mantenimiento</label>
            <select>
              <option value=""></option>
              <option value="preventivo">Preventivo</option>
              <option value="correctivo">Correctivo</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Presupuesto</label>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <label>UM</label>
            <input type="text" />
          </div>
        </div>

        {/* Fila 3: Descripción */}
        <div className={styles.field}>
          <label>Descripción</label>
          <textarea></textarea>
        </div>

        {/* Footer con botones */}
        <div className={styles.footer}>
          <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
          <button className={styles.saveButton} onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}
