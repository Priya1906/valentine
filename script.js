// Get elements
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button click → show YAY + GIF
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>YAY!!! 🎉💖</h1>
    <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="250"/>
  `;
});
