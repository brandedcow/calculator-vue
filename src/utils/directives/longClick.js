export default function longClick(el,binding) {
  const func = binding.value

  let timeoutId

  function startClick() {
    timeoutId = setTimeout(() => {
      func()
    }, 800)
  }

  function stopClick() {
    clearInterval(timeoutId)
  }

  el.addEventListener('mousedown', startClick)
  el.addEventListener('mouseup', stopClick)
}