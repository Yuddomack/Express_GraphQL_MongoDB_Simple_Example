module.exports = (function(){
  const model = require('../mongoose/model');

  // https://mongoosejs.com/docs/guide.html#id
  async function isExistEmail(email){
    const user = await model.User.findOne({email: email});
    //console.log(user._id.toString());

    return user; // 없을땐 null
  }

  async function joinUser(email, pwd){
    if(await isExistEmail(email)) throw "email is existed";

    const newUser = new model.User({email: email, pwd: pwd});
    const result = await newUser.save();

    return result;
  }

  return {
    joinUser: joinUser
  };
}
)();
