// Define the pointer element
const pointer = document.querySelector('.pointer');

// Function to update pointer position
function updatePointer(event) {
    gsap.to(pointer, {
        duration: 0.5,
        x: event.clientX - pointer.offsetWidth / 2, // Adjust position based on pointer width
        y: event.clientY - pointer.offsetHeight / 2, // Adjust position based on pointer height
        ease: 'power2.out' // Easing function
    });
}

// Event listener to update pointer position on mousemove
document.addEventListener('mousemove', updatePointer);
