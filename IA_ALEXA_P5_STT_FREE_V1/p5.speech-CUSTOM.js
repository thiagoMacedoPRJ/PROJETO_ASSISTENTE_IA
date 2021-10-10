    var a = false;

	function start()
	{
	
		console.log("KK ESTOU NO Reck 1");

		var myRec = new p5.SpeechRec(); // Criar reconhecimento
		myRec.continuous = true; // Habilitar o mode de escuta prolongada
		myRec.interimResults = true; // Habilitar o reconhecimento parcial (mais rápido)
		myRec.onResult = MostraResul; // Enviar Resultados para a função MostraResul()
		//myRec.onError = top; usar este metodo quando acontecer algum erro de navegador ou internet!!
		myRec.onEnd = top; // Informar aonde vai parar o reconhecimento no top =)
		myRec.start(); // Iniciar o reconhecimento com outras 2 funçoes habilitadas


		function MostraResul()
		{
			
			if(myRec.resultValue==true) 
			{
				resultado = myRec.resultString
				
				if(resultado == "Raquel")
				{
					myRec.continuous = false; // do continuous recognition
					myRec.interimResults = false; // allow partial recognition (faster, less accurate)
					a = true;
					myRec.stop();
				}
				else
				{
					console.log(resultado);
				}
			}
		}

		function top()
		{
			if (a == true)
			{
				console.log("DESATIVADO RECONHECIMENTO 1 DE VEZ KKKKK");
				a = false;
				return start2();
			}
			else
			{
				return start();
			}
		}

		function start2()
		{
			console.log("CHEGUEI NO Reck 2");

			var myRec2 = new p5.SpeechRec(); 
			myRec2.continuous = true; on
			myRec2.interimResults = true; 
			myRec2.onResult = MostraResul2;
			//myRec2.onError = top2;  usar este metodo quando acontecer algum erro de navegador ou internet!!
			myRec2.onEnd = top2;
			myRec2.start();
			function MostraResul2()
			{
				

				if(myRec2.resultValue==true) 
				{
					resultado2 = myRec2.resultString

					if(resultado2 == "Raquel")
					{
						myRec2.continuous = false; 
						myRec2.interimResults = false; 
						a = true;
						myRec2.stop();
					}
					else
					{
						console.log(resultado2);
					}
				}
			}

			function top2()
			{
				if (a == true)
				{
					console.log("DESATIVADO RECONHECIMENTO 2 DE VEZ KKKKK");
					a = false;
					return start();
				}
				else
				{
					return start2();
				}
			}
		}
	}
    start();