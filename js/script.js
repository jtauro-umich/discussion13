let colorPicker = document.querySelector('#primary-picker');

colorPicker.addEventListener("change", function(event) {
  let color = event.target.value;

  let body = document.querySelector('body');
  body.style.backgroundColor = color;
});

// https://docs.google.com/presentation/d/1bfA4EKiZCbcKedYG1ASQlZ9MES36XIRhAAXd6iB_2no/edit
