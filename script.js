// 添加动画效果，例如在鼠标悬停时改变背景色

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('mouseover', () => {
    paragraph.style.backgroundColor = '#f0f0f0'; 
  });
  paragraph.addEventListener('mouseout', () => {
    paragraph.style.backgroundColor = 'white'; 
  });
});
