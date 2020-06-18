import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Somebody's Me", duration: "4:34" },
    { title: "Bad Liar", duration: "4:04" },
    { title: "Loose you", duration: "3:54" },
    { title: "Castle on the Hill", duration: "4:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
