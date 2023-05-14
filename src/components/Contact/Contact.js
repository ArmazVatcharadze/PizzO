import "./contact.css";

function Contact() {
  return (
    <div className="contact-wrap">
      <div className="image-div">
        <img
          className="contact-img"
          src="https://images.unsplash.com/photo-1565748966642-cbfd46f9ba3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenplcmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="pizza"
        />
      </div>

      <div className="contact-div">
        <h1>Contact Us</h1>
        <form className="font-cont">
          <label for="name">Name</label>
          <input className="input-cont" for="name" placeholder="Fullname" />

          <label for="name">Email</label>
          <input className="input-cont" for="name" placeholder="Email" />

          <textarea row="10"></textarea>
        </form>
        <button className="button-cont">Send</button>
      </div>
    </div>
  );
}

export default Contact;
