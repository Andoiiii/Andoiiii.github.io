const counterData = [
  { tag: "Software Dev", src: "/slide_counter_img/developer.png" },
  { tag: "Math Lover", src: "/slide_counter_img/mafs.png" },
  { tag: "Math Tutor", src: "/slide_counter_img/tutor.png" },
  { tag: "Uni Student", src: "/slide_counter_img/unis.png" },
  { tag: "BCS/BBA", src: "/slide_counter_img/csbba.png" },
  { tag: "Nerd", src: "/slide_counter_img/nerd.png" },
  { tag: "OSRS Gamer", src: "/slide_counter_img/runescape.png" },
  { tag: "Dragon", src: "/slide_counter_img/derg.png" },
  { tag: "Bad Artist", src: "/slide_counter_img/artist.png" },
  { tag: "Archivist", src: "/slide_counter_img/archivist.png" },
];
const counterDataLength = counterData.length;

const genNewCounterEntry = (prev) => {
  let x = prev;
  while (x === prev) {
    x = Math.floor(Math.random() * counterDataLength);
  }
  return x;
};

export { counterData, genNewCounterEntry };
