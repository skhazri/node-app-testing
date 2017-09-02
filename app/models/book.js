let mongoose = require('mongoose'),
  schema = mongoose.Schema;

let bookSchema = new schema(
  {
   title: { type: String, required: true },
   author: { type: String, required: true },
   year: { type: Number, required: true },
   pages: { type: Number, required: true },
   createdAt: { type: Date, default:Date.now}
 },
 {
  versionKey: false
 }
);
bookSchema.pre('save', next =>{
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
module.exports = mongoose.model('book', bookSchema);
