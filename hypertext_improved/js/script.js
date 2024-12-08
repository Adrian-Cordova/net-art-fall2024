// Add event listeners for mood buttons
document.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', () => {
    
        document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('clicked'));

        button.classList.add('clicked');
        

        let mood = button.dataset.mood;
        console.log("Mood selected:", mood);

        localStorage.setItem("mood", mood);

    });
});

  

  document.addEventListener("DOMContentLoaded", function () {
    const playerNameInput = document.getElementById('player-name');
    const saveBtn = document.getElementById('save-btn');
    const nextBtn = document.getElementById('next-btn');

    // Enable/disable the Save button based on input
    playerNameInput.addEventListener('input', function () {
        if (playerNameInput.value.trim() !== '') {
            saveBtn.disabled = false;  
        } else {
            saveBtn.disabled = true;  
        }
    });

    // Store the name in localStorage and enable the "Next" button
    saveBtn.addEventListener('click', function () {
        const playerName = playerNameInput.value.trim();
        if (playerName) {

            localStorage.setItem('playerName', playerName);
            nextBtn.style.pointerEvents = 'auto';
            nextBtn.style.opacity = '1';
        }
    });
});



// Retrieve the saved name and mood from localStorage
const playerName = localStorage.getItem("playerName");
const mood = localStorage.getItem("mood");  // Mood selected in the previous step

// Select the dialogue element
const dialogueElement = document.getElementById("dialogue");

if (playerName) {
    let dialogueText = `Ah, ${playerName}!`;

    if (mood === 'dark') {
        dialogueText += " You seem to have chosen the dark path... A challenging adventure awaits you in a world full of dangers!";
    } else if (mood === 'neutral') {
        dialogueText += " A neutral choice, huh? Welcome to the Pokémon world, where things are calm and balanced.";
    } else if (mood === 'bright') {
        dialogueText += " What an optimistic choice! You're about to embark on an exciting, joyful Pokémon adventure!";
    } else {
        dialogueText += " You have a unique aura, ready for anything the world of Pokémon throws your way!";
    }
    dialogueElement.textContent = dialogueText;
} else {
    dialogueElement.textContent = "Whoops, something went wrong! I don't know your name yet.";
}

