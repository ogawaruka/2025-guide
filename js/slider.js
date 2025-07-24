const imageSets = {
  mikan: ['img/食.jpg', 'img/みかん鍋.jpg', 'img/黄色いガードレール .jpg'],
  kawara: ["img/瓦そば2.jpg" , "img/瓦そば.jpg" ],      // ← 1枚だけ
  fugu: ['img/ふく.jpg' , 'img/フグ.jpg']      // ← 1枚だけ
};

const currentIndices = {};
Object.keys(imageSets).forEach(name => {
  currentIndices[name] = 0;
});

// 初期化処理：矢印を非表示にする
window.addEventListener('DOMContentLoaded', () => {
  Object.keys(imageSets).forEach(name => {
    const images = imageSets[name];
    if (images.length <= 1) {
      const slider = document.querySelector(`[data-slider="${name}"]`);
      if (slider) {
        const arrows = slider.querySelectorAll('.arrow');
        arrows.forEach(arrow => arrow.style.display = 'none');
      }
    }
  });
});

function nextSlide(name) {
  const imgs = imageSets[name];
  currentIndices[name] = (currentIndices[name] + 1) % imgs.length;
  document.getElementById(`${name}-slide`).src = imgs[currentIndices[name]];
}

function prevSlide(name) {
  const imgs = imageSets[name];
  currentIndices[name] = (currentIndices[name] - 1 + imgs.length) % imgs.length;
  document.getElementById(`${name}-slide`).src = imgs[currentIndices[name]];
}
