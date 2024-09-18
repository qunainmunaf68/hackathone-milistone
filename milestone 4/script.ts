document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form and display area
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

    if (!form) {
        console.error('Form element not found.');
        return;
    }

    if (!resumeDisplayElement) {
        console.error('Resume display element not found.');
        return;
    }

    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // prevent page reload

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value.trim() || '';
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value.trim() || '';
        const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value.trim() || '';
        const education = (document.getElementById('education') as HTMLInputElement | null)?.value.trim() || '';
        const experience = (document.getElementById('experience') as HTMLInputElement | null)?.value.trim() || '';
        const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value.trim() || '';

        // Generate the resume content dynamically
        const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
       

        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        `;

        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
});
