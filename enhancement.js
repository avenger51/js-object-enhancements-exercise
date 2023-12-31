function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  };

  //es2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//=============================================================

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
}

instructor[favoriteNumber] = "That is my favorite!"

//es2015
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber]: 'That is my favorite'
}

//===============================================================

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  //es2015
  var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //=====================================================================
  const d = createAnimal("dog", "bark", "Woooof!")
  // {species: "dog", bark: ƒ}
  d.bark()  //"Woooof!"
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
  // {species: "sheep", bleet: ƒ}
  s.bleet() //"BAAAAaaaa"
  
  //es2015
  function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }

  //duh...verb is only called when a const is created...
  