"use client";
import Link from "next/link";


const ContactFormSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Sidebar Info - Dark/Brand Background */}
          <div className="lg:w-2/5 bg-gray-50 p-8 md:p-12 text-black flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Πείτε μας ένα γεια!</h2>
              <p className="mb-12 text-lg">
                Είμαστε εδώ για να λύσουμε κάθε σας απορία σχετικά με τα μαθήματα και τα events μας.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-[#B9007C] text-white rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <Link href="https://goo.gl/maps/JcsmcnZoeBJNC8Ha8" target="_blank" className="hover:text-[#B9007C] transition-colors">
                    <h3 className="font-bold text-sm  tracking-wider opacity-70">Τοποθεσία</h3>
                    <p className="text-lg">Αρτέμιδος 42, Θεσσαλονίκη</p>
                  </Link>
                </div>

                <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-[#B9007C] text-white rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <Link href="tel:6948577225" target="_blank" className="hover:text-[#B9007C] transition-colors">
                    <h3 className="font-bold text-sm  tracking-wider opacity-70">Τηλέφωνο</h3>
                    <p className="text-lg">6948577225</p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#B9007C] text-white rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <Link href="mailto:info@aiorisis.gr" target="_blank" className="hover:text-[#B9007C] transition-colors">
                    <h3 className="font-bold text-sm  tracking-wider opacity-70">Email</h3>
                    <p className="text-lg">info@aiorisis.gr</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/20">
              <p className="text-sm opacity-80 leading-relaxed italic">"Η κίνηση είναι ελευθερία. Ελάτε να αιωρηθούμε μαζί."</p>
            </div>
          </div>

          {/* Form Column - Clean White */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname" className="text-xs font-bold tracking-widest text-gray-400 ml-1">Ονοματεπώνυμο</label>
                <input 
                  id="fullname"
                  name="fullname"
                  type="text" 
                  placeholder="Ιωάννης Παπαδόπουλος"
                  className="px-4 py-4 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#B9007C] focus:ring-0 transition-all border-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest text-gray-400 ml-1">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="example@mail.com"
                  className="px-4 py-4 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#B9007C] focus:ring-0 transition-all border-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-bold tracking-widest text-gray-400 ml-1">Τηλέφωνο</label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  placeholder="69XXXXXXXX"
                  className="px-4 py-4 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#B9007C] focus:ring-0 transition-all border-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold tracking-widest text-gray-400 ml-1">Θέμα</label>
                <select id="subject" name="subject" className="px-4 py-4 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#B9007C] focus:ring-0 transition-all border-2 cursor-pointer">
                  <option>Μαθήματα</option>
                  <option>Retreat</option>
                  <option>Event</option>
                  <option>Άλλο</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-gray-400 ml-1">Το μήνυμά σας</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                  className="px-4 py-4 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-[#B9007C] focus:ring-0 transition-all border-2 resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#B9007C] hover:bg-[#9a0068] text-white font-bold py-5 rounded-xl transition-all shadow-xl hover:shadow-[#B9007C]/20 active:scale-[0.98]"
                >
                  Αποστολή Μηνύματος
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;