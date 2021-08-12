const modalcontainer= document.getElementById("modal-container");
function openModal(){
  modalcontainer.hidden=false;
  document.documentElement.style.position='fixed';
  document.documentElement.style.height="100%";
}

function closeModal(){
  modalcontainer.hidden=true;
  document.documentElement.style.position='';
  document.documentElement.style.height='';
}