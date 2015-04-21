$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half",
    id: "",
    template: _.template("<h3><%= title %></h3><h2><%= content %></h2><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });
  //
  // var data = {
  //   id: 'one',
  //   title: "Vizzini: No more rhymes now, I mean it.",
  //   content: "Fezzik: Anybody want a peanut?"}
  // var newCard = new halfCardView(data);
  //
  // var dataTwo = {
  //   id: 'two',
  //   title: "Vizzini: I can't compete with you physically, and you're no match for my brains.",
  //   content: "Let me put it this way. Have you ever heard of Plato, Aristotle, Socrates? ...Morons."};
  // var anotherCard = new halfCardView(dataTwo);
  //
  //
  //
  var thirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third",
    id: "",
    template: _.template("<h3><%= title %></h3><h2><%= content %></h2><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var rowTwo = $('.row')[2];
      $(rowTwo).append(this.$el);
    }
  });
  //
  // var dataThree = {
  //   id: 'three',
  //   title: "Miracle Max: Get back, witch.",
  //   content: "Valerie: I'm not a witch, I'm your wife. But after what you just said, I'm not even sure I want to be that any more."};
  // var thirdCard = new thirdCardView(dataThree);
  //
  // var dataFour = {
  //   id: 'four',
  //   title: "Inigo: I could do that. I have some rope up here, but I do not think you would accept my help, since I am only waiting around to kill you. ",
  //   content: "Man in Black: That does put a damper on our relationship."};
  // var fourthCard = new thirdCardView(dataFour);
  //
  // var dataFive = {
  //   id: 'five',
  //   title: "Theiving",
  //   content: "Vizzini: You're trying to kidnap what I've rightfully stolen."};
  // var fifthCard = new thirdCardView(dataFive);
  //
  //
  var fourthCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter",
    id: "",
    template: _.template("<h3><%= title %></h3><h2><%= content %></h2><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var rowThree = $('.row')[3];
      $(rowThree).append(this.$el);
    }
  });

  // var dataSix = {
  //   id: 'six',
  //   title: "Inigo: He's dead. He can't talk.",
  //   content: "Miracle Max: Whoo-hoo-hoo, look who knows so much. It just so happens that your friend here is only MOSTLY dead. There's a big difference between mostly dead and all dead. Mostly dead is slightly alive. With all dead, well, with all dead there's usually only one thing you can do... Go through his clothes and look for loose change."};
  // var sixthCard = new fourthCardView(dataSix);
  //
  // var dataSeven = {
  //   id: 'seven',
  //   title: "Fezzik: Why do you wear a mask? Were you burned by acid, or something like that? ",
  //   content: "Man in Black: Oh no, it's just that they're terribly comfortable. I think everyone will be wearing them in the future."};
  // var seventhCard = new fourthCardView(dataSeven);
  //
  // var dataEight = {
  //   id: 'eight',
  //   title: "Grandpa: Westley didn’t reach his destination. His ship was attacked by the Dread Pirate Roberts, who never left captives alive. When Buttercup got the news that Westley was murdered…",
  //   content: "Grandson: Murdered by pirates is good."};
  // var eighthCard = new fourthCardView(dataEight);
  //
  // var dataNine = {
  //   id: 'nine',
  //   title: "Prince Humperdinck: Tyrone, you know how much I love watching you work, but I’ve got my country’s 500th anniversary to plan, my wedding to arrange, my wife to murder and Guilder to frame for it; I’m swamped.",
  //   content: "Count Rugen: Get some rest. If you haven’t got your health, then you haven’t got anything."};
  // var ninthCard = new fourthCardView(dataNine);”’

  // collection
  var cardList = Backbone.Collection.extend({

    intitialize: function() {
      console.log('good times');
      url: 'api/cards';
      model: cardModel;
    }
  });

  // model
  var cardModel = Backbone.Model.extend({
  	initialize: function() {
  		console.log("Hey, a card is here!");
  	}
  });

});
