// Estructura de Datos de la Carrera
const carrera = [
    {
        semestre: 1,
        ramos: [
            { id: "intro_cosm", nombre: "Introducción a la cosmetología", req: [] },
            { id: "hist_est", nombre: "Historia de la estética", req: [] },
            { id: "bio_basica", nombre: "Nociones básicas de la biología", req: [] },
            { id: "cosm_prof", nombre: "La cosmetología como profesión", req: [] },
            { id: "bio_cutanea", nombre: "Biología cutánea", req: [] },
            { id: "hist_piel", nombre: "Histología de la piel", req: [] },
            { id: "fisio_piel", nombre: "Fisiología de la piel", req: [] },
            { id: "lesiones_piel", nombre: "Lesiones de la piel", req: [] },
            { id: "ana_rostro", nombre: "Anatomía del rostro", req: [] },
            { id: "teoria_cosm", nombre: "Teoría de la cosmetología", req: [] },
            { id: "clasif_piel", nombre: "Clasificación cosmetológica de la piel", req: [] },
            { id: "cosm_apli1", nombre: "Cosmetología aplicada 1", req: [] },
            { id: "desmaquillado", nombre: "Técnica de desmaquillado", req: [] },
            { id: "masaje_limp", nombre: "Masaje limpiador", req: [] },
            { id: "apli_cosm", nombre: "Técnica de aplicación de cosméticos", req: [] },
            { id: "peeling_cosm", nombre: "Peeling cosmético", req: [] },
            { id: "maq_social", nombre: "Maquillaje social y asesoría de imagen", req: [] },
            { id: "intro_maq", nombre: "Introducción al maquillaje y al color", req: [] },
            { id: "visagismo", nombre: "Técnicas de visagismo", req: [] },
            { id: "cejas_perf", nombre: "Técnica perfilado de cejas", req: [] },
            { id: "maq_dia", nombre: "Maquillaje de día", req: [] },
            { id: "maq_noche", nombre: "Maquillaje tarde noche", req: [] }
        ]
    },
    {
        semestre: 2,
        ramos: [
            { id: "corp_teo1", nombre: "Corporal teórico 1", req: [] },
            { id: "histologia", nombre: "Histología", req: [] },
            { id: "tejidos", nombre: "Tejidos", req: [] },
            { id: "oseo", nombre: "Sistema óseo", req: [] },
            { id: "muscular", nombre: "Sistema muscular", req: [] },
            { id: "corp_apli1", nombre: "Estética corporal aplicada 1", req: [] },
            { id: "manip_masaje", nombre: "Manipulaciones de masajes", req: [] },
            { id: "peeling_corp", nombre: "Peeling corporal", req: [] },
            { id: "relajacion", nombre: "Masaje de relajación", req: [] },
            { id: "cervicocraneal", nombre: "Masaje cervicocraneal", req: [] },
            { id: "cosm_apli2", nombre: "Cosmetología aplicada 2", req: ["cosm_apli1"] }, // Ejemplo de requisito
            { id: "desincrustacion", nombre: "Técnicas de desincrustación de impurezas", req: [] },
            { id: "drenaje_fac", nombre: "Drenaje linfático facial", req: [] },
            { id: "trata_estetico", nombre: "Tratamiento específico para problemas estéticos faciales", req: [] },
            { id: "apli_teo_cosm", nombre: "Aplicación teórico-practico de cosméticos profesionales facial", req: [] },
            { id: "maq_social_2", nombre: "Maquillaje social", req: ["maq_social"] },
            { id: "maq_madura", nombre: "Maquillaje piel madura", req: [] },
            { id: "smokeyes", nombre: "Técnica smokeyes", req: [] },
            { id: "maq_alta_noche", nombre: "Maquillaje alta noche", req: [] },
            { id: "novia_clasica", nombre: "Maquillaje novia clásica", req: [] },
            { id: "electro_facial", nombre: "Teoría de la electroestética facial", req: [] },
            { id: "efectos_calor", nombre: "Conceptos y efectos del calor", req: [] },
            { id: "aparatos_calor", nombre: "Técnicas de aplicación de aparatos generadores de calor", req: [] },
            { id: "teoria_aparato", nombre: "Conceptos teóricos de aparatología facial", req: [] }
        ]
    },
    {
        semestre: 3,
        ramos: [
            { id: "corp_teo2", nombre: "Corporal teórico 2", req: ["corp_teo1"] },
            { id: "circulatorio", nombre: "Sistema circulatorio sanguíneo-linfático", req: [] },
            { id: "adiposo", nombre: "Tejido adiposo", req: [] },
            { id: "flacidez", nombre: "Flacidez", req: [] },
            { id: "mamas", nombre: "Mamas y estrías", req: [] },
            { id: "estrias", nombre: "Estrías", req: [] },
            { id: "lifting_pestanas", nombre: "Lifting y tinte de pestañas", req: [] },
            { id: "fijacion_cejas", nombre: "Fijación de cejas", req: [] },
            { id: "depilacion", nombre: "Depilación profesional", req: [] },
            { id: "corp_apli2", nombre: "Estética corporal aplicada 2", req: ["corp_apli1"] },
            { id: "drenaje_corp", nombre: "Drenaje linfático corporal", req: [] },
            { id: "reductivo", nombre: "Tratamiento reductivo", req: [] },
            { id: "crioterapia", nombre: "Crioterapia", req: [] },
            { id: "termoterapia", nombre: "Termoterapia", req: [] },
            { id: "cosm_apli3", nombre: "Cosmetología aplicada 3", req: ["cosm_apli2"] },
            { id: "masaje_nutri", nombre: "Masaje facial nutritivo y reafirmante", req: [] },
            { id: "apli_teo_cosm3", nombre: "Aplicación teórico-práctico de cosméticos profesionales facial", req: [] },
            { id: "diag_biotipos", nombre: "Diagnóstico de los diversos biotipos cutáneos", req: [] }
        ]
    },
    {
        semestre: 4,
        ramos: [
            { id: "tec_cosmetica", nombre: "Tecnología cosmética", req: [] },
            { id: "clasif_cosm", nombre: "Clasificación de los cosméticos", req: [] },
            { id: "principios_act", nombre: "Principios activos utilizados en estética", req: [] },
            { id: "formas_cosm", nombre: "Formas cosméticas", req: [] },
            { id: "penetracion", nombre: "Vías de penetración de los cosméticos en la piel", req: [] },
            { id: "reacciones", nombre: "Reacciones adversas producidas por cosméticos", req: [] },
            { id: "alteraciones", nombre: "Alteraciones funcionales cutáneas", req: [] },
            { id: "gland_sebacea", nombre: "Trastornos de la glándula sebácea", req: [] },
            { id: "gland_sudor", nombre: "Trastorno de la glándula sudorípara", req: [] },
            { id: "queratimizacion", nombre: "Trastorno de la queratinización", req: [] },
            { id: "melanogenesis", nombre: "Trastorno de la melanogénesis", req: [] },
            { id: "vasculares", nombre: "Trastornos vasculares", req: [] },
            { id: "cosm_apli4", nombre: "Cosmetología aplicada 4", req: ["cosm_apli3"] },
            { id: "trata_pieles", nombre: "Tratamientos para pieles: deshidratadas, sensibles, envejecidas", req: [] },
            { id: "corp_apli3", nombre: "Estética corporal aplicada 3", req: ["corp_apli2"] },
            { id: "tec_gluteos", nombre: "Técnica en glúteos", req: [] },
            { id: "celulitis_fib", nombre: "Tratamiento en celulitis fibrosa", req: [] },
            { id: "celulitis_blan", nombre: "Tratamiento en celulitis blanda", req: [] },
            { id: "teo_aparatologia_corp", nombre: "Conceptos teóricos de aparatología corporal", req: [] },
            { id: "apli_prof_corp", nombre: "Aplicación teórico-práctico de cosméticos profesionales corporales", req: [] },
            { id: "maq_fantasia", nombre: "Maquillaje de fantasía", req: [] },
            { id: "borrado_cejas", nombre: "Borrado de cejas", req: [] },
            { id: "geisha", nombre: "Maquillaje geisha", req: [] },
            { id: "fantasia_acc", nombre: "Maquillaje fantasía con accesorios", req: [] },
            { id: "halloween", nombre: "Maquillaje halloween", req: [] },
            { id: "arabe", nombre: "Maquillaje árabe", req: [] },
            { id: "catrina", nombre: "Maquillaje catrina", req: [] },
            { id: "muneca", nombre: "Maquillaje muñeca", req: [] }
        ]
    }
];

// Estado global de ramos aprobados (se carga de localStorage)
let aprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

const container = document.getElementById('malla-container');
const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modal-message');
const closeBtn = document.querySelector('.close-btn');

// Inicializar Malla
function initMalla() {
    carrera.forEach(sem => {
        const col = document.createElement('div');
        col.className = 'semestre-col';
        col.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

        sem.ramos.forEach(ramo => {
            const div = document.createElement('div');
            div.className = `ramo ${aprobados.includes(ramo.id) ? 'aprobado' : ''}`;
            div.id = ramo.id;
            div.innerText = ramo.nombre;
            div.onclick = () => toggleRamo(ramo.id);
            col.appendChild(div);
        });
        container.appendChild(col);
    });
    updateProgress();
}

// Función para marcar/desmarcar ramo
function toggleRamo(id) {
    const ramoData = findRamoById(id);
    
    // Si ya está aprobado, lo quitamos
    if (aprobados.includes(id)) {
        aprobados = aprobados.filter(item => item !== id);
    } else {
        // Verificar requisitos
        const faltantes = ramoData.req.filter(rId => !aprobados.includes(rId));
        
        if (faltantes.length > 0) {
            const nombresFaltantes = faltantes.map(fId => findRamoById(fId).nombre);
            showModal(`No puedes aprobar este ramo todavía. Debes aprobar primero: ${nombresFaltantes.join(", ")}`);
            return;
        }
        aprobados.push(id);
    }

    // Guardar y actualizar UI
    localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
    document.getElementById(id).classList.toggle('aprobado');
    updateProgress();
}

function findRamoById(id) {
    for (let sem of carrera) {
        let found = sem.ramos.find(r => r.id === id);
        if (found) return found;
    }
}

function updateProgress() {
    const totalRamos = carrera.reduce((acc, sem) => acc + sem.ramos.length, 0);
    const porcentaje = Math.round((aprobados.length / totalRamos) * 100);
    document.getElementById('progress-percent').innerText = `${porcentaje}%`;
}

// Modal logic
function showModal(msg) {
    modalMsg.innerText = msg;
    modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Cargar al iniciar
initMalla();
