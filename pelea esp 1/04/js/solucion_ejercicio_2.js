//Objeto base para los personajes
class Character {
  constructor(name, health, damage) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = 0;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    
    console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
    target.health -= this.damage;
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;
  }
}

//Función para combatir
function fight(firstCharacter, secondCharacter) {
  //Muestra el estado inicial de los personajes
  
  setDmg(firstCharacter);
  setDmg(secondCharacter);
  console.log("Empieza el combate!");
  updateStatus('hero-status', firstCharacter.status());
updateStatus('enemy-status', secondCharacter.status());

  updateHealthBar('hero-health', hero.health, hero.maxhealth);
  updateHealthBar('enemy-health', enemy.health, enemy.maxhealth);

  document.addEventListener('keydown', function(event){
    

    if (event.key === 'x'){
      let damage = randomDmg();
      setDmg(firstCharacter);
      if (firstCharacter.isAlive()) {
        firstCharacter.attack(secondCharacter);
        updateStatus('enemy-status', secondCharacter.status());
        updateHealthBar('enemy-health', secondCharacter.health, secondCharacter.maxhealth);
      } else {
        console.log(`${firstCharacter.name} died!`);
        document.getElementById('next-turn').disabled = true;
        return;
      }

    }

    if (event.key === 'm'){
      let damage = randomDmg();
      setDmg(secondCharacter);
      if (secondCharacter.isAlive()) {
        secondCharacter.attack(firstCharacter);
        updateStatus('hero-status', firstCharacter.status());
        updateHealthBar('hero-health', firstCharacter.health, firstCharacter.maxhealth);
      } else {
        console.log(`${secondCharacter.name} died!`);
        document.getElementById('next-turn').disabled = true;
      }
    }

    
    if(firstCharacter.health <= 0 || secondCharacter.health <= 0){
      document.getElementById('next-turn').disabled = true;
      console.log("Fin del combate");
      if (secondCharacter.health <= 0){
        document.getElementById('enemy-death').style.display = 'block';
      }
      if (firstCharacter.health <= 0){
        document.getElementById('hero-death').style.display = 'block';
      }
    }
  
    

 }

 

 



);



}

  /*document.getElementById('next-turn').addEventListener('click', function() {
    //Primer personaje ataca si esta vivo
    if (firstCharacter.isAlive()) {
      firstCharacter.attack(secondCharacter);
      updateStatus('enemy-status', enemy.status());
      updateHealthBar('enemy-health', enemy.health, enemy.maxhealth);
    } else {
      console.log(`${firstCharacter.name} died!`);
      document.getElementById('next-turn').disabled = true;
      return;
    }

    //Segundo personaje ataca si esta vivo
    if (secondCharacter.isAlive()) {
      secondCharacter.attack(firstCharacter);
      updateStatus('hero-status', hero.status());
      updateHealthBar('hero-health', hero.health, hero.maxhealth);
    } else {
      console.log(`${secondCharacter.name} died!`);
      document.getElementById('next-turn').disabled = true;
    }

    if(firstCharacter.health <= 0 || secondCharacter.health <= 0){
      document.getElementById('next-turn').disabled = true;
      console.log("Fin del combate");
      if (secondCharacter.health <= 0){
        document.getElementById('enemy-death').style.display = 'block';
      }
      if (firstCharacter.health <= 0){
        document.getElementById('hero-death').style.display = 'block';
      }
    

    }
  });


}*/



function updateStatus(elementId, status) {
  const element = document.getElementById(elementId);
  element.innerText = status;
}

function updateHealthBar(elementId, currentHealth, maxHealth) {
  const element = document.getElementById(elementId);
  if (currentHealth <= 0) {
    element.style.width = '0%'; 
  } else {
    const percent = (currentHealth / maxHealth) * 100;
    element.style.width = percent + '%';
  }
}

function randomDmg(){
  return Math.floor(Math.random() * (10 - 5 + 1)) + 5;

}

function setDmg(character){
  character.damage = randomDmg();

}



const hero = new Character("Heroe", 500, 0);
const enemy = new Character("Limo", 500, 0 );




fight(hero, enemy);
