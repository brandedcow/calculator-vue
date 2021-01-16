export default  function handleDragDown(el, binding) {
  const [start, end] = binding.value
  console.log(el)

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultDragOver() {
    console.log('start')
    document.addEventListener("dragover", preventDefault);
    document.addEventListener('mousedown', preventDefault)
  }

  function handleDrag(e) {
    const { pageY: y } = e;
    const windowHeight = e.view.innerHeight;
    console.log('dragging')

    if (y < windowHeight) {
      el.style.top = `calc(-100vh + ${y}px)`;
    }
  }

  function endDrag(e) {
    console.log('end')
    
    const { pageY: y } = e;
    const windowHeight = e.view.innerHeight;
    const threshold = windowHeight / 2;

    if (y > threshold) {
      el.style.top = end;
    } else {
      el.style.top = start;
    }

    document.removeEventListener("dragover", preventDefault);
    document.removeEventListener("mousedown", preventDefault);

  }

  el.addEventListener("dragstart", preventDefaultDragOver);
  el.addEventListener("drag", handleDrag);
  el.addEventListener("dragend", endDrag);
}