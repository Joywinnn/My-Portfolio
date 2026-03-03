// Initialize EmailJS
    (function(){
        emailjs.init("4AovQSe_zuoR55WRH"); 
    })();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Real Email Send
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_lv1841h", "template_1wkimms", this)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Error: " + JSON.stringify(error));
        });
    });