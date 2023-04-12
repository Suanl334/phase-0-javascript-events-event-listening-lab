const input = document.getElementById('button');

function addingEventListener() {
  alert('I am clicked!');
  input.addEventListener('click', addingEventListener);
}

