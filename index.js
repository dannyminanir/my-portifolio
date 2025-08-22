
    const chatForm = document.getElementById("chatForm");
    const chatBox = document.getElementById("chat-box");

    chatForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const userMessage = document.getElementById("userMessage").value.trim();
      if (userMessage) {
        chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        
        // Simple AI logic (MVP)
        let aiReply = "I’m still learning! But soon, I’ll answer with more details about Daniel.";
        if (userMessage.toLowerCase().includes("skills")) {
          aiReply = "Daniel is skilled in React.js, Spring Boot, and building scalable applications.";
        } else if (userMessage.toLowerCase().includes("projects")) {
          aiReply = "Daniel has worked on an Online Skill Training Platform, Mission Management System, and Portfolio Website.";
        } else if (userMessage.toLowerCase().includes("contact")) {
          aiReply = "You can reach Daniel at minanidanny28@gmail.com 📩";
        }
         else if (userMessage.toLowerCase().includes("name")) {
          aiReply = "My name is Minani daniel";
        }
 else if (userMessage.toLowerCase().includes("hi")) {
          aiReply = "Hi how are doing?";
        }
        chatBox.innerHTML += `<p><strong>AI:</strong> ${aiReply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById("userMessage").value = "";
      }
    });
  