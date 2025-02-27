
const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" required className="h-12 rounded-lg bg-gray-400 bg-opacity-50 px-2 text-white placeholder-opacity-100"/>
        <input type="email" placeholder="Your Email" required className="h-12 rounded-lg bg-gray-400 bg-opacity-50 px-2 placeholder-opacity-100"/>
        <textarea type="text" cols="50" rows="9" placeholder="Message" required className="rounded-lg bg-gray-400 bg-opacity-50 p-2 placeholder-opacity-100"></textarea>
        <button type="submit" className="w-full rounded-lg border border-cyan-400 text-white h-12 font-bold text-xl hover:bg-cyan-800 bg-cyan-500 transition-all duration-500 ">Send</button>
      </form>
    </div>
  );
 
}

export default ContactForm;