```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id": ObjectId("65196a421d7d9868316575c7")}, {"$inc": {"quantity": -2}});
```