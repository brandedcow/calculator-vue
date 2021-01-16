export default  function handleDragDown(el, binding) {
  const [start, end] = binding.value

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultDragOver() {
    document.addEventListener("dragover", preventDefault);
  }

  function handleDrag(e) {
    const { pageY: y } = e;
    const windowHeight = e.view.innerHeight;

    if (y < windowHeight) {
      el.style.top = `calc(-100vh + ${y}px)`;
    }
  }

  function endDrag(e) {
    
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
  el.addEventListener('click', preventDefaultDragOver)
  el.addEventListener("dragend", endDrag);
}