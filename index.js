const man = {
   species: 'human',
   name: 'Donald',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'Aloha!',
};

const woman = {
   species: 'human',
   name: 'Eva',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hello',
};

const cat = {
   species: 'cat',
   name: 'Murka',
   gender: 'female',
   legs: 4,
   hands: 0,
   saying: 'Meow...',
};

const dog = {
   species: 'dog',
   name: 'Gektor',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'WOFFF!',
};

const catWoman = {
   species: 'humacat',
   name: 'Akrum',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: cat.saying,
};

man.frends = [woman, dog];
woman.frends = [man, cat];
dog.frends = [man, woman, catWoman, cat];
catWoman.frends = [cat, woman];

[man, woman, cat, dog, catWoman].forEach((inhabitant) => {
   const inhabitantProps = Object.values(inhabitant).map(prop => {
      if (Array.isArray(prop)) {
         return prop.map(frend => frend.name).join(', ')
      } else {
         return prop;
      }
   })

   print(inhabitantProps.join('; '))
});
