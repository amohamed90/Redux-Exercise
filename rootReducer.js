const INITIAL_STATE = { face: "(━☞´◔‿ゝ◔`)━☞"}
let mood;

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'HAPPY':
      mood = "happy";
      return { face: action.payload}

    case 'SAD':
      mood = "sad";
      return { face: action.payload}

    case 'ANGRY':
      mood = "angry";
      return { face: action.payload}

    case 'CONFUSED':
      mood = "confused";
      return { face: action.payload}

    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);
const faceBody = document.getElementById("faces");

store.subscribe(() => {
  faceBody.innerText = store.getState().face;
  faceBody.classList.toggle(mood);
});