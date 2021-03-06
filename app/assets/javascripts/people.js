
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hey!!",
      people: [
        {name: "Jay", bio: "Manages most difficult of people, beer connnoisseur, people-person", bioVisible: false},
        {name: "Anu", bio: "An introvert amateur coder, artist, wife, dog person, cocktail-lover, self professed clumsy dancer",bioVisible: false},
        {name: "Aditya", bio: "He is a charmer !", bioVisible: false}
      ],

      newPersonName: "",
      newPersonBio: ""
    },
      
    methods: {
      toggleBio: function(inputPerson) {
        // if (inputPerson.bioVisible === true) {
        //   inputPerson.bioVisible = false;
        // } else {
        //   inputPerson.bioVisible = true;
        // }
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },

      addPerson: function() {
        this.people.push({name: this.newPersonName, bio: this.newPersonBio, bioVisible: false});
        this.newPersonName = "";
        this.newPersonBio = "";

      },

      deletePerson(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      }
    },
    
  });
});
