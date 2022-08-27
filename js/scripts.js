function displayJsSuggestion(event) {
  event.preventDefault();
  const jsResponse = document.getElementById("js-yes/no").value;
  let jsMessage;
  if (jsResponse === "Yes") {
    jsMessage = "It's great that you already know some Javascript, but there's always more to learn. Stay curious and keep exploring!";
  }

  else {
    jsMessage = "You should definitely learn Javascript. It is essential to all web development, whether it's front end or back end. Plus... it's a great entrypoint for encountering the underlying principles that span across all coding languages." 
  }

  document.getElementById("js-response").innerText= jsMessage
}

function displayBackEndSuggestion() {
  const asparagusAnswer = document.querySelector("asparagus#input[name='asparagus']:checked").value;
  document.getElementById("back-end-response").innerText = asparagusAnswer;
}


function submitForms() {
  const asparagusForm = document.querySelector("form#asparagus");
  asparagusForm.submit();
  asparagusForm.addEventListener("submit" , function(event) {
    event.preventDefault();
  });
  }

window.addEventListener("load", function() {
  const jsForm = document.getElementById("js-select-form");
  jsForm.addEventListener("submit", displayJsSuggestion);
   
  document.getElementById("show-me").addEventListener("click", function() {
    submitForms();
    displayBackEndSuggestion();
  });

});