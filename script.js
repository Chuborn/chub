// script.js - External JavaScript file for Aqua MFA

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the button and image elements
    const nextStepBtn = document.getElementById('nextStepBtn');
    const stepImage = document.getElementById('stepImage');
    
    // Array of steps (text and images)
    const steps = [
        {
            text: 'Go to Minecraft.net and click "login"',
            image: 'files/aqua/step1.jpg'
        },
        {
            text: 'Select Microsoft, enter your email and click next',
            image: 'files/aqua/step2.png'
        },
        {
            text: 'Say no to any popup and click use password',
            image: 'files/aqua/step3.png'
        }, // ← ADDED MISSING COMMA
        {
            text: 'Select "Forgot password"',
            image: 'files/aqua/step4.png'
        }, // ← ADDED MISSING COMMA
        {
            text: 'Select "I don\'t have any of these"', // ← ESCAPED APOSTROPHE
            image: 'files/aqua/step5.png'
        }, // ← ADDED MISSING COMMA
        {
            text: 'Enter your recovery code', // ← REMOVED EXTRA QUOTE
            image: 'files/aqua/step6.png'
        }
    ];
    
    // Track current step
    let currentStep = 0;
    
    // Function to update the content
    function updateContent() {
        const step = steps[currentStep];
        const grandDiv = document.querySelector('.grand');
        
        // Update the text in .grand div
        grandDiv.innerHTML = `
            <a href="https://mfa.watchdog.gay" class="aqua-glow2" target="_self">discord</a>
            ${step.text} - 
            <a id="nextStepBtn" href="#" class="aqua-glow">
                ${currentStep < steps.length - 1 ? 'next step' : 'finished!'}
            </a>
        `;
        
        // Update the image
        stepImage.src = step.image;
        stepImage.alt = `Step ${currentStep + 1}`;
        
        // Re-attach the event listener to the new button
        const newBtn = document.getElementById('nextStepBtn');
        newBtn.addEventListener('click', handleNextStep);
    }
    
    // Function to handle next step click
    function handleNextStep(event) {
        event.preventDefault(); // Prevent the link from navigating
        
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateContent();
        } else {
            // Optional: Do something when all steps are completed
            alert('All steps completed!');
        }
    }
    
    // Add event listener to the button
    nextStepBtn.addEventListener('click', handleNextStep);
    
    // Initialize the first step
    updateContent();
});
