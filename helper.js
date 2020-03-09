function random () {
  console.log("running")
  let moods = [{ type: 'HAPPY', payload: "ʘ‿ʘ" }, { type: 'SAD', payload: "⊙︿⊙" },
    { type: 'ANGRY', payload: "ノಠ_ಠノ" }, { type: 'CONFUSED', payload: "(◎_◎;)" }]

    let random = Math.floor(Math.random() * moods.length);
    return moods[random];
}