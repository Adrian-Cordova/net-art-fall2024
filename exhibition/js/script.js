document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.getElementById('typed');
    
    new Typed(typedElement, {
      strings: [
        "Blurring the barriers between users and systems, this exhibition examines games that refuse to be contained within their windows. From Psycho Mantis in Metal Gear Solid, who reads your memory card, to Monika in Doki Doki Literature Club, who manipulates your desktop, these games challenge our assumptions about the boundaries of video games. Each piece demonstrates a unique approach to system and file manipulation. The game Lose/Lose deletes real files, Undertale incorporates save-state awareness, OneShot integrates desktop problem-solving, and clickclickclick.click includes browser surveillance. Together, they showcase breakthroughs in fourth-wall-breaking techniques across hardware, web browsers, memory cards, and digital files."
      ],
      typeSpeed: 15,            
      backSpeed: 20,          
      startDelay: 500,         
      cursorChar: "_",        
      showCursor: true,       
      backDelay: 1000,         
      onComplete: function() {
        typedElement.scrollIntoView({ behavior: "smooth", block: "end" });
      },
      preStringTyped: function() {
        typedElement.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    });
  });
  