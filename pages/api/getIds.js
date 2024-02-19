import { client } from "./database";

async function getIds() {
  try {
    await client.connect();
    const database = client.db("meetup");
    const meetup = database.collection("meetup");

    const meetups = await meetup.find({}, { _id: 1 }).toArray();
    return meetups;
  } finally {
    await client.close();
  }
}
export default getIds;
