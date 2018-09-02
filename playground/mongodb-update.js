const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
      return console.log("Error occured in connecting to the Database!!");
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id:new ObjectID('5b8b347270e279828de2b228')
    // },
    // //MongoDB update Operators
    // {
    //   $set:{
    //     text:'I have updated the value'
    //   }
    // },
    // {
    //   returnOriginal:false
    // }).then((result) =>{
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('5b8b30ca833bd8113054a352')
    },
    //MongoDB update Operators
    {
      $inc:{
        age:1
      }
    },
    {
      returnOriginal:false
    }).then((result) =>{
      console.log(result);
    });


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

    db.close();
});
