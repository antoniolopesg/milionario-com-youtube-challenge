(() => {
  const containerMain = document.querySelector('.container__main')
  const containerSecondary = document.querySelector('.container__second')

  setTimeout(() => {
    containerMain.classList.toggle('hide')
    containerSecondary.classList.toggle('hide')
  }, 5000)
})()
