  const carreauxSrc = "Carr\\";

  const heartSrc = "Coeu\\";

  const spadesSrc = "Piqu\\";

  const clubsSrc = "Tref\\";


  const cards = [carreauxSrc, heartSrc, spadesSrc, clubsSrc];


  var carreaux = ['01_of_diam.svg', '02_of_diam.svg', '03_of_diam.svg', '04_of_diam.svg', '05_of_diam.svg',
                     '06_of_diam.svg', '07_of_diam.svg','Ja_of_diam.svg', 'Ki_of_diam.svg', 'Qu_of_diam.svg'];

  var hearts = ['01_of_hear.svg', '02_of_hear.svg', '03_of_hear.svg', '04_of_hear.svg', '05_of_hear.svg',
                     '06_of_hear.svg', '07_of_hear.svg','Ja_of_hear.svg', 'Ki_of_hear.svg', 'Qu_of_hear.svg'];


  var spades = ['01_of_spad.svg', '02_of_spad.svg', '03_of_spad.svg', '04_of_spad.svg', '05_of_spad.svg',
                     '06_of_spad.svg', '07_of_spad.svg','Ja_of_spad.svg', 'Ki_of_spad.svg', 'Qu_of_spad.svg'];

  var clubs = ['01_of_club.svg', '02_of_club.svg', '03_of_club.svg', '04_of_club.svg', '05_of_club.svg',
                     '06_of_club.svg', '07_of_club.svg','Ja_of_club.svg', 'Ki_of_club.svg', 'Qu_of_club.svg'];



  // a --> jack 

  // u --> queen

  // i --> king



  var randomNumber, randomNumberCard;
    
var AllCard = 52;
    

  var img1 = document.querySelector("#card1");
  var img2 = document.querySelector("#card2");
  var img3 = document.querySelector("#card3");
  var img4 = document.querySelector("#card4");

  var img5 = document.querySelector("#card_1");
  var img6 = document.querySelector("#card_2");
  var img7 = document.querySelector("#card_3");
  var img8 = document.querySelector("#card_4");

  var mekle1 = document.querySelector("#mekle0");
  var mekle2 = document.querySelector("#mekle1");
  var mekle3 = document.querySelector("#mekle2");
  var mekle4 = document.querySelector("#mekle3");



  // Generate random cards


  function init() {
      
      if(AllCard <= 0){
          
          //alert("le jeux est termine");
          document.getElementById('id01').style.display='block';
          AllCard = 52;
          return;
          //window.close();
      }
      
      
      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img1.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
      AllCard--;
      
      //choseCard(randomNumberCard).splice(randomNumber,1);
      
      

      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img2.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;
      //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img3.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

      //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img4.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
     AllCard--;

      //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img5.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
         AllCard--;


      //choseCard(randomNumberCard).splice(randomNumber,1);



      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img6.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
          
      AllCard--;

      //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img7.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
     AllCard--;

      //choseCard(randomNumberCard).splice(randomNumber,1);
      

      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      img8.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

      //choseCard(randomNumberCard).splice(randomNumber,1);





  }


    // Generate random mekle 
    
  function mekle() {

      
      
      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      mekle1.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
AllCard--;
      //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      mekle2.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
AllCard--;

    //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      mekle3.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
AllCard--;

      //choseCard(randomNumberCard).splice(randomNumber,1);


      randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
      randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
      mekle4.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
AllCard--;
     // choseCard(randomNumberCard).splice(randomNumber,1);

  }


    init();

    mekle();





// gives new cards to players

  function restart() {

      init();

      for (var i = 0; i < 4; i++) {


          $("#card" + (i + 1)).fadeIn();
          $("#card_" + (i + 1)).fadeIn();

          

      }

player1Cards = [img1.src[img1.src.length - 13], img2.src[img2.src.length - 13], img3.src[img3.src.length - 13], img4.src[img4.src.length - 13]];
player2Cards = [img5.src[img5.src.length - 13], img6.src[img6.src.length - 13], img7.src[img7.src.length - 13], img8.src[img8.src.length - 13]];

      search(player1Cards);
      search(player2Cards);
      
  }

    


  
  var player1Cards, player2Cards, mekle;


  console.log("carreaux - > " + carreaux);
  console.log("hearts -> " + hearts);
  console.log("spades -> " + spades);
  console.log("clubs -> " + clubs);
    
    
// add the random card to players and mekle arrays


player1Cards = [img1.src[img1.src.length - 13], img2.src[img2.src.length - 13], img3.src[img3.src.length - 13], img4.src[img4.src.length - 13]];
  console.log("player 1 -> " + player1Cards);


player2Cards = [img5.src[img5.src.length - 13], img6.src[img6.src.length - 13], img7.src[img7.src.length - 13], img8.src[img8.src.length - 13]];
  console.log("player 2 -> " + player2Cards);


mekle = [mekle1.src[mekle1.src.length - 13], mekle2.src[mekle2.src.length - 13], mekle3.src[mekle3.src.length - 13], mekle4.src[mekle4.src.length - 13]];
  console.log("makle -> " + mekle);


    function search(playerCards){
        
        
        for(var i = 0 ; i < playerCards.length ; i++){
            
           
            switch(playerCards[i]){
                    
                    
                case '0':playerCards[i] = '10';
                    break;
                
                case 'a':playerCards[i] = '9';
                    break;
                case 'u':playerCards[i] = '8';
                    break;
                case 'i':playerCards[i] = '10';
                    break;
                    
                    
            }
        
        }
    }

        search(player1Cards);
        search(player2Cards);
        search(mekle);

console.log(player1Cards);
console.log(player2Cards);
console.log(mekle);
    
  var player1Score = 0,
      player2Score = 0;

  var s1 = document.querySelector("#player1-score");
  var s2 = document.querySelector("#player2-score");

  var player1Turn = true,
      player2Turn = false;


  var mekleDisplay = document.querySelector("#mekle");
    
  var bool;






  function display(i, j, playerCards, cardId) {

      $("#" + cardId).fadeOut("slow");

      playerCards[i] = "Removed";


      mekle[j] = "Removed";


      $("#mekle" + j).fadeOut("slow");
      

      bool = false;
      
      search(mekle);


  }


  function addNode(i, j, id, playerCards, cardId,direction) {

      var image = document.getElementById(id);

      mekle.push(playerCards[i]);

      playerCards[i] = "Removed";

      document.querySelector("#" + cardId).style.display = "none";

      var node = document.createElement("img");

      node.setAttribute("src", image.src);

      node.setAttribute("id", "mekle" + j);

      node.classList.add("rotateimg180");

      node.classList.add("w3-animate-"+direction);

      mekleDisplay.appendChild(node);

      search(mekle);
      
  }

 




function player1(i, id) {



      if (player1Turn) {
          
        
            
          bool = true;
          
          var cardId = "card"+(i + 1);

          for (var j = 0; j < mekle.length; j++) {

              if(player1Cards[i] == mekle[j]){
                  
                  var cardId = "card"+(i + 1);
    
                  display(i, j, player1Cards, cardId);
                  
                  
                  player1Score += 1;

                      s1.innerHTML = player1Score.toString();
                  
                  break;
                  
                  
              }
              
              
              for (var k = j + 1; k < mekle.length; k++) {




                  if (Number(mekle[j]) + Number(mekle[k]) == player1Cards[i]) {


                      
                      $("#card" + (i + 1)).fadeOut("slow");

                      player1Cards[i] = "Removed";


                      mekle[j] = "Removed";

            
                      $("#mekle" + j).fadeOut("slow");


                      mekle[k] = "Removed";

            
                      $("#mekle" + k).fadeOut("slow");

                    
                      player1Score += 1;

                      s1.innerHTML = player1Score.toString();

                      bool = false;

                      break;

                  }

              }



          }


          if (bool) {

             
              
              addNode(i, j, id, player1Cards,cardId,"top");

          }

      }



      player1Turn = false;
      player2Turn = true;

  }


function player2(i, id) {



      if (player2Turn) {
          
            
            
          bool = true;
          
          var cardId = "card_"+(i + 1);

          for (var j = 0; j < mekle.length; j++) {

              if(player2Cards[i] == mekle[j]){
                  
                  var cardId = "card_"+(i + 1);
    
                  display(i, j, player2Cards, cardId);
                  
                  player2Score += 1;

                      s2.innerHTML = player2Score.toString();
                  
                  break;
                  
                  
              }
              
              
              for (var k = j + 1; k < mekle.length; k++) {




                  if (Number(mekle[j]) + Number(mekle[k]) == player2Cards[i]) {


                      
                      $("#card_" + (i + 1)).fadeOut("slow");

                      player2Cards[i] = "Removed";

                      mekle[j] = "Removed";

                      $("#mekle" + j).fadeOut("slow");

                      mekle[k] = "Removed";

                      $("#mekle" + k).fadeOut("slow");

                    
                      player2Score += 1;

                      s2.innerHTML = player2Score.toString();

                      bool = false;

                      break;

                  }

              }



          }


          if (bool) {

             
              
              addNode(i, j, id, player2Cards,cardId,"bottom");

          }

      }



      player1Turn = true;
      player2Turn = false;

  }




// choose a random file

  function choseCard(r) {

      var chose;

      

      switch (r) {


          case 0:
              chose = carreaux;
              break;

          case 1:
              chose = hearts;
              break;

          case 2:
              chose = spades;
              break;

          case 3:
              chose = clubs;
              break;

      }
      
      return chose;

  }
