```javascript
// Solution using conditional check before decrement
db.collection('myCollection').findOne({"_id": ObjectId("65196a421d7d9868316575c7")}, (err, doc) => {
if (err) throw err;
if (doc && doc.quantity >= 2) {
  db.collection('myCollection').updateOne({"_id": ObjectId("65196a421d7d9868316575c7")}, {"$inc": {"quantity": -2}});
} else {
  console.log("Quantity cannot be decremented below zero.");
}
});
```