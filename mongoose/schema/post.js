module.exports = function(mongoose){
  return new mongoose.Schema({
    title: String,
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // 다른 스키마를 쓸 수 있게 하려면?
    c_date: { type: Date, default: Date.now }
  });
};
