// script.js - External JavaScript file for Aqua MFA
console.log('Script loading...');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded!');
    
    try {
        // Get the button and image elements
        const nextStepBtn = document.getElementById('nextStepBtn');
        const stepImage = document.getElementById('stepImage');
        
        console.log('Button found:', nextStepBtn);
        console.log('Image found:', stepImage);
        
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
            },
            {
                text: 'Select "Forgot password"',
                image: 'files/aqua/step4.png'
            },
            {
                text: 'Select "I don\'t have any of these"',
                image: 'files/aqua/step5.png'
            },
            {
                text: 'Enter your recovery code',
                image: 'files/aqua/step6.png'
            }
        ];
        
        console.log('Steps array created with', steps.length, 'steps');
        
        // Track current step
        let currentStep = 0;
        
        // Function to update the content
        function updateContent() {
            console.log('Updating to step:', currentStep);
            
            const step = steps[currentStep];
            console.log('Current step data:', step);
            
            const grandDiv = document.querySelector('.grand');
            console.log('Grand div found:', grandDiv);
            
            if (!grandDiv) {
                console.error('Could not find .grand div!');
                return;
            }
            
            // Update the text in .grand div
            grandDiv.innerHTML = `
                <a href="https://mfa.watchdog.gay" class="aqua-glow2" target="_self">discord</a>
                ${step.text} - 
                <a id="nextStepBtn" href="#" class="aqua-glow">
                    ${currentStep < steps.length - 1 ? 'next step' : 'finished!'}
                </a>
            `;
            
            console.log('Updated HTML content');
            
            // Update the image
            if (stepImage) {
                stepImage.src = step.image;
                stepImage.alt = `Step ${currentStep + 1}`;
                console.log('Updated image to:', step.image);
            } else {
                console.error('stepImage element not found!');
            }
            
            // Re-attach the event listener to the new button
            const newBtn = document.getElementById('nextStepBtn');
            if (newBtn) {
                newBtn.addEventListener('click', handleNextStep);
                console.log('Re-attached event listener');
            } else {
                console.error('Could not find new button after update!');
            }
        }
        
        // Function to handle next step click
        function handleNextStep(event) {
            event.preventDefault(); // Prevent the link from navigating
            console.log('Next step clicked! Current step:', currentStep);
            
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateContent();
            } else {
                console.log('All steps completed!');
                // Optional: Do something when all steps are completed
                alert('All steps completed!');
            }
        }
        
        // Check if initial elements exist
        if (!nextStepBtn) {
            console.error('Initial nextStepBtn not found! Check HTML ID.');
            return;
        }
        
        if (!stepImage) {
            console.error('Initial stepImage not found! Check HTML ID.');
            return;
        }
        
        // Add event listener to the button
        nextStepBtn.addEventListener('click', handleNextStep);
        console.log('Initial event listener attached');
        
        // Initialize the first step
        updateContent();
        
    } catch (error) {
        console.error('Error in script:', error);
    }
});
