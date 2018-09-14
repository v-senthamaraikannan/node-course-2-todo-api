var  express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req,res) =>{
   var todo = new Todo ({
       text: req.body.text
   });
   todo.save().then((doc) =>{
      res.send(doc);
   }, (e) =>{
      res.status(400).send(e);
   });
});

app.get('/hello', (req,res) =>{
   console.log('Hello buddyy');
});

app.listen(3000,() =>{
  console.log('Started on port 3000');
});

app.get('/todos', (req,res) =>{
  Todo.find().then((todos) =>{
    res.send({todos});
  },(e) =>{
     res.status(400).send(e);
  });
});

//GET/todos/123545 => URL Parameters
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid){
    res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }
    res.send(todo);
  }).catch((e) =>{
    res.status(400).send();
  })
  // validate ID using isValid
   // 404 - send empty

});

app.get('/users', (req,res) =>{
  User.find().then((users) =>{
    res.send({users});
  },(e) =>{
     res.status(400).send(e);
  });
});



app.post('/users', (req,res) =>{
   var user = new User ({
       email: req.body.email
   });
   user.save().then((doc) =>{
      res.send(doc);
   }, (e) =>{
      res.status(400).send(e);
   });
});



// var Todo = mongoose.model('Todo', {
// text: {
//   type: String,
//   required: true,
//   minlength: 1,
//   trim: true
// },
// completed:{
//  type: Boolean,
//  default:false
// },
// completedAt:{
//   type: Number,
//   default:null
// }
// });
//
// var newTodo = new Todo({
//   text:'Cook dinner'
// });
//
// newTodo.save().then((doc) =>{
//    console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save todo')
// });
//
// var funTodo = new Todo({
//   text:'Fun time',
//   completed:true,
//   completedAt:12
// });
//
// funTodo.save().then((doc) =>{
//    console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save todo')
// });
//
// var User = mongoose.model('User',{
//   email:{
//     type: String,
//     minlength: 1,
//     required: true,
//     trim: true
//   }
// });
//
// var newUser = new User({
//   email:''
// });
//
// newUser.save().then((doc)=>{
//   console.log('Saved user data',doc);
// },(e)=>{
//   console.log('Error occured in saving the data');
// });
