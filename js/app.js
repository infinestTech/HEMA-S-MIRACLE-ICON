
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let overlay = document.querySelector('.overlay');
  
    // Create overlay if it doesn't exist
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
      overlay.addEventListener('click', function() {
        this.style.display = 'none'; // Hide overlay when clicked
        this.innerHTML = ''; // Clear previous content
      });
    }
  
    galleryItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation(); // Stop click from propagating to overlay
        const clone = this.cloneNode(true);
        clone.classList.add('zoomed-in'); // Apply zoomed-in class to clone
        overlay.innerHTML = ''; // Clear overlay before appending new content
        overlay.appendChild(clone);
        overlay.style.display = 'flex'; // Show overlay
      });
    });
  });
  
  