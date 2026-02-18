// ==========================================================
// SYSTÈME OMNI - MATRICE DE CANONISATION MULTILINGUE (ROMAN 1)
// Version: 100.9.9 MASTER-CANON (ZÉRO OUBLI - BLINDAGE TOTAL)
// ==========================================================

const OMNI_MASTER_LEXICON = {
    "concepts_fondamentaux": {
        "Shadrasy": { "fr": "Shadrasy", "en-US": "Shadrasy", "ja": "シャドラシー", "ko": "샤드라시", "zh": "沙德拉西", "es": "Shadrasy" },
        "Le Souffle Originel": { "fr": "Le Souffle Originel", "en-US": "The Original Breath", "ja": "根源の息吹", "ko": "근원의 숨결", "zh": "根源之息", "es": "El Aliento Original" },
        "La Source": { "fr": "La Source", "en-US": "The Source", "ja": "源泉 (Gensen)", "ko": "근원", "zh": "源头", "es": "La Fuente" },
        "Univers dans une bouteille": { "fr": "Univers dans une bouteille", "en-US": "Universe in a Bottle", "ja": "ボトルの中の宇宙", "ko": "병 속의 우주", "zh": "瓶中的宇宙", "es": "Universo en una botella" },
        "La Synergie": { "fr": "La Synergie", "en-US": "The Synergy", "ja": "相乗効果", "ko": "시너지", "zh": "协同作用", "es": "La Sinergia" },
        "Bibliothèque Mentale": { "fr": "Bibliothèque Mentale", "en-US": "Mental Library", "ja": "精神の書庫", "ko": "정신 도서관", "zh": "精神图书馆", "es": "Biblioteca Mental" },
        "Show Don't Tell": { "fr": "Show Don't Tell", "en-US": "Show Don't Tell", "ja": "見せて、語らない", "ko": "보여주되 말하지 말라", "zh": "展示而不叙述", "es": "Mostrar no contar" }
    },
    "systeme_de_puissance_et_tactique": {
        "Drashamygo": { "fr": "Drashamygo", "en-US": "Drashamygo", "ja": "ドラシャミーゴ", "ko": "드라샤미고", "zh": "德拉沙米戈", "es": "Drashamygo" },
        "Dissonance": { "fr": "Dissonance", "en-US": "Dissonance", "ja": "ディソナンス", "ko": "불협화음", "zh": "不和谐", "es": "Disonancia" },
        "Harmonie Transcendantale": { "fr": "Harmonie Transcendantale", "en-US": "Transcendental Harmony", "ja": "超越的調和", "ko": "초월적 조화", "zh": "超验和谐", "es": "Armonía Trascendental" },
        "Sang d'Amplification": { "fr": "Sang d'Amplification", "en-US": "Amplification Blood", "ja": "増幅の血", "ko": "증폭의 혈액", "zh": "放大之血", "es": "Sangre de Amplificación" },
        "Le Défaiseur": { "fr": "Le Défaiseur", "en-US": "The Defiler", "ja": "デファイラー", "ko": "디파일러", "zh": "亵渎者", "es": "El Defaiseur" },
        "Stase": { "fr": "Stase", "en-US": "Stasis", "ja": "停滞", "ko": "정지", "zh": "停滞", "es": "Estasis" },
        "Violon/Erhu": { "fr": "Violon/Erhu", "en-US": "Violin/Erhu", "ja": "ヴァイオリン/二胡", "es": "Violín/Erhu" },
        "Raya Longue": { "fr": "Raya Longue ($—$)", "en-US": "Long Dash", "ja": "ダッシュ", "es": "Raya larga" }
    },
    "elements_et_esprits": {
        "Vent": { "fr": "Vent (Aelion)", "en-US": "Wind", "ja": "風 (アエリオン)", "es": "Viento" },
        "Eau": { "fr": "Eau (Thalassor)", "en-US": "Water", "ja": "水 (タラッサー)", "es": "Agua" },
        "Terre": { "fr": "Terre (Terragon)", "en-US": "Earth", "ja": "土 (テラゴン)", "es": "Tierra" },
        "Feu": { "fr": "Feu (Ignistal)", "en-US": "Fire", "ja": "火 (イグニスタル)", "es": "Fuego" },
        "Foudre": { "fr": "Foudre (Fulgaris)", "en-US": "Lightning", "ja": "雷 (フルガリス)", "es": "Rayo" },
        "Temps/Espace": { "fr": "Temps/Espace", "en-US": "Time/Space", "ja": "時間/空間", "es": "Tiempo/Espacio" },
        "Origine": { "fr": "L'Origine (Kōgen)", "en-US": "The Origin", "ja": "根源 (Kōgen)", "es": "El Origen" },
        "Latent": { "fr": "Latent", "en-US": "Latent", "ja": "潜在的", "es": "Latente" }
    },
    "personnages_g1_individuels": {
        "Manon": { "fr": "Manon", "ja": "マノン", "ko": "마농" },
        "Camille": { "fr": "Camille", "ja": "カミーユ", "ko": "카미유" },
        "Jordan": { "fr": "Jordan", "ja": "ジョーダン", "ko": "조단" },
        "Kaiden": { "fr": "Kaiden", "ja": "カイデン", "ko": "카이덴" },
        "Merick": { "fr": "Merick", "ja": "メリック", "ko": "메릭" },
        "Theo": { "fr": "Théo", "ja": "テオ", "ko": "테오" },
        "Christina": { "fr": "Christina", "ja": "クリスティーナ", "ko": "크리스티나" },
        "Gus": { "fr": "Gus", "ja": "ガス", "ko": "거스" },
        "ZelTrhyld": { "fr": "ZelTrhyld", "ja": "ゼルトリルド", "ko": "젤트릴드" },
        "Kenzo": { "fr": "Kenzo", "ja": "ケンゾー", "ko": "켄조" },
        "Yan": { "fr": "Yan", "ja": "ヤン", "ko": "얀" },
        "Joseph": { "fr": "Joseph", "ja": "ジョセフ", "ko": "조셉" }
    },
    "lieux_et_evenements": {
        "Havre Gris": { "fr": "Havre Gris", "en-US": "Grey Haven", "ja": "グレイ・ヘイヴン", "es": "Puerto Gris" },
        "Aube Grise": { "fr": "L'Aube Grise", "en-US": "The Grey Dawn", "ja": "灰色の夜明け", "es": "El Amanecer Gris" }
    },
    "factions": {
        "Groupe 1": { "fr": "Groupe 1 (G1)", "en-US": "Group 1 (G1)", "ja": "第1グループ (G1)", "es": "Grupo 1 (G1)" },
        "Hoshi no Hakobune": { "fr": "Hoshi no Hakobune", "en-US": "Hoshi no Hakobune", "ja": "星の箱舟", "es": "Hoshi no Hakobune" },
        "Grande Alliance": { "fr": "Grande Alliance", "en-US": "Great Alliance", "ja": "大同盟", "es": "Gran Alianza" },
        "Nouvelle Génération": { "fr": "Nouvelle Génération", "en-US": "New Generation", "ja": "新世代", "es": "Nueva Generación" }
    }
};
