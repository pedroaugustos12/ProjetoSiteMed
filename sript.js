const ufInput = document.getElementById('ufInput');
const ufList = document.getElementById('ufList');

// Lista de estados brasileiros com suas siglas
const estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
];

// Função para filtrar e exibir a lista de estados
function mostrarListaEstados() {
    const valorInput = ufInput.value.toUpperCase();
    let html = '';
    const estadosFiltrados = estados.filter(estado => estado.sigla.startsWith(valorInput) || estado.nome.toUpperCase().includes(valorInput));
    
    estadosFiltrados.forEach(estado => {
        html += `<li>${estado.sigla} - ${estado.nome}</li>`;
    });

    ufList.innerHTML = html;
}

// Event listener para capturar a entrada de texto no input
ufInput.addEventListener('input', mostrarListaEstados);

// Event listener para preencher o input com o valor selecionado da lista
ufList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        ufInput.value = event.target.textContent.split(' - ')[0];
        ufList.innerHTML = '';
    }
});


