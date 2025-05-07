// script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });
  
  function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    alert("Mensagem enviada com sucesso!");
    return true;
  }