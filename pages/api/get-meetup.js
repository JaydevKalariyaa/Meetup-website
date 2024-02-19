import { client } from "./database";
import { ObjectId } from "mongodb";
async function getMeetup(meetupId) {
  try {
    await client.connect();
    const database = client.db("meetup");
    const meetup = database.collection("meetup");
    const selectedMeetup = await meetup.findOne({
      _id: new ObjectId(meetupId),
    });
    return selectedMeetup;
  } finally {
    await client.close();
  }
}
export default getMeetup;
