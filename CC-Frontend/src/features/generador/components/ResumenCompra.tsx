"use client";

import styles from "./resumen-compra.module.css";

interface ResumenCompraProps {
  subtotal: number;
  hasIva: boolean;
  onIvaToggle: (value: boolean) => void;
  partidaCobro?: string;
}

export default function ResumenCompra({ 
  subtotal, 
  hasIva, 
  onIvaToggle, 
  partidaCobro = "P-001 - Mantenimiento Base" 
}: ResumenCompraProps) {
  
  const ivaRate = 0.16;
  const ivaAmount = hasIva ? subtotal * ivaRate : 0;
  const total = subtotal + ivaAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.row}>
          <span className={styles.label}>Subtotal</span>
          <span className={styles.value}>{formatCurrency(subtotal)}</span>
        </div>

        <div className={styles.ivaRow}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className={styles.label}>IVA (16%)</span>
            <span className={styles.value}>{formatCurrency(ivaAmount)}</span>
          </div>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={hasIva} 
              onChange={(e) => onIvaToggle(e.target.checked)} 
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.row}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className={styles.partidaLabel}>Partida de cobro</span>
            <span className={styles.partidaPlaceholder}>{partidaCobro}</span>
          </div>
        </div>

        <div className={`${styles.row} ${styles.totalRow}`}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalValue}>{formatCurrency(total)}</span>
        </div>

        <div className={styles.buttonGroup}>
          <button className={`${styles.actionButton} ${styles.saveBtn}`}>
            Guardar
          </button>
          <button className={`${styles.actionButton} ${styles.deleteBtn}`}>
            Eliminar
          </button>
          <button className={`${styles.actionButton} ${styles.approveBtn}`}>
            Aprobar
          </button>
        </div>
      </div>
    </div>
  );
}
