import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "570ee6b2-9a37-4a1f-9886-eda844d9736d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };

  return (
    <div className="w-full overflow-hidden  md:py-32 lg:px-32 px-5 py-32 min-h-[70vh] bg-[#0f4189]" id="contact">
      <div className="container mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="w-full px-5 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] md:max-w-md mb-5">Explore how we can work for you</h2>

          <p className="text-md text-[#dfe6f1] mb-2">
            Modern Life has helped 12+ organizations and individuals build their dream houses across the country more.
          </p>
          <p className="text-md text-[#dfe6f1]">
            If you have any project that you would like to work with us on it or any questions about our company, We're good listener. Reach out now
          </p>
        </div>
        <div className="w-full px-5 md:px-10 ">
          <div className="w-full  rounded bg-[#f2f8ff]  p-5 md:p-8">
            <div className="text-2xl text-[#0f4189] font-medium text-center mb-5">
              <h2>Let's build together</h2>
            </div>
            <form action="" onSubmit={onSubmit}>
              <div className="mb-3">
                <input type="hidden" name="subject" value="New Customer Message" />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm text-[#0f4189] mb-1">
                  Your Full Name
                </label>
                <input type="text" id="name" className="w-full p-2 border border-[#0f4189] rounded-md focus:outline-none" placeholder="John Smith" />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm text-[#0f4189] mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-[#0f4189] rounded-md focus:outline-none" required />
              </div>

              <div className="mb-2">
                <label htmlFor="name" className="block text-sm text-[#0f4189] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How are you looking to us to help you?"
                  className="w-full p-2 border border-[#0f4189] rounded-md  focus:outline-none"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="mb-2">
                <button type="submit" className="bg-[#ff793f] text-[#ffffff] text-md font-medium rounded-full w-full px-8 py-3">
                  {result ? result : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
