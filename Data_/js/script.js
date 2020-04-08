function Data_aniversario() {
    var data = prompt("Digite a data completa do seu aniversário", "Exemplo(02/01/2003)");
    if (data.length < 10 || data.length > 10) {
      alert("Você deve inserir a data completa");
    } else {
      var dia = data.substring(0, 2);
      var mes = data.substring(3, 5);
      var ano = data.substring(6, 10);
  
      switch (mes) {
        case "01":
          mes = "Janeiro";
          break;
  
        case "02":
          mes = "Fevereiro";
          break;
  
        case "03":
          mes = "Março";
          break;
  
        case "04":
          mes = "Abril";
          break;
  
        case "05":
          mes = "Maio";
          break;
  
        case "06":
          mes = "Junho";
          break;
  
        case "07":
          mes = "Julho";
          break;
  
        case "08":
          mes = "Agosto";
          break;
  
        case "09":
          mes = "Setembro";
          break;
  
        case "10":
          mes = "Outubro";
          break;
  
        case "11":
          mes = "Novembro";
          break;
  
        case "12":
          mes = "Dezembro";
          break;
  
        default:
          mes = "inexistente";
          break;
      }
  
      
       alert ("Você nasceu no dia " + dia + " de " + mes + " de " + ano);
    }
  }