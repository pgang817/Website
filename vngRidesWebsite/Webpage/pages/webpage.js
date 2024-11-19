let currentIndex = 1; // Start with the first data section
const totalSections = 6; // Total number of sections

function showData(index) {
  for (let i = 1; i <= totalSections; i++) {
    document.getElementById('data' + i).style.display = (i === index) ? 'block' : 'none';
  }
}

function prevSlide() {
  currentIndex = (currentIndex === 1) ? totalSections : currentIndex - 1;
  showData(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex === totalSections) ? 1 : currentIndex + 1;
  showData(currentIndex);
}

// Initialize the view
showData(currentIndex);
