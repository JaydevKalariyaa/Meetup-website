import { client } from "./database";

async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db("meetup");
    const meetup = database.collection("meetup");

    const result = await meetup.find().toArray();
    return result;
  } finally {
    await client.close();
  }
}
export default handler;
