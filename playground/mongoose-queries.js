const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var userId = '5b9b222a9c91500c08e49a56';

// var id = '5b8cb579977aa60474e1d695433434343';

// if(!ObjectID.isValid(id)){
//   console.log('ID not Valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos',todos);
// });
//
// Todo.find({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By id',todo);
// }).catch((e) => console.log(e));

User.findById('5b9b222a9c91500c08e49a56').then((user)=>{
  if(!user){
    return console.log('Error no user found');
  }
  console.log('User by id:',user);
}).catch((e)=>{
  console.log(e);
})
