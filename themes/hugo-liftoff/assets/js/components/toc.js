function toggleToc() {
  var tocContainer = document.querySelector('aside.toc');
  var tocContents = document.getElementById('js-toc-contents');
  var singlePostContents = document.querySelector('.single-post-contents');
  
  if (tocContainer && tocContents) {
    // Check if the ToC actually has any content
    if (tocContents.querySelector('ul') === null || tocContents.querySelector('ul').children.length === 0) {
      console.log('ToC is empty, hiding container');
      tocContainer.style.display = 'none';
      if (singlePostContents) {
        singlePostContents.classList.add('full-width');
      }
    } else {
      console.log('ToC has content, setting up toggle');
      var tocToggle = document.getElementById('js-toc-toggle');
      if (tocToggle) {
        tocToggle.addEventListener('click', function() {
          tocContents.classList.toggle('toc-contents--active');
        });
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', toggleToc);

module.exports = {
  toggleToc: toggleToc
};