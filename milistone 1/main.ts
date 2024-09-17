const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    // Use a check for 'block' to handle cases where the initial display might not be 'none'
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});
