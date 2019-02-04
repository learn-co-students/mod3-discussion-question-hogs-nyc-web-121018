/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

document.addEventListener("DOMContentLoaded", function(event) {

  const mainWrapper = document.getElementById('main-wrapper')

  mainWrapper.addEventListener('click', e => {
    const mainText = document.getElementById('main-text')
    const github = document.getElementById('github-logo')
    const about = document.getElementById('about-logo')
    const pholder = document.getElementById('pholder-logo')

    switch (e.target.id) {
      case "main-text":

        delayedFadeOut(about, MINDELAY)
        delayedFadeOut(github, MINDELAY)
        delayedFadeOut(pholder, SHORTRANGE)
        delayedFadeOut(mainText, LONGRANGE)
        break;
      case "github-logo":

        delayedFadeOut(about, MINDELAY)
        delayedFadeOut(mainText, MINDELAY)
        delayedFadeOut(pholder, SHORTRANGE)
        delayedFadeOut(github, LONGRANGE)
        break;
      case "about-logo":
        delayedFadeOut(github, MINDELAY)
        delayedFadeOut(mainText, MINDELAY)
        delayedFadeOut(pholder, SHORTRANGE)
        delayedFadeOut(about, LONGRANGE)
        break;
      case "pholder-logo":
        delayedFadeOut(github, MINDELAY)
        delayedFadeOut(mainText, MINDELAY)
        delayedFadeOut(about, SHORTRANGE)
        delayedFadeOut(pholder, LONGRANGE)
        break;
      }
  })
});


function delayedFadeOut(div, range) {
  // Your solution here
  setTimeout(() => {
    console.log("We're here!");
    fadeOut(div)
  }, range)

}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout(() => {
    console.log("We're in fade in!");
    fadeIn(div)
  }, range)

}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeOut(div, 1000)
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
