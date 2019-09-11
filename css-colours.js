import { colorsByLength, isValidColor, isDark, colorsByHue, colorsBySaturation, colorsByLightness, colorsByAll, colorsByVowels, colorsByHSL } from './colors';

function displayColoursBy(colorsToDisplay, el, toShow = 'hsl') {
  const spans = colorsToDisplay
    .map(
      color =>
        `<span class="color ${color.name} ${
        color.isDark ? 'dark' : ''
        }" style="background: ${color.name};">${color.name.toUpperCase()}<br>${color[toShow]}</span>`
    )
    .join('');
  el.innerHTML = spans;
}

function displayGradient(colorsToDisplay, el, toShow = 'hsl') {
  const spans = colorsToDisplay
    .map(
      (color, i) => {
        const lastColor = i > 0 ? colorsToDisplay[i - 1] : color;
       return `<span class="color ${color.name} ${
          color.isDark ? 'dark' : ''
        }" style="background: linear-gradient(to right, ${lastColor.hex} 0%,${color.hex} 100%);">${color.name.toUpperCase()}<br>${color[toShow].join('/')}</span>`
      }
        )
    .join('');
  el.innerHTML = spans;
}

// displayColours();
displayColoursBy(colorsByLength, document.querySelector('.by-length'));
displayColoursBy(colorsByHue, document.querySelector('.by-hue'));
displayColoursBy(colorsBySaturation, document.querySelector('.by-saturation'));
displayColoursBy(colorsByLightness, document.querySelector('.by-lightness'));
displayColoursBy(colorsByAll, document.querySelector('.by-all'));
displayGradient(colorsByVowels, document.querySelector('.by-gradient'));
displayColoursBy(colorsByVowels, document.querySelector('.by-vowels'), 'vowels');
displayColoursBy(colorsByHSL, document.querySelector(".by-hsl"));
