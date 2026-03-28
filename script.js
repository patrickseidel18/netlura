const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica o tema salvo no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light-mode') {
    body.classList.add('light-mode');
    themeToggle.classList.add('active');
} else {
    body.classList.remove('light-mode');
    themeToggle.classList.remove('active');
}

// Evento de clique para alternar o tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const newTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
    themeToggle.classList.toggle('active');
});

function showAction(name) {
    alert(`Ação selecionada: ${name}`);
}

const manageProfileBtn = document.getElementById('manage-profile-btn');
const bottomControls = document.querySelector('.bottom-controls');
const profileActions = document.getElementById('profile-actions');

manageProfileBtn.addEventListener('click', () => {
    const isHidden = profileActions.classList.contains('hidden');
    if (isHidden) {
        profileActions.classList.remove('hidden');
        bottomControls.classList.add('expanded');
    } else {
        profileActions.classList.add('hidden');
        bottomControls.classList.remove('expanded');
    }
});

document.getElementById('edit-profile').addEventListener('click', () => showAction('Editar perfil'));
document.getElementById('add-profile').addEventListener('click', () => showAction('Adicionar perfil'));
document.getElementById('delete-profile').addEventListener('click', () => showAction('Excluir perfil'));