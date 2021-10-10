(() => {

        const startBtn = document.querySelector('#start');

        const output = document.querySelector('#output');

        function start() {
          
          const recognition = new webkitSpeechRecognition();

          recognition.interimResults = true;

          recognition.lang = "pt-BR";

          recognition.continuous = true;

          recognition.start();
        
          // esta funcao funciona quando clica no botao
          recognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
              if (event.results[i].isFinal) {
                // captura stringo do que foi dito
                const content = event.results[i][0].transcript.trim();
                output.textContent = content;
              }
            }
          };
        };
        startBtn.addEventListener('click', () => start());
      })();