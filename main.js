window.onload = function() {
  const faceElement = document.getElementById("faces");
  const currentFace = store.getState().face;
  faceElement.innerText = currentFace;

  document.querySelector("#happy").addEventListener("click", function() {
    store.dispatch({ type: 'HAPPY', payload: "ʘ‿ʘ"});
  });

  document.querySelector("#sad").addEventListener("click", function() {
    store.dispatch({ type: 'SAD', payload: "⊙︿⊙"});
  });

  document.querySelector("#angry").addEventListener("click", function() {
    store.dispatch({ type: 'ANGRY', payload: "ノಠ_ಠノ"});
  });

  document.querySelector("#confused").addEventListener("click", function() {
    store.dispatch({ type: 'CONFUSED', payload: "(◎_◎;)"});
  });

  document.querySelector("#random").addEventListener("click", function() {
    let randomObj = random();
    console.log(random());
    store.dispatch(randomObj);
  });
}