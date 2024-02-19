import { client } from "./database";

async function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;

    try {
      await client.connect();
      const database = client.db("meetup");
      const meetup = database.collection("meetup");

      const result = await meetup.insertOne(data);
      res.status(201).json({ message: "meetup created succesfully" });
    } finally {
      await client.close();
    }
  }
}
export default handler;
