const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function result() {

  let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  let insertY = ['the soup kitchen', 'Disneyland','the White House'];
  let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
  let newStory = storyText;

  if (customName.value !== '') {
    name = customName.value;
  } else
    name = 'Boby';

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286) + ' stone';
    let temperature =  Math.round(94 - 32) * 5 / 9 + ' centigrade';
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  };

  story.textContent = '';
  story.style.visibility = 'visible';

  story.textContent = newStory;
}












randomize.addEventListener('click', result);





