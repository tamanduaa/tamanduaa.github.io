$(document).ready(function() {
  var setting = [
    'space', 
    'wasteland', 
    'arrakis', 
    'prehistoric', 
    'megastructure', 
    'deep-water', 
    'jiang hu',
    'misty mountains', 
    'underworld',
    'hoth',
    'labyrinth','medieval','crystal kingdom', 'moon', 'gondor', 'forest','mountain','tundra','asteroid','spaceship'];
  var randSetting = setting[Math.floor(Math.random() * setting.length)];
  var job = ['bounty hunter', 'necromancer', 'voodoo priest', 'go-go dancer', 'pilot', 'beastmaster', 'dinosaur trainer', 'bone collector', 'druid', 'dwarf','elf','bard','orc','berserker','assassin','giant','fae','goblin','angel','demon','ashura','deva','monk','sorceror', 'puppeteer', 'chef','blacksmith','ninja', 'bandit','thief', 'archer', 'cleric', 'wizard', 'warlock','gnome', 'paladin','knight','blademaster', 'sniper','hermit','wrestler', 'mage'];
  var randJob = job[Math.floor(Math.random() * job.length)];
  $('#setting').text(randSetting);
  $('#job').text(randJob);
});
