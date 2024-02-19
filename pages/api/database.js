const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://jaydevk:jk@meetup-project.ydormky.mongodb.net/?retryWrites=true&w=majority";
export const client = new MongoClient(uri);
