// Estructura de datos de la carrera
const carreraData = [
    {
        semestre: 1,
        contenido: [
            { tipo: 'titulo', nombre: 'Introducción a la cosmetología' },
            { id: 'hist_est', nombre: 'Historia de la estetica', req: [] },
            { id: 'noc_biol', nombre: 'nociones basicas de la biología', req: [] },
            { id: 'cosm_prof', nombre: 'la cosmetología como profesión', req: [] },
            { id: 'biol_cut', nombre: 'biología cutanea', req: [] },
            { id: 'hist_piel', nombre: 'histología de la piel', req: [] },
            { id: 'fisi_piel', nombre: 'fisiología de la piel', req: [] },
            { id: 'lesi_piel', nombre: 'lesiones de la piel', req: [] },
            { id: 'anat_rost', nombre: 'anatomia del rostro', req: [] },
            { tipo: 'titulo', nombre: 'Teoría de la cosmetología' },
            { id: 'clas_cosm_p', nombre: 'clasificación cosmetologica de la piel', req: [] },
            { id: 'clas_prod', nombre: 'clasificacion de los cosmeticos', req: [] },
            { id: 'corr_cosm', nombre: 'tipos de correcciones cosmeticas cosmetologicas', req: [] },
            { tipo: 'titulo', nombre: 'Cosmetologia aplicada 1' },
            { id: 'tec_desm', nombre: 'tecnica de desmaquillado', req: [] },
            { id: 'mas_limp', nombre: 'masaje limpiador', req: [] },
            { id: 'tec_app_cosm', nombre: 'Técnica de aplicación de cosméticos', req: [] },
            { id: 'peel_cosm', nombre: 'peeling cosmetico', req: [] },
            { tipo: 'titulo', nombre: 'Maquillaje social y asesoria de imagen' },
            { id: 'intro_maq', nombre: 'introduccion al maquillaje y a el color', req: [] },
            { id: 'tec_visag', nombre: 'tecnicas de visagismo', req: [] },
            { id: 'perf_cejas', nombre: 'Tecnica perfilado de cejas', req: [] },
            { id: 'maq_dia', nombre: 'maquillaje de dia', req: [] },
            { id: 'maq_tarde', nombre: 'maquillaje tarde noche', req: [] }
        ]
    },
    {
        semestre: 2,
        contenido: [
            { tipo: 'titulo', nombre: 'Corporal teorico 1' },
            { id: 'hist_2', nombre: 'Histología', req: ['hist_piel'] }, // Ejemplo de requisito
            { id: 'tejidos', nombre: 'Tejidos', req: [] },
            { id: 'sist_oseo', nombre: 'sistema óseo', req: [] },
            { id: 'sist_musc', nombre: 'sistema muscular', req: [] },
            { tipo: 'titulo', nombre: 'Estetica corporal aplicada 1' },
            { id: 'man_masaje', nombre: 'Manipulaciones de masajes', req: [] },
            { id: 'peel_corp', nombre: 'peeling corporal', req: [] },
            { id: 'mas_relaj', nombre: 'masaje de relajación', req: [] },
            { id: 'mas_cerv', nombre: 'masaje cervicocraneal', req: [] },
            { tipo: 'titulo', nombre: 'Cosmetologia aplicada 2' },
            { id: 'tec_desinc', nombre: 'Técnicas de desincrustación de impurezas', req: ['tec_desm'] },
            { id: 'dren_fac', nombre: 'drenaje linfatico facial', req: [] },
            { id: 'trata_est', nombre: 'Tratamiento especifico para problemas estéticos faciales', req: [] },
            { id: 'app_fac_prof', nombre: 'Aplicación teórico-practico de cosmeticos profesionales facial', req: [] },
            { tipo: 'titulo', nombre: 'Maquillaje social' },
            { id: 'maq_madura', nombre: 'maquillaje piel madura', req: ['intro_maq'] },
            { id: 'smokeyes', nombre: 'tecnica smokeyes', req: [] },
            { id: 'maq_noche_alta', nombre: 'maquillaje alta noche', req: [] },
            { id: 'maq_novia', nombre: 'maquillaje novia clásica', req: [] },
            { tipo: 'titulo', nombre: 'Teoría de la electroestetica facial' },
            { id: 'conc_calor', nombre: 'conceptos y efectos del calor', req: [] },
            { id: 'tec_apa_calor', nombre: 'tecniocas de aplicación de aparatos generadores de calor', req: [] },
            { id: 'teor_apa_fac', nombre: 'conceptos teoricos de aparatologia facial', req: [] }
        ]
    },
    {
        semestre: 3,
        contenido: [
            { tipo: 'titulo', nombre: 'Corporal teorico 2' },
            { id: 'sist_circ', nombre: 'sistema circulatorio sanguíneo-linfático', req: [] },
            { id: 'tej_adip', nombre: 'tejido adiposo', req: [] },
            { id: 'flacidez', nombre: 'Flacidez', req: [] },
            { id: 'mamas_estrias', nombre: 'mamas y estrias', req: [] },
            { id: 'estrias', nombre: 'Estrias', req: [] },
            { tipo: 'titulo', nombre: 'Modulos complementarios' },
            { id: 'lift_pest', nombre: 'lifting y tinte de pestañas', req: [] },
            { id: 'fij_cejas', nombre: 'fijacion de cejas', req: [] },
            { id: 'dep_prof', nombre: 'depilación profesional', req: [] },
            { tipo: 'titulo', nombre: 'Estetica corporal aplicada 2' },
            { id: 'dren_corp', nombre: 'drenaje linfatico corporal', req: ['dren_fac'] },
            { id: 'trata_red', nombre: 'tratamientto reductivo', req: [] },
            { id: 'crioterapia', nombre: 'Crioterapia', req: [] },
            { id: 'termoterapia', nombre: 'Termoterapia', req: [] },
            { tipo: 'titulo', nombre: 'Cosmetologia aplicada 3' },
            { id: 'mas_nutri', nombre: 'masaje facial nutritivo y reafirmante', req: [] },
            { id: 'app_fac_prof_3', nombre: 'Aplicación teorico-practico de cosmeticos profesionales facial', req: [] },
            { id: 'diag_biotip', nombre: 'diagnostico de los diversos biotipos cutaneos', req: [] }
        ]
    },
    {
        semestre: 4,
        contenido: [
            { tipo: 'titulo', nombre: 'Tecnología cosmetica' },
            { id: 'clas_cosm_4', nombre: 'clasificación de los cosmeticos', req: [] },
            { id: 'princ_act', nombre: 'principios activos utilizados en estetica', req: [] },
            { id: 'formas_cosm', nombre: 'formas cosméticas', req: [] },
            { id: 'vias_pen', nombre: 'vias de penetracion de los cosmeticos en la piel', req: [] },
            { id: 'reac_adv', nombre: 'reacciones adversas producidas por cosmeticos', req: [] },
            { tipo: 'titulo', nombre: 'Alteraciones funcionales cutáneas' },
            { id: 'glan_seb', nombre: 'Trastornos de la glandula sebacea', req: [] },
            { id: 'glan_sud', nombre: 'trastorno de la glandula sudoripara', req: [] },
            { id: 'querat', nombre: 'trastorno de la queratinizacion', req: [] },
            { id: 'melano', nombre: 'trastorno de la melanogenesis', req: [] },
            { id: 'vasc', nombre: 'trastornos vasculares', req: [] },
            { tipo: 'titulo', nombre: 'Cosmetologia aplicada 4' },
            { id: 'trata_pieles', nombre: 'Tratamientos para pieles específicas', req: [] },
            { tipo: 'titulo', nombre: 'Estetica corporal aplicada 3' },
            { id: 'tec_glut', nombre: 'tecnica en glúteos', req: [] },
            { id: 'celu_fib', nombre: 'tratamiento en celulitis fibrosa', req: [] },
            { id: 'celu_bla', nombre: 'tratamiento en celulitis blanda', req: [] },
            { id: 'apa_corp', nombre: 'conceptos teóricos de aparatologias corporal', req: [] },
            { id: 'app_corp_prof', nombre: 'aplicación teorico-practico de cosmeticos profesionales corporales', req: [] },
            { tipo: 'titulo', nombre: 'Maquillaje de fantasia' },
            { id: 'borr_cejas', nombre: 'borrado de cejas', req: [] },
            { id: 'maq_geisha', nombre: 'maquillaje geisha', req: [] },
            { id: 'maq_fant_acc', nombre: 'maquillaje fanttasia con aplicación de accesorios', req: [] },
            { id: 'halloween', nombre: 'Maquillaje halloween', req: [] },
            { id: 'arabe', nombre: 'maquillaje arabe', req: [] },
            { id: 'catrina', nombre: 'maquillaje catrina', req: [] },
            { id: 'muneca', nombre: 'maquillaje muñeca', req: [] }
        ]
    }
];

// Estado global
let aprobados = JSON.parse(localStorage.getItem('mallaAprobados')) || [];

const container = document.getElementById('malla-container');
const progressEl = document.getElementById('progress-percent');

function init() {
    renderMalla();
    updateUI();
}

function renderMalla() {
    container.innerHTML = '';
    
    carreraData.forEach(sem => {
        const semDiv = document.createElement('div');
        semDiv.className = 'semestre';
        semDiv.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

        sem.contenido.forEach(item => {
            if (item.tipo === 'titulo') {
                const h3 = document.createElement('div');
                h3.className = 'categoria-titulo';
                h3.innerText = item.nombre;
                semDiv.appendChild(h3);
            } else {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = `ramo ${aprobados.includes(item.id) ? 'aprobado' : ''}`;
                ramoDiv.id = item.id;
                ramoDiv.innerText = item.nombre;
                
                ramoDiv.onclick = () => toggleRamo(item.id, item.req);
                semDiv.appendChild(ramoDiv);
            }
        });
        container.appendChild(semDiv);
    });
}

function toggleRamo(id, requisitos) {
    // Si ya está aprobado, quitarlo
    if (aprobados.includes(id)) {
        aprobados = aprobados.filter(item => item !== id);
    } else {
        // Verificar requisitos
        const faltantes = requisitos.filter(r => !aprobados.includes(r));
        
        if (faltantes.length > 0) {
            // Buscar nombres de los ramos faltantes para el mensaje
            const nombresFaltantes = [];
            carreraData.forEach(s => s.contenido.forEach(i => {
                if (faltantes.includes(i.id)) nombresFaltantes.push(i.nombre);
            }));
            
            alert(`⚠️ No puedes marcar este ramo aún. Faltan los siguientes requisitos: \n- ${nombresFaltantes.join('\n- ')}`);
            return;
        }
        aprobados.push(id);
    }
    
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
    renderMalla();
    updateUI();
}

function updateUI() {
    // Calcular porcentaje
    const totalRamos = carreraData.reduce((acc, sem) => 
        acc + sem.contenido.filter(i => i.id).length, 0);
    const porcentaje = Math.round((aprobados.length / totalRamos) * 100);
    progressEl.innerText = porcentaje;

    // Actualizar clases de "bloqueado" visualmente
    const allRamos = document.querySelectorAll('.ramo');
    allRamos.forEach(el => {
        const id = el.id;
        // Encontrar los requisitos de este ID
        let reqs = [];
        carreraData.forEach(s => s.contenido.forEach(i => {
            if (i.id === id) reqs = i.req;
        }));

        const estaBloqueado = reqs.some(r => !aprobados.includes(r));
        if (estaBloqueado && !aprobados.includes(id)) {
            el.classList.add('bloqueado');
        } else {
            el.classList.remove('bloqueado');
        }
    });
}

document.getElementById('reset-btn').onclick = () => {
    if(confirm('¿Estás seguro de que quieres borrar todo tu progreso?')) {
        aprobados = [];
        saveAndRefresh();
    }
};

init();
