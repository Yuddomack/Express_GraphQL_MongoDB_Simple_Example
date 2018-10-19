module.exports = (function(){
  const model = require('../mongoose/model');

  async function isExistEmail(email){
    const user = await model.User.find({email: email});

    return (user.length > 0) ? true : false;
  }

  async function joinUser(email, pwd){
    if(await isExistEmail(id)) throw "email is existed";

    const user = new model.User({email: email, pwd: pwd});
    const result = await user.save();

    return (result._id) ? {code: 200} : {code: 500};
  }

  return {
    joinUser: joinUser
  };
}
)();
