const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
      return console.log("Error occured in connecting to the Database!!");
    }
    console.log('Connected to MongoDB Server');
    //deleteMany
    //   db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) =>{
    //     console.log(result);
    //   });
    //
    // //deleteOne --> if they are duplicates it will delete the firstOne
    //   db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) =>{
    //     console.log(result);
    //   });
    //findOneAndDelete -- It will also return the deleted value
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
       console.log(result);
    });

    db.close();
});
