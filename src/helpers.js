// You can render your Redux state to anything, not just a React DOM
// Here's some speech utternace helpers to use in the playground
var synth = window.speechSynthesis;

function speak(text) {
  var utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
