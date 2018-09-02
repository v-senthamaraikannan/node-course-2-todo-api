// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log('ObjectID', obj);



// ES6 Object Destructuring
// var user = {name:'andrew',age:25};
// var {name} = user;
// console.log('Val is:'+name);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    // This prevents the program from executing!
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // },(err, result) =>{
  //     if(err){
  //       return console.log('Unable to insert todo',err);
  //     }
  //     console.log(JSON.stringify(result.ops));
  // });

  db.collection('Users').insertOne({
    name: 'Vasanth',
    age: 27,
    location: 'Chicago'
  },(err,result)=>{
    if(err){
      return console.log("Error in inserting users");
    }
    // console.log(JSON.stringify(result.ops));
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
