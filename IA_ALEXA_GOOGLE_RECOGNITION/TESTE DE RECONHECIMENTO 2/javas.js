(() => {

        const startBtn = document.querySelector('#start');

        const output = document.querySelector('#output');



        function start() { // INICIO
          
          const recognition = new webkitSpeechRecognition();

          recognition.interimResults = true;

          recognition.lang = "pt-BR";

          recognition.continuous = true;

          recognition.start();
        
          // esta funcao funciona quando clica no botao
          
          recognition.onresult = (event) => 
          {
            for (let i = event.resultIndex; i < event.results.length; i++) 
            {

              if (event.results[i].isFinal) 
              {
                // captura e guardar como string do que foi dito!
               
                const content = event.results[i][0].transcript.trim();
                // content e a string que gurda, o que foi dito.
                output.textContent = content;
              }

            }

          };


        }; // FECHAMENTO



        startBtn.addEventListener('click', () => start());// Evento quando clicar no botão acionar o def start


      })();
