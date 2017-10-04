function showMap(mapName) {
  var maps = document.querySelectorAll(".map");
  for (var i = 0; i < maps.length; i++) {
    if (maps[i].id == mapName) {
      maps[i].classList.remove("hidden");
    } else {
      maps[i].classList.add("hidden");
    }
  }
}