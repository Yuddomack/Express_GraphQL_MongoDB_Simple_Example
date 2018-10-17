const model = require('../mongoose/index');

//console.log(model);
const kim = new model.User({
  email: "asdf",
  pwd: "qwer",
});

kim.save().then(res => console.log(res));
