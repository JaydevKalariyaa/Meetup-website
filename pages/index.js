import MeetupList from "../components/meetups/MeetupList";
import handler from "./api/get-meetups";

function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />;
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  try {
    const res = await handler();
    return {
      props: {
        meetups: res.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
    return {
      props: { meetups: [] },
      revalidate: 1,
    };
  }
}
