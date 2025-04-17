const Contact = () => {
  return (
    <section>
      <h2 className="py-5">Get in Touch</h2>
      <div className="flex">
        <div className="space-y-5 flex-1"> 
          <h3 className="">Contact Information</h3>
          <p className="w-[80%] text-center">
            I'd love to hear from you! Whether you have a question, project, or
            just want to connect, feel free to reach out. I'll get back to you
            as soon as possible.
          </p>
          <ul>
            <li>
              <span></span>
              <span>
                <h4>Email</h4>
                <p>ndichujames2030@gmail.com</p>
              </span>
            </li>
            <li>
              <span></span>
              <span>
                <h4>Email</h4>
                <p>ndichujames2030@gmail.com</p>
              </span>
            </li>
            <li>
              <span></span>
              <span>
                <h4>Email</h4>
                <p>ndichujames2030@gmail.com</p>
              </span>
            </li>
          </ul>
          <div>
            <h4>Connect on Social Media</h4>
            <ul className="flex gap-5">
              <li>Linked</li>
              <li>Github</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 bg-white p-5">
          <h3 className="py-2">Send Me a Message</h3>
          <form method="post" className="flex flex-col gap-5">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" className="bg-gray-200 p-2" />
            <label htmlFor="email">Email</label>
            <input type="text" name="" id="email"  className="bg-gray-200 p-2" />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="" id="subject"  className="bg-gray-200 p-2" />
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" rows="5" className="bg-gray-200 p-2"></textarea>
            <button className="bg-primary text-white p-3 rounded-2xl" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
