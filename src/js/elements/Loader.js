class Loader {
  constructor() {
    this.loader = null;
  }

  init() {
    this.loader = document.createElement('div');
    this.loader.classList.add('loader_box');
    const movingBlock = document.createElement('div');
    movingBlock.classList.add('loader');
    this.loader.appendChild(movingBlock);
    const blockToRight = document.createElement('div');
    blockToRight.classList.add('loader--blockToRight');
    const blockToLeft = document.createElement('div');
    blockToLeft.classList.add('loader--blockToLeft');
    movingBlock.appendChild(blockToRight);
    movingBlock.appendChild(blockToLeft);
    return this.loader;
  }

  hide() {
    setTimeout(() => {
      if (!this.loader.classList.contains('hide_loader')) {
        this.loader.classList.add('hide_loader');
      }
    }, 0);
  }
}

export default Loader;
