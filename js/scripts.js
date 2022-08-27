
//function called on "load"

window.addEventListener("load", function() {
  const jsForm = document.getElementById("js-select-form");
  jsForm.addEventListener("submit", displayJsSuggestion);
   
  document.getElementById("show-me").addEventListener("click", function() {
    submitForms();
    displayBackEndSuggestion();
  });

});

//function to submit all 7 radio-button forms, called by eventListener on bottom section "click" button

function submitForms() {
  const q1Form = document.getElementById("q1");
  const q2Form = document.getElementById("q2");
  const q3Form = document.getElementById("q3");
  const q4Form = document.getElementById("q4");
  const q5Form = document.getElementById("q5");
  const q6Form = document.getElementById("q6");
  const q7Form = document.getElementById("q7");

  q1Form.requestSubmit();
  q1Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });

  q2Form.requestSubmit();
  q2Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });

  q3Form.requestSubmit();
  q3Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });

  q4Form.requestSubmit();
  q4Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });

  q5Form.requestSubmit();
  q5Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });

  q6Form.requestSubmit();
  q6Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });

  q7Form.requestSubmit();
  q7Form.addEventListener("submit" , function(event) {
    event.preventDefault();
  });
}

//display functions

  //top section: JS

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

  //bottom section: back-end

function displayBackEndSuggestion() {
  const q1Answer = parseInt(document.querySelector("input[name='q1']:checked").value);
  const q2Answer = parseInt(document.querySelector("input[name='q2']:checked").value);
  const q3Answer = parseInt(document.querySelector("input[name='q3']:checked").value);
  const q4Answer = parseInt(document.querySelector("input[name='q4']:checked").value);
  const q5Answer = parseInt(document.querySelector("input[name='q5']:checked").value);
  const q6Answer = parseInt(document.querySelector("input[name='q6']:checked").value);
  const q7Answer = parseInt(document.querySelector("input[name='q7']:checked").value);
  
  let tally = (q1Answer + q2Answer + q3Answer + q4Answer + q5Answer + q6Answer + q7Answer);
  
  document.getElementById("back-end-response").innerText = (tally.toString());
}




