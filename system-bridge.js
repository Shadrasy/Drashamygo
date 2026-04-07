/**
* SYSTEM_BRIDGE_V2026 - SECURED LINK (Optimized for TOME 2)
* Gère la connexion, l'intégrité, la publication AUTOMATISÉE sur 5 ans, le QR Fantôme et le Chat Secret.
*/
// --- CONFIGURATION DU PONT ---
const BRIDGE_CONFIG = {
    backup_server: "https://raw.githubusercontent.com/TON_NOM/TON_DEPOT/main/",
    emergency_mode: false,
    last_sync: "2026-02-19",
    timeline_start_year: 2032 // Base de calcul pour le futur
};

// --- CONFIGURATION ET ÉTAT DU SYSTÈME ---
const urlParams = new URLSearchParams(window.location.search);
const STATE = {
    isMaster: urlParams.get('Hinaru') === 'true',
    isGuest: urlParams.get('access') === 'GUEST_IMMERSION' || urlParams.get('access') === 'SECRET_CHANNEL',
    hasChat: urlParams.get('access') === 'SECRET_CHANNEL',
    projet: parseInt(urlParams.get('projet')) || 1,
    filter: null,
    // On initialise les 4 premiers avec vos données exactes
    romans: [
        { id: 1, title: "SHADRASY: Le Souffle Originel", tomes: 154, date: "01/2027", releaseDate: "2027-01-01T00:00:00" },
        { id: 2, title: "LA GUILDE DE L'AUBE", tomes: 96, date: "02/2032", releaseDate: "2032-02-01T00:00:00" },
        { id: 3, title: "SECTEUR INCONNU R-3", tomes: 96, date: "03/2034", releaseDate: "2034-03-01T00:00:00" },
        { id: 4, title: "SECTEUR INCONNU R-4", tomes: 96, date: "01/2036", releaseDate: "2036-01-01T00:00:00" }
    ]
};

// --- GÉNÉRATION AUTOMATIQUE DES SECTEURS R-5 À R-14 ---
for(let i=5; i<=14; i++) {
    let prevAnnee = BRIDGE_CONFIG.timeline_start_year + (i - 1);
    STATE.romans.push({
        id: i,
        title: `SECTEUR INCONNU R-${i}`,
        tomes: 96,
        date: `01/${prevAnnee}`,
        releaseDate: `${prevAnnee}-01-01T00:00:00`
    });
}

// --- INITIALISATION AU CHARGEMENT ---
window.addEventListener('DOMContentLoaded', () => {
    syncWithSystemBridge(STATE);
    setupSecretTrigger();  // Active les 4 clics sur l'horloge (Master & QR Code Fantôme)
    setupGalaxyTrigger();  // Active les 4 clics sur l'anomalie galactique
});

// --- SYNCHRONISATION INITIALE & GÉNÉRATION ---
function syncWithSystemBridge(state) {
    console.log("--- SYSTEM BRIDGE ACTIVE ---");
    const dateInput = document.getElementById('pub-date');
    const now = new Date();
    const today = now.toISOString().split('T');
    if (dateInput) {
        dateInput.value = today;
        console.log("[SYSTEM] Chronologie synchronisée : " + today);
    }
    if (state && state.romans) {
        console.log("[SYSTEM] Timeline 5 ans générée avec succès.");
    }
    
    if (typeof archivesData !== 'undefined') {
        verifyDataIntegrity(archivesData);
    } else {
        console.error("[SECURITY] archivesData non détecté !");
    }
    
    if (state.isMaster) {
        if (typeof logMessage === 'function') {
            logMessage("BIENVENUE OMNI_COMMANDER HINARU", "SUCCESS");
            logMessage("REAL_TIME_RELEASE: ACTIVE", "INFO");
            logMessage("FUTURE_TIMELINE: R-5 TO R-14 LOADED", "INFO");
        }
    }
    
    if (state.isGuest) {
        if (typeof logMessage === 'function') logMessage("ACCÈS_INVITÉ: MODE_IMMERSION_ACTIF", "INFO");
        const statusTag = document.getElementById('status-tag');
        if (statusTag) { statusTag.innerText = "GUEST_IMMERSION"; statusTag.style.color = "var(--cosplay-gold)"; }
    }
    if (state.hasChat) {
        unlockSecretChat();
    }
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

// --- SYSTÈME DES 4 CLICS (DÉCLENCHEUR CACHÉ & QR CODE FANTÔME) ---
let secretClickCount = 0;
let clickTimer;

function setupSecretTrigger() {
    const trigger = document.getElementById('hidden-trigger');
    if (trigger) {
        trigger.addEventListener('click', () => {
            secretClickCount++;
            
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => { secretClickCount = 0; }, 800);
            
            if (secretClickCount === 4) {
                genererAccesPriveHinaru(); 
                
                STATE.isMaster = !STATE.isMaster;
                if (typeof logMessage === 'function') {
                    logMessage(STATE.isMaster ? "ACCÈS OMNI_COMMANDER ACTIVÉ" : "MODE PROTÉGÉ RÉACTIVÉ", "WARNING");
                } else {
                    alert(STATE.isMaster ? "ACCÈS OMNI_COMMANDER ACTIVÉ" : "MODE PROTÉGÉ RÉACTIVÉ");
                }
                
                secretClickCount = 0; 
            }
        });
    }
}

// --- GÉNÉRATION DU QR CODE PRIVÉ (TOTALEMENT CACHÉ) ---
function genererAccesPriveHinaru() {
    if(document.getElementById("omni-private-portal")) return; 

    let alertBox = document.createElement('div');
    alertBox.id = "omni-private-portal";
    alertBox.style = `
        position:fixed; top:50%; left:50%; transform:translate(-50%, -50%);
        background:#000; border:2px solid #ff0033; padding:20px; z-index:1000000;
        text-align:center; box-shadow: 0 0 50px #600; font-family:monospace;
    `;
    
    alertBox.innerHTML = `
        <p style="color:#ff0033; font-size:10px; font-weight:bold;">[ PORTAIL PRIVÉ GÉNÉRÉ ]</p>
        <div id="qr-prive-space" style="background:white; padding:10px; margin:10px 0;"></div>
        <p style="color:#888; font-size:8px;">Scannez pour ouvrir la discussion privée.</p>
        <button onclick="this.parentElement.remove()" style="background:transparent; color:#ff0033; border:1px solid #ff0033; cursor:pointer; font-size:9px; padding: 5px 10px; margin-top:5px;">[ FERMER ]</button>
    `;
    
    document.body.appendChild(alertBox);

    const lienSecret = "https://shadrasy.github.io/Drashamygo/index.html?access=SECRET_CHANNEL";

    if (typeof QRCode !== 'undefined') {
        new QRCode(document.getElementById("qr-prive-space"), {
            text: lienSecret,
            width: 160, height: 160,
            colorDark : "#000000",
            colorLight : "#ffffff"
        });
    } else {
        document.getElementById("qr-prive-space").innerHTML = "<p style='color:red; font-size:8px;'>ERREUR: SIGNAL QR INTROUVABLE</p>";
    }
    
    if(typeof playTerminalBeep === 'function') playTerminalBeep();
}

// --- SYSTÈME DES 4 CLICS (CHAT GALACTIQUE) ---
function setupGalaxyTrigger() {
    const anomaly = document.getElementById('galaxy-anomaly');
    if (anomaly) {
        let anomalyClicks = 0;
        anomaly.addEventListener('click', () => {
            anomalyClicks++;
            setTimeout(() => { anomalyClicks = 0; }, 1000);
            if (anomalyClicks === 4) { unlockSecretChat(); anomalyClicks = 0; }
        });
    }
}

// --- MODULE DE CHAT PRIVÉ (AMÉLIORÉ AVEC PSEUDO FORCÉ ET INDICATEUR DE FRAPPE) ---
function unlockSecretChat() {
    if (document.getElementById('secret-terminal')) {
        document.getElementById('secret-terminal').style.display = 'flex';
        return;
    }
    
    let userID = localStorage.getItem('NEBULA_USER_ID');
    
    // Si pas de pseudo, ou si le système lui avait donné un ancien nom "USER-"
    if (!userID || userID.startsWith('USER-')) {
        let pseudoChoisi = prompt("SYSTÈME OMNI :\\nEntrez votre Pseudo pour rejoindre le canal privé de Maître Hinaru :");
        
        if (!pseudoChoisi || pseudoChoisi.trim() === "") {
            userID = 'ANONYME-' + Math.floor(Math.random() * 1000);
        } else {
            userID = pseudoChoisi.trim().toUpperCase(); 
        }
        localStorage.setItem('NEBULA_USER_ID', userID);
    }
    
    const chatUI = document.createElement('div');
    chatUI.id = "secret-terminal";
    chatUI.innerHTML = `
    <div style="position:fixed; bottom:2%; left:50%; transform:translateX(-50%);
        width:92%; max-width:450px; height:55vh; min-height:350px;
        background: linear-gradient(135deg, rgba(5, 10, 35, 0.95) 0%, rgba(20, 0, 10, 0.98) 100%);
        border:2px solid var(--bordeaux); z-index:30000; display:flex; flex-direction:column;
        padding:15px; box-shadow: 0 0 25px rgba(102, 0, 17, 0.8); border-radius: 8px;
        font-family: 'Courier New', monospace; animation: bootUp 0.4s ease-out; box-sizing: border-box;">
        
        <div style="color:var(--rouge-vif, #ff0033); font-size:14px; border-bottom:1px solid var(--bordeaux);
        padding-bottom:10px; margin-bottom:10px; display: flex; justify-content: space-between; align-items: center; font-weight: bold;">
            <span>[ CANAL PRIVÉ : ${userID} ]</span>
            <span style="cursor:pointer; color:var(--bordeaux); font-size:20px; padding: 0 5px;"
            onclick="document.getElementById('secret-terminal').style.display='none'">[X]</span>
        </div>
        
        <div id="chat-messages" style="flex-grow:1; overflow-y:auto; font-size:13px; color:#d4d4dc; margin-bottom:5px; line-height: 1.5; padding-right: 5px;">
            <p style="color: #ff3366; font-style: italic;">> Connexion à l'Astre établie... En attente de transmission.</p>
        </div>
        
        <div id="typing-indicator" style="font-size:10px; color:#ffcc00; font-style:italic; min-height:15px; margin-bottom:5px; opacity:0; transition:0.3s;">
            Système en attente...
        </div>
        
        <input type="text" id="chat-input" placeholder="Écrivez votre message ici..."
        style="background:rgba(0, 5, 20, 0.8); border:1px solid var(--bordeaux); color:#4da6ff;
        padding:15px; font-size:14px; outline:none; font-family: 'Courier New', monospace;
        border-radius: 4px; width: 100%; box-sizing: border-box;">
    </div>
    <style>
        @keyframes bootUp {
            from { opacity: 0; transform: translate(-50%, 30px) scale(0.95); }
            to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        #chat-messages::-webkit-scrollbar { width: 4px; }
        #chat-messages::-webkit-scrollbar-thumb { background: var(--bordeaux); border-radius: 4px; }
    </style>
    `;
    document.body.appendChild(chatUI);
    
    const inputField = document.getElementById('chat-input');
    const typingIndicator = document.getElementById('typing-indicator');
    let typingTimer;

    // Affiche l'indicateur quand on tape
    inputField.addEventListener('input', () => {
        typingIndicator.style.opacity = '1';
        typingIndicator.innerText = "> " + userID + " écrit un signal...";
        
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            typingIndicator.style.opacity = '0';
        }, 1500);
    });

    // Envoi du message
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const container = document.getElementById('chat-messages');
            const message = this.value.trim();
            
            container.innerHTML += `<p style="color:#4da6ff; margin: 8px 0;"><strong>[${userID}]:</strong> ${message}</p>`;
            
            if(typeof playTerminalBeep === 'function') playTerminalBeep();
            
            this.value = '';
            typingIndicator.style.opacity = '0'; 
            container.scrollTop = container.scrollHeight;
        }
    });
}

// --- UTILITAIRES ---
function isReleased(itemDate) {
    if (!itemDate) return true;
    if (typeof STATE !== 'undefined' && STATE.isMaster) return true;
    const now = new Date();
    const releaseDate = new Date(itemDate);
    return now >= releaseDate;
}

function logMessage(msg, type) {
    console.log(`[${type}] ${msg}`);
    const output = document.getElementById('console-output');
    if (output) output.innerHTML += `> ${msg}<br>`;
}
