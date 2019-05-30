(function(){
  var grid;
  function init() {
    grid = new Minigrid({
      container: '.cards',
      item: '.card',
      gutter: 0
    });
    grid.mount();
  }
  
  // mount
  function update() {
    grid.mount();
  }

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', update);
})();