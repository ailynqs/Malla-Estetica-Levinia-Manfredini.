const carreraData = [
    {
        semestre: "Primer Semestre",
        areas: [
            {
                titulo: "Introducción a la Cosmetología",
                ramos: ["Historia de la estética", "La cosmetología como profesión", "Nociones básicas de la biología"]
            },
            {
                titulo: "Biología Cutánea",
                ramos: ["Histología de la piel", "Fisiología de la piel", "Lesiones de la piel", "Anatomía del rostro"]
            },
            {
                titulo: "Teoría de la Cosmetología",
                ramos: ["Clasificación cosmetológica de la piel"]
            },
            {
                titulo: "Cosmetología Aplicada 1",
                ramos: ["Técnica de desmaquillado", "Masaje limpiador", "Técnica de aplicación de cosméticos", "Peeling cosmético"]
            },
            {
                titulo: "Maquillaje Social",
                ramos: ["Introducción al maquillaje y al color", "Técnicas de visagismo", "Técnica perfilado de cejas", "Maquillaje de día", "Maquillaje tarde noche"]
            }
        ]
    },
    {
        semestre: "Segundo Semestre",
        areas: [
            {
                titulo: "Corporal Teórico 1",
                ramos: ["Histología", "Tejidos", "Sistema óseo", "Sistema muscular"]
            },
            {
                titulo: "Estética Corporal Aplicada 1",
                ramos: ["Manipulaciones de masajes", "Peeling corporal", "Masaje de relajación", "Masaje cervicocraneal"]
            },
            {
                titulo: "Cosmetología Aplicada 2",
                ramos: ["Técnicas de desincrustación de impurezas", "Drenaje linfático facial", "Tratamiento específico para problemas estéticos", "Aplicación técnico-práctico cosméticos"]
            },
            {
                titulo: "Maquillaje Social Pro",
                ramos: ["Maquillaje piel madura", "Técnica smokeyes", "Maquillaje alta noche", "Maquillaje novia clásica"]
            },
            {
                titulo: "Electroestética Facial",
                ramos: ["Efectos del calor", "Aplicación de aparatos", "Conceptos teóricos aparatología"]
            }
        ]
    }
    // Puedes seguir agregando el semestre 3 y 4 siguiendo este mismo formato
];

let aprobados = JSON.parse(localStorage.getItem('malla_aprobados')) || [];

function renderMalla() {
    const container = document.getElementById('malla-container');
    
    carreraData.forEach(sem => {
        const semDiv = document.createElement('div');
        semDiv.className = 'semestre-container';
        
        let html = `<div class="semestre-label">${sem.semestre}</div><div class="areas-grid">`;
        
        sem.areas.forEach(area => {
            html += `<div class="area-col">
                        <div class="titulo-estatico">${area.titulo}</div>`;
            
            area.ramos.forEach(ramoNombre => {
                const ramoId = ramoNombre.toLowerCase().replace(/\s+/g, '_');
                const esAprobado = aprobados.includes(ramoId) ? 'aprobado' : '';
                html += `<div class="ramo-item ${esAprobado}" id="${ramoId}" onclick="toggleRamo('${ramoId}')">
                            ${ramoNombre}
                         </div>`;
            });
            
            html += `</div>`;
        });
        
        html += `</div>`;
        semDiv.innerHTML = html;
        container.appendChild(semDiv);
    });
}

function toggleRamo(id) {
    if (aprobados.includes(id)) {
        aprobados = aprobados.filter(i => i !== id);
    } else {
        aprobados.push(id);
    }
    localStorage.setItem('malla_aprobados', JSON.stringify(aprobados));
    document.getElementById(id).classList.toggle('aprobado');
}

// Cerrar modal
document.querySelector('.close-btn').onclick = () => document.getElementById('modal').style.display = "none";

renderMalla();
