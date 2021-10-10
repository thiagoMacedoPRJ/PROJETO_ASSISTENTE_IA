
 const startBtn = document.querySelector('#start'); // Esta Parte serve para pegar o ID do botão chamado start.
 const output = document.querySelector('#output'); // Esta Parte serve para pegar o ID de um p invisivel e posivelmente ativalo futuramente.




  // INICIO
          
    const recognition = new webkitSpeechRecognition(); // Criar o Reconhecimento de voz.

    recognition.interimResults = false; // não me recordo.

    recognition.lang = "pt-BR"; // Traduzir para lingua portuguesa.

    recognition.continuous = true; // Ficar Escutando.

    recognition.start(); // Iniciar Reconhecimento

    
    // onresult Serve para Pegar a fala pronunciada.
    
    recognition.onresult = (event) => 
    {
        for (let i = event.resultIndex; i < event.results.length; i++) 
          {

            if (event.results[i].isFinal) 
              {

                const content = event.results[i][0].transcript.trim(); // captura e guardar como string do que foi dito!

                // content e a string que gurda o que foi dito.

                console.log(content); // Mostrar dentro da string content
                
                if (content == "calica") // se content for igual a calica ele entra em um modo caso contrario faça outro.
                {
                  console.log("KK FUNFO VAI MIMIR OK =)"); // Mostrar uma Mensagem.
                  recognition.stop(); // Para o Reconhecimento.
                  output.textContent = content; // Envia o que tem dentro de content para o <p> texto invisivel ate o momento da chegada desta string.
                }
                else
                {
                  output.textContent = content; // Envia o que tem dentro de content para o <p> texto invisivel ate o momento da chegada desta string.
                }

              }

          }

    };


// FECHAMENTO



//startBtn.addEventListener('click', () => start());// Evento quando clicar no botão acionar o def start

//start(); // Iniciar o Reconhecimento por def
