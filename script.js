//variables 
let count = 0; 
let worker = 0; 
let santa = 0; 
let element = document.getElementById('dollar'); 
let workerbtn = document.querySelector('#worker-btn');
let managerbtn = document.querySelector('#manager-btn'); 
let directorbtn = document.querySelector('#director-btn'); 
let santabtn = document.getElementById('santa-btn'); 
let manager = 0; 
let director = 0; 

//conditionals when loading the game, so taht you can access the upgrades 
function conditionals() { 
    // if workers are greater than zero, when we load the game, the display will come. 
if (worker > 0) { 
    document.getElementById('manager-btn').style.display = 'block'; 
    document.getElementById('manager-btn').innerHTML = `Manager $${(manager + 1)*550}`; 
}
    // if managers are greater than zero, when we load the game, the display will come. 

if (manager > 0) { 
    document.getElementById('director-btn').style.display = 'block'; 
    document.getElementById('director-btn').innerHTML = `Director $${(director + 1)*2125}`; 

}

} 
// this is the function that updates the count, stats , etc. 
function update() { 

    dollar.innerHTML = `$${count}`; 
    document.title = `$${count} `;
    workerbtn.innerHTML = `Worker $${((worker+1)*100)}`; 
    if (managerbtn.style.display == "block") { 
    managerbtn.innerHTML = `Manager $${((manager+1)*550)}`;
    document.getElementById('manager-count').innerHTML = `Manager: ${manager}`;
    } 
    if (directorbtn.style.display == "block") { 
        directorbtn.innerHTML = `Director $${((director+1)*2125)}`;
        document.getElementById('director-count').innerHTML = `Director: ${director}`;

        } 
 
    document.getElementById('worker-count').innerHTML = `Workers: ${worker}`;
    
   
}
//right clicks, you can add more of these in your own versions 
workerbtn.addEventListener('contextmenu', () => { 
   alert('A  guy who is willing to help out at a low cost! Makes a dollar a second!'); 
})
// timers , these start the autoclickers 
function timer() {  
    count = count + worker;  
       update(); 
}
      setInterval('timer()', 895); 

function managerTimer() { 
    count = count + manager; 
        update(); 
}
      setInterval('managerTimer()',150); 
function directorTimer() { 
   count = count + director; 
     update(); 

}
    setInterval('directorTimer()',50); 
// the prime function, that drives the game, the clicker. 
function makeMoney() { 
count = count + 1 ; 
   update(); 
   
    if(count == 100 && worker == 0){ 
     
       alert('You can now afford first worker. Go to the "Hire Shop" tab below and hire one!')
         
    }
   
 
} 
// function for buying workers, a conditional is set for if you have one more worker multiplied by 100
function buyWorker() { 

if (count >= (worker+1)*100) { 
    count = count - ((worker+1)*100); 
    worker = worker + 1; 
  
    document.getElementById('manager-btn').style.display = "block"; 
    document.getElementById('manager-btn').innerHTML = `Manager $${(manager + 1)*550}`; 
    
    timer(); 
    update(); 
    if (worker == 1) { 

        alert('Now a manager wants to work with you, save up to buy more experineced workers!')

    }

}
else { 

alert(`Make sure you saved up $${(worker + 1)*100} to hire this guy`)

}

}

 // function for buying managers, a conditional is set for if you have one more manager multiplied by 550 

function buyManager() { 

    if (count >= (manager + 1)*550) { 

        document.getElementById('director-btn').style.display = "block"; 
        document.getElementById('director-btn').innerHTML = `Director $${(director + 1)*2125}`; 

        count = count - ((manager+1)*550); 
        manager = manager + 1; 
        managerTimer();  
        update(); 
    

    }
    else { 
    
    alert(`Make sure you saved up $${(manager + 1)*550} to hire this guy`)
    
    }
    
    }
     // function for buying directors , a conditional is set for if you have one more directors multiplied by 2125

    function buyDirector() { 

        if (count >= (director + 1)*2125) { 
    
            count = count - ((director+1)*550); 
            director = director + 1; 
            managerTimer();  
            update(); 
        
    
        }
        else { 
        
        alert(`Make sure you saved up $${(director + 1)*2125} to hire this guy`)
        
        }
        
        }
   
//save game
function saveGame() { 
      if (count > 0 ) { 
    document.getElementById('save').innerHTML = `Auto Saved`; 
      }
    localStorage.setItem('count',count);
    localStorage.setItem('worker',worker); 
    localStorage.setItem('manager',manager); 
    localStorage.setItem('director',director); 
    localStorage.setItem('santa',santa); 
}
// load game 
function loadGame() { 
    count = localStorage.getItem('count'); 
count = parseInt(count); 
worker = localStorage.getItem('worker'); 
worker = parseInt(worker);
manager = localStorage.getItem('manager'); 
manager = parseInt(manager); 
director = localStorage.getItem('director') 
director = parseInt(director); 
santa = localStorage.getItem('santa') 
santa = parseInt(santa);
     if (count >= 1)  { 
    update(); 
} 
   else { 
   return; 
}
//when we load the game, we can add the conditionals() function so that all the displays can be set accordingly!
conditionals(); 
}
// instrucntions, play around with this if you please!!
function instructions() { 
    alert('A large economic pandemic has threathened and ruied the economy of the Republic of the African Confederacy! Only your business remains and its barely surviving. A stranger gives you a program to use so that it can make money out of thin air! Use this program and start looking for employees in streets and regain the economy of your country once more!') 
    }
    // reset
function reset() { 

  count = 0; 
  worker = 0;
  manager = 0; 
  director = 0; 
  santa = 0; 
  document.getElementById('save').innerHTML = 'Save Game';
  managerbtn.style.display = 'block';  

     saveGame(); 
}

// open and close variables 
let openButton = document.getElementById('open'); 
let closeButton = document.getElementById('close'); 
var modal = document.getElementById('upgrade-container');
let codediv = document.querySelector('#codes'); 
let codesbutton = document.querySelector('#codes-button'); 
// open and close buttons 
openButton.onclick = () => {   
     modal.style.display = "block";  
}
document.getElementById("x").onclick = () => { 
      modal.style.display = "none"; 
}
     document.getElementById('stat-button').onclick = () => {   
document.getElementById('stats').style.display = "block"; 
}
       document.getElementById('x-stats').onclick = () => { 
            document.getElementById('stats').style.display = "none"; 
    }
codesbutton.onclick = () => { 
codediv.style.display = "block"; 
}
document.getElementById("x-codes").onclick = () => { 
    codediv.style.display = "none"; 
}
//codebox programs

let codeInput = document.getElementById('text'); 
let redeem = document.getElementById('redeem'); 
function redeemCode() {
if (codeInput.value == 'SantaWillCome2020') {
        document.getElementById('codeinfo').innerHTML = 'Click the city tab (shop) for a surprise'
        santabtn.style.display = "block"; 
        document.getElementById('director-count').innerHTML = `Director: ${director}`;
        document.getElementById('manager-count').innerHTML = `Manager: ${manager}`;

    }
    else { 
        document.getElementById('codeinfo').innerHTML = 'EENVALIDD'
    }
} 
// disable the enter key to prevent hacking
document.onkeydown = key => {
    if (key.keyCode == 13) {
      alert('Nice Try :)');
      key.stop();
    }
  };


