let battleResult = localStorage.getItem('battleResult') || '';

function pokemonBattle(playerMove){
    battleResult += playerMove;
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent =  `${battleResult}`;
}

function calculateWinner(result){
  if(result === 'electric type + water type' || result === 'water type + electric type' || result === 'electric type + flying type' || result === 'flying type + electric type'
  ){
    battleResult = 'electric type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //electric type advantage
  
  else if(result === 'water type + fire type' || result === 'fire type + water type' || result === 'rock type + water type' || result === 'water type + rock type' || result === 'ground type + water type' || result === 'water type + ground type'
  ){
    battleResult = 'water type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //water type advantage

  else if(result === 'fire type + grass type' || result === 'fire type + ice type' || result === 'fire type + bug type' || result === 'fire type + steel type'){
    battleResult = 'fire type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } // fire type advantage

  else if(result === 'grass type + water type' || result === 'grass type + ground type' || result === 'grass type + rock type'){
    battleResult = 'grass type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //grass type advantage

  else if(result === 'fighting type + normal type' || result === 'fighting type + ice type' || result === 'fighting type + rock type' || result === 'fighting type + dark type' || result === 'fighting type + steel type'){
    battleResult = 'fighting type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //fighting type advantage

  else if(result === 'rock type + fire type' ||
    result === 'rock type + ice type' || result === 'rock type + flying type' || result === 'rock type + bug type'){
    battleResult = 'rock type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //rock type advantage

  else if(result === 'dark type + psychic type' || result === 'dark type + ghost type'){
    battleResult = 'dark type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //dark type advantage

  else if(result === 'dragon type + dragon type'){
    battleResult = 'dragon type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //dragon type advantage

  else if(result === 'ice type + grass type' || result === 'ice type + ground type' || result === 'ice type + flying type' || result === 'ice type + dragon type'){
    battleResult = 'ice type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //ice type advantage

  else if(result === 'ghost type + psychic type' || result === 'ghost type + ghost type'){
    battleResult = 'ghost type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //ghost type advantage

  else if (result === 'steel type + ice type' || result === 'steel type + rock type' || result === 'steel type + fairy type'){
    battleResult = 'steel type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //steel type advantage

  else if(result === 'fairy type + fighting type' || result === 'fairy type + dragon type' || result === 'fairy type + dragon type'){
    battleResult = 'fairy type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //fairy type advantage

  else if(result === 'flying type + grass type' || result === 'flying type + fighting type' || result === 'fighting type + bug type'){
    battleResult = 'flying type advantage';
    localStorage.setItem('battleResult', JSON.stringify(battleResult));

    document.querySelector('.js-battle-result').textContent = `${battleResult}`;
    return battleResult;
  } //flying type advantage

  else{
    return "no clear advantage";
  }
}
