// index.js
// Armazena o perfil ativo no localStorage antes de ir para catalogo.html
const profileLinks = document.querySelectorAll('.profiles .profile a');

profileLinks.forEach(link => {
    link.addEventListener('click', () => {
        const figure = link.querySelector('figure');
        if (!figure) return;

        const nameEl = figure.querySelector('figcaption');
        const imgEl = figure.querySelector('img');

        if (nameEl && imgEl) {
            const activeName = nameEl.textContent.trim();
            const activeImage = imgEl.src;

            localStorage.setItem('perfilAtivoNome', activeName);
            localStorage.setItem('perfilAtivoImagem', activeImage);
        }
    });
});
