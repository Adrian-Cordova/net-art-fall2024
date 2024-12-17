document.addEventListener('DOMContentLoaded', function() {
    // Name input page functionality
    const nameInput = document.getElementById('playerName');
    const saveButton = document.getElementById('saveName');
    const nextButton = document.querySelector('a.menu-btn');
    
    if (nameInput && saveButton) {
        nameInput.addEventListener('input', function() {
            const nameValue = this.value.trim();
            saveButton.style.display = nameValue ? 'inline-block' : 'none';
            nextButton.style.display = 'none';
        });

        saveButton.addEventListener('click', function() {
            const playerName = nameInput.value.trim();
            
            if (playerName) {
                localStorage.setItem('playerName', playerName);
                nextButton.style.display = 'inline-block';
                saveButton.textContent = 'Saved!';
                nameInput.value = '';
                
                setTimeout(() => {
                    saveButton.textContent = 'Save';
                    saveButton.style.display = 'none';
                }, 1000);
            }
        });

        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                saveButton.click();
            }
        });

        nameInput.focus();
    }
    const playerNameSpan = document.getElementById('playerNameSpan');
    if (playerNameSpan) {
        const savedName = localStorage.getItem('playerName') || 'Trainer';
        playerNameSpan.textContent = savedName;
    }
});

function getPlayerName() {
    return localStorage.getItem('playerName') || 'Trainer';
}