import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-neutral-800 w-full ">
        <p>Productize Yourself</p>
      </div>

      <nav className="bg-[#0A2540] p-4  w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Airbills Digital
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-[#FF6F00]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#FF6F00]">About</Link>
          <Link href="/services" className="text-white hover:text-[#FF6F00]">Services</Link>
          <Link href="/contact" className="text-white hover:text-[#FF6F00]">Contact</Link>
        </div>
      </div>
    </nav>

      
    <section className="bg-dark-navy text-white py-20 w-full">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">We build digital experiences that resonate</h1>
        <p className="mb-8">Lets create something amazing together.</p>
        <div className="flex justify-center space-x-4">
          <a href="#start-project" className="bg-white text-dark-navy px-4 py-2 rounded shadow hover:bg-accent-orange hover:text-white transition duration-300">Start a Project</a>
          <a href="#hire-talent" className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-accent-orange hover:border-accent-orange transition duration-300">Hire Talent</a>
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
      </div>
    </section>


      <h1>Formula Airbills</h1>

      <div>
        <p>Nav Bar Section</p>
      </div>
      
      <div>
        <p>Hero Section</p>
      </div>

      <div>
        <p>About Section</p>
      </div>

      <div>
        <p>Success Stories Section</p>
      </div>

      <div>
        <p>Contact Us Section</p>
      </div>

      <div>
        <p>Connect with Us Section</p>
      </div>

    
      <div>
        <p>Footer Section</p>
      </div>

    

   </main>
  );
}
