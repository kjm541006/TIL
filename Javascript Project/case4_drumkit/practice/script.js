;(function () {
  'use strict'

  const get = function (target) {
    return document.querySelector(target)
  }

  const getAll = function (target) {
    return document.querySelectorAll(target)
  }

  const keys = Array.from(getAll('.key'))

  console.log(keys)

  const soundsRoot = 'assets/sounds/'
  const drumSounds = [
    { key: 81, sound: 'clap.wav' },
    { key: 87, sound: 'crash.wav' },
    { key: 69, sound: 'hihat.wav' },
    { key: 65, sound: 'kick.wav' },
    { key: 83, sound: 'openhat.wav' },
    { key: 68, sound: 'ride.wav' },
    { key: 90, sound: 'shaker.wav' },
    { key: 88, sound: 'snare.wav' },
    { key: 67, sound: 'tom.wav' },
  ]

  const getAudioElement = (index) => {
    const audio = document.createElement('audio')
    audio.dataset.key = drumSounds[index].key
    audio.src = soundsRoot + drumSounds[index].sound
    return audio
  }

  const playSound = (keyCode) => {
    const $audio = get(`audio[data-key="${keyCode}"]`)
    const $key = get(`div[data-key="${keyCode}"]`)
    if (($audio, $key)) {
      $key.classList.add('playing')
      $audio.currentTime = 0
      $audio.play()
    }
  }

  const onKeydown = (e) => {
    playSound(e.keyCode)
  }

  const onMouseDown = (e) => {
    const keyCode = e.target.getAttribute('data-key')
    playSound(keyCode)
  }

  const onTransitionEnd = (e) => {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('playing')
    }
  }

  const init = () => {
    window.addEventListener('keydown', onKeydown)
    keys.forEach((key, index) => {
      const audio = getAudioElement(index)
      key.appendChild(audio)
      key.dataset.key = drumSounds[index].key
      key.addEventListener('click', onMouseDown)
      key.addEventListener('transitionend', onTransitionEnd)
    })
  }

  init()
})()
