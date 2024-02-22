document.getElementById("ab").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("ed").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("pr").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("co").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });