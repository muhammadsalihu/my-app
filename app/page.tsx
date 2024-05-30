import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <nav className="bg-[#0A2540] p-16 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Airbills Digital
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-[#FF6F00]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#FF6F00]">About</Link>
          <Link href="/services" className="text-white hover:text-[#FF6F00]">Services</Link>
          <Link href="/contact" className="text-white hover:text-[#FF6F00]">Contact</Link>
          
          <button className='bg-custom-red text-sm px-4 py-2 rounded-full shadow hover:bg-accent-orange hover:text-white transition duration-300'>Connect TikTok</button>
        </div>
      </div>
    </nav>

      
    <section className="bg-dark-navy text-white py-20 w-full">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">We build digital experiences that resonate</h1>
        <p className="mb-8">Lets create something amazing together.</p>
        <div className="flex justify-center space-x-4">
          <a href="#start-project" className="bg-custom-red text-sm px-4 py-2 rounded-full shadow hover:bg-accent-orange hover:text-white transition duration-300">Start a Project</a>
          {/* <a href="#hire-talent" className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-accent-orange hover:border-accent-orange transition duration-300">Hire Talent</a> */}
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-[#0A2540]">About Airbills Digital</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#0A2540]">Our Mission</h3>
          <p className="text-lg text-[#0A2540]">
            Airbills Digital is committed to building digital experiences that resonate with users and provide real value. We strive to innovate and deliver top-notch IT services tailored to the unique needs of our clients.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#0A2540]">Our Team</h3>
          <p className="text-lg text-[#0A2540] mb-4">
            Our team is composed of skilled professionals with diverse backgrounds in IT, design, and development. We are passionate about leveraging technology to create impactful digital solutions.
          </p>
          <p className="text-lg text-[#0A2540]">
            Based in Abuja, Nigeria, we encourage in-person visits during business hours. We are always ready to discuss how we can help you achieve your business goals.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#0A2540]">Our Services</h3>
          <p className="text-lg text-[#0A2540] mb-4">
          At Airbills Digital, we offer a wide range of IT services to meet the needs of small businesses. From UI/UX Design and Frontend Development to LLM Development.
          </p>
          <p className="text-lg text-[#0A2540]">
          we have the expertise to help you achieve your goals and keep your business running smoothly
          </p>
        </div>
      </div>
    </section>

    <section className='p-20 w-full'>
      <div className='container '>
        <h2 className='text-3xl font-bold mb-12 text-center'>Contact Us</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>

            <h3 className='text-2xl mb-2'>Better yet, see us in person</h3>
            <p className='mb-6'>We love our customers, so feel free to visit during normal business hours.</p>

            <h3 className='text-2xl mb-2'>Airbills Digital</h3>
            <p className='mb-6'>Suite B8, 2XL Mall, Beside Zenith Bank, Und St. Gwarinpa 3rd Avenue.</p>
            <p className='mb-6'>Abuja, Nigeria.</p>
            <p className='mb-6'>Call us at <span className='text-custom-red'>+2348079454558</span></p>
            <p className='mb-6'>Send us an email at <span className='text-custom-red'>hello@airbills.xyz</span></p>

            <h3 className='mb-4 text-2xl mb-2'>Hours Open</h3>
            <p className='mb-8'>Open Today <span className='text-custom-red'>09:00 to 17:00</span></p>
            <button className='px-10 w-15 bg-custom-red p-3 rounded-full'>Drop Us a Line!</button>
          </div>

          
         
          <div>
            <Image 
              src='/images/ads-bikes.png'
              alt="Airbills Digital Bikes"
              width={500}
              height = {300}
            />
          </div>
        </div>
      </div>
    </section>

    <section className='bg-custom-red w-full p-20 '>
      {/* Contact Us  */}
      <div className='flex flex-col  justify-self-center'> 
        <h2 className='text-2xl mb-12'>Connect With Us</h2>

        <div className='flex flex-row space-x-12'>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
    </section>


    <section className='w-full p-20 bg-[#161616] mb-4'>
      <div className='flex justify-center mb-8'>
        <p className='w-15'>Subscribe</p>
        <input className=' w-3/6 border-b-gray-50' type="email" name="ibrahim@airbills.xyz" id="newsletter" />
        <button className='w-15 bg-custom-red p-3 rounded-full'>Sign Up</button>
      </div>
      <p className='text-center'>Get 10% off your first purchase when you sign up for our newsletter!</p>
    </section>
  

    <section className='w-full flex justify-center mb-8 bg-[#161616]'>
      <div className="border-b border-gray-100 w-4/5"></div>
    </section>

    <section className='w-full bg-[#161616] p-10'> 
      <div className='flex justify-between px-12 mb-6'>
        <p>ddgdggdg</p>
        <p>fdfdf</p>
      </div>

      <div className="flex space-x-4 bg- justify-center">
          <Link href="/" className="text-white hover:text-[#FF6F00]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#FF6F00]">About</Link>
          <Link href="/services" className="text-white hover:text-[#FF6F00]">Services</Link>
          <Link href="/contact" className="text-white hover:text-[#FF6F00]">Contact</Link>
        </div>
    </section>
    

    

   </main>
  );
}
