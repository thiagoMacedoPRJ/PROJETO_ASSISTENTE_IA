
 const startBtn = document.querySelector('#start'); // Esta Parte serve para pegar o ID do botão chamado start.
 const output = document.querySelector('#output'); // Esta Parte serve para pegar o ID de um p invisivel e posivelmente ativalo futuramente.


 var a = 1 // Criação de função usada mais pra frente 
 var b = 1 // Criação de função usada mais pra frente 


  // INICIO
  function start(a,b) // Criação de um Def que receber as funçoes a é b que equvalem a 1
  {
    console.log("Estou no 1"); // diz em qual reconhecimento está

    const recognition = new webkitSpeechRecognition(); // Criar o Reconhecimento de voz.

	  recognition.lang = "pt-BR"; // Traduzir para lingua portuguesa.

    recognition.interimResults = false; // pegar o resultado rápido sem está correto até acertar.

    recognition.continuous = true; // Ficar Escutando Até Certo tempo após Iniciar o Reconhecimento.

    recognition.start(); // Iniciar Reconhecimento.

    //console.log(recognition); // Serve para ver as funçoes do reconhecimento.

    // onresult Serve para Pegar a fala pronunciada.
      recognition.onresult = (event) => 
    {
        
      // Entra em um laço de repetição para ficar em liguagem humana para entender.
        for (let i = event.resultIndex; i < event.results.length; i++) 
          {
            if (event.results[i].isFinal) 
              {
                // content e o nome da string que gurda o que foi dito.
                const content = event.results[i][0].transcript.trim(); // captura e guardar como string o que foi pronunciado!

                console.log(content); // Mostrar o que tem dentro da string content

                if (content == "calica") // se content for igual ao nome escolhe ex: "calica", ele entra em um modo if, ou caso contrario faça outra coisa.
                {
                  a = a-a // A função "a" server para dizer ao loop o momento de parar, que é igual a " 0 ".
                  b = b+1

                  recognition.stop(); // Esta Função encerra o primeiro reconhecimento de voz.
                  
                  console.log("KK FUNFO VAI MIMIR OK =)"); // Mostrar uma Mensagem.
                  
                  output.textContent = content; // Envia o que tem dentro de content para o <p> texto invisivel, ate o momento da chegada desta string.

                  return start2(a, b); // Esta função de Retorno Server para ir para o proximo reconhecimento de voz que server para efetuar as reais intençoes.
                }
                else
                {
                  output.textContent = content; // Envia o que tem dentro de content para o <p> texto invisivel ate o momento da chegada desta string.
                }
              }
            }
          };

      // Esta função somente e  executado quando o serviço de reconhecimento de voz for Desconectado//Desativado ou não funciona. e funciona quando o Fim do Evento for disparado.
      recognition.onend = function() 
      {
        // o if server para entrar em um loop com o 1 reconhecimento.
        if(a >= 1) // se "a" for maior ou igual a 1.
        {
          return start(a,b); // retorna novamente ao reconhecimento 1.
        }
        else // Caso Contrario.
        {
          console.log("Volto Mais Nem Com REZA BRABA KK"); // Mostre esta Mensagem.
        }
      
      }
  
    }
  
// FECHAMENTO


function start2(a,b) // Criação de um Def que receber as funçoes a é b que equvalem a 1
  {
    console.log("Estou no 2"); // diz em qual reconhecimento está

    const recognition2 = new webkitSpeechRecognition(); // Criar o Reconhecimento de voz.

    recognition2.interimResults = false; // pegar o resultado rápido sem está correto até acertar.

    recognition2.lang = "pt-BR"; // Traduzir para lingua portuguesa.

    recognition2.continuous = true; // Ficar Escutando.

    recognition2.start(); // Iniciar Reconhecimento.

    //console.log(recognition); // Serve para ver as funçoes do reconhecimento.

    // onresult Serve para Pegar a fala pronunciada.
      recognition2.onresult = (event) => 
    {
        
      // Entra em um laço de repetição para ficar em liguagem humana para entender.
        for (let i = event.resultIndex; i < event.results.length; i++) 
          {
            if (event.results[i].isFinal) 
              {
                // content e o nome da string que gurda o que foi dito.
                const content2 = event.results[i][0].transcript.trim(); // captura e guardar como string o que foi pronunciado!

                console.log(content2); // Mostrar o que tem dentro da string content

                if (content2 == "calica") // se content for igual ao nome escolhe ex: "calica", ele entra em um modo if, ou caso contrario faça outra coisa.
                {
                  b = b-b // A função "a" server para dizer ao loop o momento de parar, que é igual a " 0 ".
                  a = a+1

                  recognition2.stop(); // Esta Função encerra o primeiro reconhecimento de voz.
                  
                  console.log("KK FUNFO VAI MIMIR OK =)"); // Mostrar uma Mensagem.
                  
                  output.textContent = content2; // Envia o que tem dentro de content para o <p> texto invisivel, ate o momento da chegada desta string.

                  return start(a, b); // Esta função de Retorno Server para ir para o proximo reconhecimento de voz que server para efetuar as reais intençoes.
                }
                else
                {
                  output.textContent = content2; // Envia o que tem dentro de content para o <p> texto invisivel ate o momento da chegada desta string.
                }
              }
            }
          };

      // Esta função somente e  executado quando o serviço de reconhecimento de voz for Desconectado//Desativado ou não funciona. e funciona quando o Fim do Evento for disparado.
      recognition2.onend = function() 
      {
        // o if server para entrar em um loop com o 1 reconhecimento.
        if(b >= 1) // se "b" for maior ou igual a 1.
        {
          return start(a,b); // retorna novamente ao reconhecimento 1.
        }
        else // Caso Contrario.
        {
          console.log("Como tbm n sei ;-;"); // Mostre esta Mensagem.
        }
      }
    }


start(a, b); // Iniciar o Reconhecimento por def

//startBtn.addEventListener('click', () => start());// Evento quando clicar no botão acionar o def start
