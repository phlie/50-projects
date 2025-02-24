const range = document.getElementById('range');

range.addEventListener('input', (event) => {
    const value = +event.target.value;
    const label = event.target.nextElementSibling;

    const rangeWidth = getComputedStyle(event.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    const max = +event.target.max;
    const min = +event.target.min;

    const left = (value * numRangeWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;
    label.innerHTML = value;
});

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
