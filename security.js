// --- MUR 2 : DÉTECTEUR D'INTRUSION (ANTI-DEVTOOLS) ---
document.addEventListener('contextmenu', e => e.preventDefault()); // Bloque le clic droit

document.onkeydown = function(e) {
    // Bloque F12, Ctrl+Maj+I, Ctrl+Maj+J, Ctrl+U
    if(e.keyCode == 123 || 
      (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
      (e.ctrlKey && e.keyCode == 85)) {
        alert("ALERTE : TENTATIVE D'ACCÈS NON AUTORISÉE. PROTOCOLE DE DÉCONNEXION.");
        window.location.href = "about:blank"; 
        return false;
    }
};

// --- MUR 5 : LIMITEUR DE FRÉQUENCE (RATE LIMIT) ---
let lastTransmission = 0;
function checkSignalFrequency() {
    const now = Date.now();
    if (now - lastTransmission < 2000) { // Bloque si moins de 2 secondes entre les clics
        alert("ERREUR : FRÉQUENCE DE SIGNAL TROP ÉLEVÉE. ATTENDEZ.");
        return false;
    }
    lastTransmission = now;
    return true;
}

// --- MUR 10 : AUTODESTRUCTION DE SESSION ---
function securityWipe() {
    let alerts = sessionStorage.getItem('security_alerts') || 0;
    alerts++;
    sessionStorage.setItem('security_alerts', alerts);
    
    if (alerts > 3) {
        localStorage.clear(); // Efface tes accès Admin
        alert("SYSTÈME COMPROMIS : RÉINITIALISATION DES ARCHIVES.");
        window.location.reload();
    }
}
