// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const res = await axios.post("/api/new-meetup", enteredMeetupData);
      toast.success(res.data.message);
      router.push("/");
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <>
      <ToastContainer />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}

export default NewMeetupPage;
