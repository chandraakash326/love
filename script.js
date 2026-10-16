const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const backFromLove = document.getElementById('backFromLove');
const backFromSad = document.getElementById('backFromSad');
const questionCard = document.getElementById('questionCard');
const loveResponse = document.getElementById('loveResponse');
const sadResponse = document.getElementById('sadResponse');
const loveGallery = document.getElementById('loveGallery');

const localImages = [
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8485.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8486.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8487.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8489.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8491.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8492.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8493.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8494.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8495.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8496.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8497.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8499.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8500.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8502.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8503.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8504.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8506.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8525.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8528.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8531.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8532.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8533.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8534.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8535.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8542.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8543.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8546.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8548.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8549.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8550.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8554.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8555.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8556.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8557.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8558.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8559.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8560.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8561.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8562.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8563.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8564.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8565.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8566.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8567.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8568.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8571.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8577.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8578.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8579.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8580.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8583.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8584.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8585.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8586.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8587.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8588.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8589.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8595.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8596.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8597.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8598.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8603.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8604.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8606.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8607.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8608.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8609.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8610.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8611.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8612.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8613.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8614.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8615.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8616.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8617.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8618.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8621.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8622.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8623.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8624.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8625.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8626.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8627.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8628.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8630.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8633.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8634.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8635.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8636.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8637.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8638.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8639.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8640.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8641.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8650.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8651.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8652.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8653.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8654.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8655.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8658.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8659.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8660.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8661.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8663.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8664.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8665.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8668.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8670.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8671.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8672.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8673.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8674.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8675.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8676.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8677.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8681.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8682.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8684.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8685.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8686.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8687.JPG',
  'oct%2010%20birthday-20261016T125639Z-1-001/oct%2010%20birthday/IMG_8688.JPG'
].filter((image, index, array) => array.indexOf(image) === index);

const buildGallery = () => {
  if (!loveGallery) return;

  const galleryImages = [...localImages].sort(() => Math.random() - 0.5);

  loveGallery.innerHTML = galleryImages
    .map(
      (image, index) => `
        <figure class="photo-card" aria-label="Love memory ${index + 1}">
          <img src="${image}" alt="Love memory ${index + 1}" />
        </figure>
      `
    )
    .join('');
};

const showQuestion = () => {
  questionCard.classList.remove('hidden');
  loveResponse.classList.add('hidden');
  sadResponse.classList.add('hidden');
  loveResponse.classList.remove('visible');
  sadResponse.classList.remove('visible');
};

const showLove = () => {
  questionCard.classList.add('hidden');
  loveResponse.classList.remove('hidden');
  loveResponse.classList.add('visible');
  sadResponse.classList.add('hidden');
  sadResponse.classList.remove('visible');
};

const showSad = () => {
  questionCard.classList.add('hidden');
  sadResponse.classList.remove('hidden');
  sadResponse.classList.add('visible');
  loveResponse.classList.add('hidden');
  loveResponse.classList.remove('visible');
};

buildGallery();
yesBtn.addEventListener('click', showLove);
noBtn.addEventListener('click', showSad);
backFromLove.addEventListener('click', showQuestion);
backFromSad.addEventListener('click', showQuestion);
