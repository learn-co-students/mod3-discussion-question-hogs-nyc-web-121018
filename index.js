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

let centerText = document.querySelector('#center-text')
let githubLogo = document.querySelector('#github-logo')
let aboutLogo = document.querySelector('#about-logo')
let pholderLogo = document.querySelector('#pholder-logo')

let mainWrapper = document.querySelector('#main-wrapper')

mainWrapper.addEventListener('click', e => {


  // if(e.target.id === ''){
  //   // console.log(e.target);
  //   delayedFadeOut(centerText, 5000)
  //   delayedFadeOut(githubLogo, 4000)
  //   delayedFadeOut(aboutLogo, 3000)
  //   delayedFadeOut(pholderLogo, 2000)
  // }
  // if(e.target.id === 'github-logo'){
  //
  // }
  // if(e.target.id === 'about-logo'){
  //
  // }
  // if(e.target.id === 'pholder-logo'){
  //
  // }
  //
  // // console.log(e.target);
  // // if (e.target === centerText){
  // //   console.log('meow');
  //
  // // }
  // // if (e.target === githubLogo) {
  // //
  // // }
  // // if (e.target === aboutLogo) {
  // //
  // // }
  // // if (e.target === pholderLogo) {
  // //
  // // }

})

function delayedFadeOut(div, range) {
  setTimeout(() => {
    fadeOut(div)
  }, range)
}

function delayedFadeIn(div, range) {
  setTimeout(() => {
    fadeIn(div)
  }, range)
}

function fadeAllOut(el, group) {
  // Your solution here
  // let clickedElement;
  // mainWrapper.addEventListener('click', e => {
  //   clickedElement = e.target
  // })
  let elSpot = group.indexOf(el)

  // console.log(el);

  group.splice(elSpot, 1)
  // console.log(group);

  delayedFadeOut(el, 700)
  i = 100

  group.forEach(div => {
    // console.log(div);
    i+= 100
    delayedFadeOut(div, i)
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div, 1000)
  })
}
