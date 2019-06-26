const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
mongoose.connect('mongodb+srv://vanviet:123@cluster0-bmk9n.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }).then(()=>{
    console.log('ok')
}).catch((err)=>{
    console.log(err)
})

const TintucSchema = new Schema({
    anh: String,
    tieude: String,
    noidung:String,
    ngaydang:{type: Date, default: Date.now}
  });

  const Tintuc = mongoose.model('Tintuc', TintucSchema);
//   var tintuc1 = new Tintuc()
//   tintuc1.anh='sadasd'
//   tintuc1.tieude='tieude1'
//   tintuc1.noidung='oke'
//   tintuc1.save((err)=>{
//       return err
//   })
  module.exports = Tintuc;
