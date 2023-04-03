const srcUrlPrefix = 'https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/';
Reveal.initialize({
  hash: true,
  center: true,
  slideNumber: true,
  showNotes: false,
  margin: 0.1,
  preloadIframes: true,
  plugins: [RevealHighlight],
  pdfSeparateFragments: true,
});

// add HighlightJS-badge (options are optional)
var options = {
  copyIconContent: '📄',
  checkIconContent: '✅',
};
window.highlightJsBadge(options);

if (window.location.search == '?print-pdf') {
  var uncounted = document.querySelectorAll("[data-visibility='uncounted']");
  uncounted.forEach((node) => {
    node.parentNode.classList.add('no-print');
  });
}
