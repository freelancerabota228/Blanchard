(()=>{
var Tooltip = function (obj, objName) {

  this.content = obj.querySelector(`.${objName}__content`);
  const content = this.content;
  this.button = obj.querySelector(`.${objName}__button`)
  const button = this.button;

  // button.addEventListener('click', (event) => {
  //   obj.classList.toggle(`${objName}--open`)
  // })

  this.contentPosition = () => {
    let bodyWidth = document.body.offsetWidth;

    const tooltipContentCenter = content.offsetWidth / 2 - obj.offsetWidth / 2;

    const tooltipContentRight = obj.offsetLeft + content.offsetWidth / 2;

    content.style.right = `-${tooltipContentCenter}px`;

    if (tooltipContentRight > bodyWidth) {
      content.style.right = `-${tooltipContentCenter - (tooltipContentRight - bodyWidth) - obj.offsetWidth}px`
    }
    if (tooltipContentRight < content.offsetWidth) {
      content.style.right = `-${tooltipContentCenter + content.offsetWidth - tooltipContentRight}px`
    }
  }
  this.contentPosition();
  window.addEventListener('resize', ()=> {
    this.contentPosition()
  })
}


window.Tooltip = Tooltip

})()
