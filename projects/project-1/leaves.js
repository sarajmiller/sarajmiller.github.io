const leafContainer = document.querySelector('.leaf-container');
const numberOfLeaves = 25;

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    const imgElement = document.createElement('img');
    imgElement.src = './images/leaf_litter.png';
    imgElement.alt = 'leaf';

    leaf.appendChild(imgElement)
  
    // Randomize initial position
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.top = -Math.random() * 200 + 'px';
  
    // Randomize animation duration and delay for variety
    leaf.style.animationDuration = Math.random() * 5 + 10 + 's';
    leaf.style.animationDelay = Math.random() * 5 + 's'; 
  
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
  
    leafContainer.appendChild(leaf);
  
    leaf.addEventListener('animationend', () => {
      leaf.remove();
      createLeaf(); // Create a new leaf to maintain the effect
    });
  }
  
  // Create initial leaves
  for (let i = 0; i < numberOfLeaves; i++) {
    createLeaf();
  }