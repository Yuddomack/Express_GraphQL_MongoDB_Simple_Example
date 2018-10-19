const model = require('../mongoose/model');

//console.log(model);
const kim = new model.User({
  email: "asdf",
  pwd: "qwer",
});

//kim.save().then(res => console.log(res));

model.User.find().then(res => console.log(res));
