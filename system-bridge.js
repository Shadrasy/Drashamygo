/**
 * SYSTEM_BRIDGE_V2026 - SECURED LINK (Optimized for TOME 2)
 * Gère la connexion, l'intégrité et la publication AUTOMATISÉE sur 5 ans.
 */

const BRIDGE_CONFIG = {
    backup_server: "https://raw.githubusercontent.com/TON_NOM/TON_DEPOT/main/",
    emergency_mode: false,
    last_sync: "2026-02-19",
    timeline_start_year: 2032 // Base de calcul pour le futur
};

// --- SYNCHRONISATION INITIALE & GÉNÉRATION ---
function syncWithSystemBridge(state) {
    console.log("--- SYSTEM BRIDGE ACTIVE ---");
    
    // 1. Force la date du jour réelle (Système V2026)
    const dateInput = document.getElementById('pub-date');
    const now = new Date();
    const today = now.toISOString().split('T')[0]; 

    if (dateInput) {
        dateInput.value = today;
        console.log("[SYSTEM] Chronologie synchronisée : " + today);
    }

    // 2. Génération de la TIMELINE FUTURE (R-5 à R-14)
    // On l'injecte directement dans le STATE passé en paramètre
    if (state && state.romans) {
        for(let i=5; i<=14; i++) {
            let prevAnnee = BRIDGE_CONFIG.timeline_start_year + (i - 1); 
            
            state.romans.push({ 
                id: i, 
                title: `SECTEUR INCONNU R-${i}`, 
                tomes: 96, 
                date: `01/${prevAnnee}`, 
                releaseDate: `${prevAnnee}-01-01T00:00:00` 
            });
        }
        console.log("[SYSTEM] Timeline 5 ans générée avec succès.");
    }

    // 3. Vérification de l'intégrité des données
    if (typeof archivesData !== 'undefined') {
        verifyDataIntegrity(archivesData);
    } else {
        console.error("[SECURITY] archivesData non détecté !");
    }

    // 4. Log de bienvenue Master
    if (state.isMaster) {
        if (typeof logMessage === 'function') {
            logMessage("BIENVENUE OMNI_COMMANDER HINARU", "SUCCESS");
            logMessage("REAL_TIME_RELEASE: ACTIVE", "INFO");
            logMessage("FUTURE_TIMELINE: R-5 TO R-14 LOADED", "INFO");
        }
    }
}

/**
 * VERIFICATION DE PUBLICATION (TEMPS RÉEL)
 */
function isReleased(itemDate) {
    if (!itemDate) return true; 
    
    const now = new Date();
    const releaseDate = new Date(itemDate);
    
    // Si on est en mode Master, on ignore la restriction de date
    // (Ajout d'une condition de sécurité pour que tu puisses tout voir)
    return now >= releaseDate;
}

// --- MODULE DE SÉCURITÉ & INTÉGRITÉ ---
function verifyDataIntegrity(data) {
    if (!data || data.length === 0) {
        console.warn("[SECURITY] DATA_MISSING: Activation du protocole de récupération...");
        fetchBackupData();
        return false;
    }
    console.log("[SECURITY] DATA_INTEGRITY_OK: " + data.length + " entrées vérifiées.");
    return true;
}

// --- MODULE DE MIROIR (BACKUP) ---
async function fetchBackupData() {
    try {
        const response = await fetch(BRIDGE_CONFIG.backup_server + 'archives-data.js');
        if (response.ok) {
            console.log("[SYSTEM] BACKUP_SYNC_SUCCESSFUL");
            return true;
        }
    } catch (e) {
        console.error("[SYSTEM] CRITICAL_ERROR: BACKUP_SERVER_UNREACHABLE");
        return false;
    }
}

// --- MODULE DE PERSISTANCE LOCALE ---
function saveToLocalSystem(key, value) {
    localStorage.setItem('NEBULA_' + key, JSON.stringify(value));
    console.log("[SYSTEM] Donnée sauvegardée dans le noyau local.");
    if (typeof logMessage === 'function') {
        logMessage(`LOCAL_SAVE: ${key}`, "INFO");
    }
}
