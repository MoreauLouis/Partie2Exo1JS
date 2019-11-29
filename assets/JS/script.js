var img=document.getElementById ('img');
img.addEventListener ('mouseover',changeimage);
function changeimage () {
  img.src="assets/img/Deux.png";
};
img.addEventListener ('mouseout',backimage);
function backimage () {
  img.src="assets/img/Un.png";
};
