// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager({ 'x': 1, 'y': 21 }, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
