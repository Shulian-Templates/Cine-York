const SEAT_SIZE = 44;
const GAP = 5;
const CELL = SEAT_SIZE + GAP;
const AISLE = 30;
const PAD = 20;
const ROWS = 8;
const STAGE_HEIGHT = 40;
const STAGE_GAP = 20;

// layout: [0 1 2] aisle [3 4 5 6] aisle [7 8 9]
function colX(col) {
  if (col < 3) return PAD + col * CELL;
  if (col < 7) return PAD + 3 * CELL + AISLE + (col - 3) * CELL;
  return PAD + 3 * CELL + AISLE + 4 * CELL + AISLE + (col - 7) * CELL;
}

function rowY(row) {
  return PAD + row * CELL;
}

const svgWidth = PAD + 3 * CELL + AISLE + 4 * CELL + AISLE + 3 * CELL + PAD;
const svgHeight = PAD + ROWS * CELL + STAGE_GAP + STAGE_HEIGHT + PAD;

const svg = document.getElementById('teatro');
svg.setAttribute('width', svgWidth);
svg.setAttribute('height', svgHeight);
svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

const NS = 'http://www.w3.org/2000/svg';

for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < 10; col++) {
    const seatNum = (ROWS - 1 - row) * 10 + col + 1;
    const x = colX(col);
    const y = rowY(row);

    const rect = document.createElementNS(NS, 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', SEAT_SIZE);
    rect.setAttribute('height', SEAT_SIZE);
    rect.setAttribute('data-asiento', seatNum);
    rect.classList.add('asiento');
    svg.appendChild(rect);

    const label = document.createElementNS(NS, 'text');
    label.setAttribute('x', x + SEAT_SIZE / 2);
    label.setAttribute('y', y + SEAT_SIZE / 2);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('dominant-baseline', 'central');
    label.classList.add('etiqueta-asiento');
    label.textContent = seatNum;
    svg.appendChild(label);
  }
}

const stageY = PAD + ROWS * CELL + STAGE_GAP;
const stage = document.createElementNS(NS, 'rect');
stage.setAttribute('x', PAD);
stage.setAttribute('y', stageY);
stage.setAttribute('width', svgWidth - PAD * 2);
stage.setAttribute('height', STAGE_HEIGHT);
stage.setAttribute('id', 'escenario');
svg.appendChild(stage);

const stageLabel = document.createElementNS(NS, 'text');
stageLabel.setAttribute('x', svgWidth / 2);
stageLabel.setAttribute('y', stageY + STAGE_HEIGHT / 2);
stageLabel.setAttribute('text-anchor', 'middle');
stageLabel.setAttribute('dominant-baseline', 'central');
stageLabel.textContent = 'ESCENARIO';
svg.appendChild(stageLabel);
