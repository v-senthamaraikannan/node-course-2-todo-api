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

 // toArray

  // db.collection('Todos').find({
  //   _id:new ObjectID('5b8b2f8b1e6cb77a68509fdf')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch todos',err);
  // });

  // count

  // db.collection('Todos').find({
  //   _id:new ObjectID('5b8b2f8b1e6cb77a68509fdf')
  // }).count().then((count) =>{
  //   console.log(`Todos count ${count}`);
  // },(err)=>{
  //   console.log('unable to fetch todos',err);
  // });

  db.collection('Users').find({
    name:'Vasanth'
  }).toArray().then((docs) =>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('unable to fetch todos',err);
  });

  // db.collection('Todos').find().toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch todos',err);
  // });

  // db.close();
});
