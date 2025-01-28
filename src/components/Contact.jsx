import React from "react";
import {toast} from "react-toastify";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "feda3453-85f4-4014-8645-5eef55c47154");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Get in Touch <span className="underline underline-offset-4 decoration-1 font-light"> with Us </span>
            </h1>
            <p className="text-gray-500 max-w-120 text-center mb-8 mx-auto">
                Ready to discuss your next project or service needs? Let’s build a sustainable future together with Lyma
                Engineering Services.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <div className="w-full md:w-1/2 text-left">
                        <label className="block mb-2">Your Name</label>
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4"
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left">
                        <label className="block mb-2">Your Email</label>
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4"
                            type="email"
                            name="Email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3
                    px-4 mt-2 h-48 resize-none'
                        name="Message" placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10
                rounded w-full'>{result ? result : "Send Message"}</button>
            </form>


        </div>
    )
}
export default Contact