"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";
import ConceptosView from "@/features/conceptos/components/ConceptosView";
import NuevoGeneradorView from "@/features/generador/components/NuevoGeneradorView";
import GeneradoresView from "@/features/generadores/components/GeneradoresView";
import OrdenTrabajoView from "@/features/orden-compra-servicio/components/OrdenTrabajoView";
import { 
  IconDashboard, 
  IconGeneradores, 
  IconGenerador, 
  IconOrden, 
  IconCobro, 
  IconConceptos 
} from "@/shared/component/icons/SidebarIcons";

type ActiveView =
  | "dashboard"
  | "generadores"
  | "nuevo-generador"
  | "orden-compra-servicio"
  | "generador"
  | "partidas-cobro"
  | "conceptos";

export default function DashboardPage() {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  const handleLogout = () => {
    router.push("/login");
  };

  const navItems: { name: string; icon: React.ReactNode; id: ActiveView }[] = [
    { id: "generadores", name: "Generadores", icon: <IconGeneradores className={styles.navIcon} /> },
    { id: "generador", name: "Generador", icon: <IconGenerador className={styles.navIcon} /> },
    { id: "orden-compra-servicio", name: "Orden de compra/servicio", icon: <IconOrden className={styles.navIcon} /> },
    { id: "partidas-cobro", name: "Partidas de cobro", icon: <IconCobro className={styles.navIcon} /> },
    { id: "conceptos", name: "Conceptos", icon: <IconConceptos className={styles.navIcon} /> },
  ];

  const renderContent = () => {
    switch (activeView) {
      case "generadores":
        return <GeneradoresView onAddNew={() => setActiveView("nuevo-generador")} />;
      case "nuevo-generador":
      case "generador":
        return <NuevoGeneradorView onBack={() => setActiveView("generadores")} />;
      case "orden-compra-servicio":
        return <OrdenTrabajoView />;
      case "conceptos":
        return <ConceptosView />;
      default:
        return (
          <div className={styles.constructionCard}>
            <p className={styles.constructionText}>Página en construcción</p>
            <p className={styles.constructionSubtext}>Estamos trabajando en esta sección para ofrecerte la mejor experiencia SaaS.</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div 
          className={styles.sidebarHeader} 
          onClick={() => setActiveView("dashboard")}
          style={{ cursor: "pointer" }}
        >
          <IconDashboard className={styles.logoIcon} />
          <h2 className={styles.sidebarTitle}>Centro de gestión</h2>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.navItem} ${
                activeView === item.id || 
                (activeView === "nuevo-generador" && item.id === "generadores") ||
                (activeView === "generador" && item.id === "generador")
                  ? styles.activeNavItem 
                  : ""
              }`}
              onClick={() => setActiveView(item.id)}
            >
              <span className={styles.navIconWrapper}>{item.icon}</span>
              <span className={styles.navText}>{item.name}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Topbar */}
      <header className={styles.topbar}>
        <div className={styles.profileContainer}>
          <div 
            className={styles.avatar} 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            title="Perfil de usuario"
          >
            U
          </div>
          
          {isProfileOpen && (
            <div className={styles.dropdown}>
              <div 
                className={styles.dropdownItem} 
                onClick={handleLogout}
              >
                Cerrar sesión
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.content}>
        {renderContent()}
      </main>
    </div>
  );
}
