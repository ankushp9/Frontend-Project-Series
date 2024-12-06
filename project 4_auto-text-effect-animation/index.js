const containerEl = document.querySelector(".container");

const careers = [
  "I excel in leadership, foster collaboration, drive innovation, plan with strategy, and deliver flawless execution.",
  "I am passionate about fostering growth, creating impactful solutions, encouraging teamwork, and driving creativity.",
  "I ensure efficiency, adapt to challenges, maintain clear communication, uphold integrity, and focus on results.",
  "I bring vision and resilience to drive transformation, continuous development, and deliver excellence.",
  "I combine empathy with dedication to solve problems, enable progress, and inspire innovation."
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === careers[careerIndex].length) {
    setTimeout(() => {
      careerIndex++;
      characterIndex = 0;
      if (careerIndex === careers.length) {
        careerIndex = 0;
      }
      updateText();
    }, 2000); // Delay of 2 seconds before moving to next sentence
  } else {
    setTimeout(updateText, 150); // Adjust typing speed
  }
}
