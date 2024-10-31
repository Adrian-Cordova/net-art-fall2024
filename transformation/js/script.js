
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');
        const colorInput = document.querySelector('.color-input');
        const blockList = document.querySelector('.blockList');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const colorValue = colorInput.value.trim().toLowerCase();

            const testDiv = document.createElement('div');
            testDiv.style.backgroundColor = colorValue;

            if (testDiv.style.backgroundColor) {

                const colorBlock = document.createElement('div');
                colorBlock.className = 'block-container';
                colorBlock.style.backgroundColor = colorValue;

                blockList.appendChild(colorBlock);

                colorInput.value = '';
            } else {
                alert("Please enter a valid color name or hex code.");
            }
        });
    });

