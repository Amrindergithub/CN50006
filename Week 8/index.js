const mongoose = require("mongoose");

// MongoDB connection URI
const MONGO_URI = "mongodb://localhost:27017/Week8"; // Replace "Week8" with your database name if different

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

// Handle connection events
db.on("error", (err) => {
  console.log("Error occurred during connection: " + err);
});

db.once("connected", () => {
  console.log(`Connected to ${MONGO_URI}`);
});

// Define a schema for the collection
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number,
});

// Define a model for the collection
const Person = mongoose.model("Person", PersonSchema, "personCollection");

// Task 1: Add a single document
const doc1 = new Person({
  name: "Jacky",
  age: 36,
  Gender: "Male",
  Salary: 3456,
});

doc1
  .save()
  .then((doc) => {
    console.log("Document added:", doc);
  })
  .catch((err) => {
    console.error(err);
  });

// Task 2: Add multiple documents
const manyPersons = [
  { name: "Simon", age: 42, Gender: "Male", Salary: 3456 },
  { name: "Neesha", age: 23, Gender: "Female", Salary: 1000 },
  { name: "Mary", age: 27, Gender: "Female", Salary: 5402 },
  { name: "Mike", age: 40, Gender: "Male", Salary: 4519 },
];

Person.insertMany(manyPersons)
  .then(() => {
    console.log("Data inserted");
  })
  .catch((error) => {
    console.error(error);
  });

// Task 3: Fetch data (all documents, limit to 5)
Person.find()
  .limit(5)
  .then((docs) => {
    console.log("Documents (limit 5):", docs);
  })
  .catch((err) => {
    console.error(err);
  });

// Task 4: Fetch with filtering criteria
Person.find({ Gender: "Female", age: { $gt: 25 } })
  .then((docs) => {
    console.log("Filtered Documents (Female, Age > 25):", docs);
  })
  .catch((err) => {
    console.error(err);
  });

// Task 5: Count total documents
Person.countDocuments()
  .then((count) => {
    console.log("Total Document Count:", count);
  })
  .catch((err) => {
    console.error(err);
  });

// Task 6: Delete documents with age > 25
Person.deleteMany({ age: { $gte: 25 } })
  .then((result) => {
    console.log("Deleted Documents:", result);
  })
  .catch((err) => {
    console.error(err);
  });

// Task 7: Update documents (set salary to 5555 for all females)
Person.updateMany({ Gender: "Female" }, { Salary: 5555 })
  .then((result) => {
    console.log("Updated Documents:", result);
  })
  .catch((err) => {
    console.error(err);
  });