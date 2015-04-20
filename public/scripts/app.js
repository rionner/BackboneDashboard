$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half",
    id: "",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
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

  var data = {
    id: 'one',
    title: "Rhyme Time",
    content: "Inigo Montoya: That Vizzini, he can *fuss*. Fezzik: Fuss, fuss... I think he like to scream at *us*. Inigo Montoya: Probably he means no *harm*. Fezzik: He's really very short on *charm*. Inigo Montoya: You have a great gift for rhyme. Fezzik: Yes, yes, some of the time. Vizzini: Enough of that. Inigo: Fezzik, are there rocks ahead? Fezzik: If there are, we all be dead. Vizzini: No more rhymes now, I mean it. Fezzik: Anybody want a peanut?"}
  var newCard = new halfCardView(data);

  var dataTwo = {
    id: 'two',
    title: "Morons",
    content: "Vizzini: I can't compete with you physically, and you're no match for my brains. Man in Black: You're that smart? Vizzini: Let me put it this way. Have you ever heard of Plato, Aristotle, Socrates? Man in Black: Yes. Vizzini: Morons."};
  var anotherCard = new halfCardView(dataTwo);



  var thirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third",
    id: "",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
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

  var dataThree = {
    id: 'three',
    title: "Witch Wife?",
    content: "Miracle Max: Get back, witch. Valerie: I'm not a witch, I'm your wife. But after what you just said, I'm not even sure I want to be that any more."};
  var thirdCard = new thirdCardView(dataThree);

  var dataFour = {
    id: 'four',
    title: "New Friends",
    content: "Inigo Montoya: I donna suppose you could speed things up? Man in Black: If you're in such a hurry, you could lower a rope or a tree branch or find something useful to do.  Inigo Montoya: I could do that. I have some rope up here, but I do not think you would accept my help, since I am only waiting around to kill you. Man in Black: That does put a damper on our relationship."};
  var fourthCard = new thirdCardView(dataFour);

  var dataFive = {
    id: 'five',
    title: "Theiving",
    content: "Vizzini: You're trying to kidnap what I've rightfully stolen."};
  var fifthCard = new thirdCardView(dataFive);


  var fourthCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter",
    id: "",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
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

  var dataSix = {
    id: 'six',
    title: "Mostly Dead",
    content: "Miracle Max: He probably owes you money huh? I'll ask him. Inigo Montoya: He's dead. He can't talk. Miracle Max: Whoo-hoo-hoo, look who knows so much. It just so happens that your friend here is only MOSTLY dead. There's a big difference between mostly dead and all dead. Mostly dead is slightly alive. With all dead, well, with all dead there's usually only one thing you can do. Inigo Montoya: What's that? Miracle Max: Go through his clothes and look for loose change."};
  var sixthCard = new fourthCardView(dataSix);

  var dataSeven = {
    id: 'seven',
    title: "Future Fashion",
    content: "Fezzik: Why do you wear a mask? Were you burned by acid, or something like that? Man in Black: Oh no, it's just that they're terribly comfortable. I think everyone will be wearing them in the future."};
  var seventhCard = new fourthCardView(dataSeven);

});
