const farmAnimals = 'cow horse sheep pig chicken';

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

console.log(moo);    
console.log(neigh);  
console.log(baa);   
console.log(oink); 
console.log(cluck);  

const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

console.log(bessie); 
console.log(dolly);  
console.log(babe);   
console.log(little); 

const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

console.log(blackAndWhite); 
console.log(black);        
console.log(pink);          

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red);    
console.log(orange); 
console.log(yellow); 
console.log(green);  
console.log(blue);   
console.log(indigo); 
console.log(violet); 

const [r, o, y, g, b, , v] = colors;

console.log(r); 
console.log(o); 
console.log(y);
console.log(g); 
console.log(b); 
console.log(v); 

const [, , , , , indg] = colors;

console.log(indg); 

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName); 
console.log(color);      
console.log(song);    
console.log(job);       
console.log(partner);   

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log(song2);         
console.log(song4);        
console.log(nestedJob);     
console.log(nestedPartner);