// --- MODULE DE CHAT PRIVÉ (AMÉLIORÉ POUR MOBILE & THÈME GALAXIE) ---
function unlockSecretChat() {
    // Si la fenêtre existe déjà, on la réaffiche simplement
    if (document.getElementById('secret-terminal')) {
        document.getElementById('secret-terminal').style.display = 'flex';
        return;
    }
    
    // Génération de l'ID utilisateur
    let userID = localStorage.getItem('NEBULA_USER_ID') || 'USER-' + Math.floor(Date.now() / 1000);
    localStorage.setItem('NEBULA_USER_ID', userID);
    
    const chatUI = document.createElement('div');
    chatUI.id = "secret-terminal";
    
    // NOUVEAU DESIGN : Bleu foncé galactique, bordures rouges, tailles responsives (mobile)
    chatUI.innerHTML = `
    <div style="position:fixed; bottom:2%; left:50%; transform:translateX(-50%); 
    width:92%; max-width:450px; height:55vh; min-height:350px;
    background: linear-gradient(135deg, rgba(5, 10, 35, 0.95) 0%, rgba(20, 0, 10, 0.98) 100%); 
    border:2px solid var(--bordeaux); z-index:30000; display:flex; flex-direction:column; 
    padding:15px; box-shadow: 0 0 25px rgba(102, 0, 17, 0.8); border-radius: 8px; 
    font-family: 'Courier New', monospace; animation: bootUp 0.4s ease-out; box-sizing: border-box;">
        
        <!-- En-tête du Chat -->
        <div style="color:var(--rouge-vif, #ff0033); font-size:14px; border-bottom:1px solid var(--bordeaux); 
        padding-bottom:10px; margin-bottom:10px; display: flex; justify-content: space-between; align-items: center; font-weight: bold;">
            <span>[ CANAL PRIVÉ : ${userID} ]</span>
            <span style="cursor:pointer; color:var(--bordeaux); font-size:20px; padding: 0 5px;" 
            onclick="document.getElementById('secret-terminal').style.display='none'">[X]</span>
        </div>
        
        <!-- Zone des messages (Textes plus gros pour téléphone) -->
        <div id="chat-messages" style="flex-grow:1; overflow-y:auto; font-size:13px; color:#d4d4dc; margin-bottom:15px; line-height: 1.5; padding-right: 5px;">
            <p style="color: #ff3366; font-style: italic;">> Connexion à l'Astre établie... En attente de transmission.</p>
        </div>
        
        <!-- Zone de saisie (Plus large pour faciliter l'écriture au doigt) -->
        <input type="text" id="chat-input" placeholder="Écrivez votre message ici..."
        style="background:rgba(0, 5, 20, 0.8); border:1px solid var(--bordeaux); color:#4da6ff; 
        padding:15px; font-size:14px; outline:none; font-family: 'Courier New', monospace; 
        border-radius: 4px; width: 100%; box-sizing: border-box;">
    </div>
    
    <style>
        /* Animation d'apparition adaptée au centrage mobile */
        @keyframes bootUp { 
            from { opacity: 0; transform: translate(-50%, 30px) scale(0.95); } 
            to { opacity: 1; transform: translate(-50%, 0) scale(1); } 
        }
        /* Design de la barre de défilement (Scrollbar) */
        #chat-messages::-webkit-scrollbar { width: 4px; }
        #chat-messages::-webkit-scrollbar-thumb { background: var(--bordeaux); border-radius: 4px; }
    </style>
    `;
    
    document.body.appendChild(chatUI);
    
    // Gestion de l'envoi des messages
    document.getElementById('chat-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const container = document.getElementById('chat-messages');
            const message = this.value.trim();
            
            // L'utilisateur écrit en Bleu galactique clair, et non plus en jaune/or
            container.innerHTML += `<p style="color:#4da6ff; margin: 8px 0;"><strong>[${userID}]:</strong> ${message}</p>`;
            
            // Optionnel : Joue le bip du terminal (si la fonction est sur la page)
            if(typeof playTerminalBeep === 'function') playTerminalBeep();
            
            this.value = '';
            container.scrollTop = container.scrollHeight;
        }
    });
}
