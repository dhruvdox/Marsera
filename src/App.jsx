import React from 'react';
import { 
  Users, Package, Scissors, Camera, Award, Trophy,
  CheckCircle, ArrowRight
} from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="bg-black text-gray-200 font-sans min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg">
        {/* Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-red-800/30 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-red-900/20 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-2 h-48 bg-gradient-to-b from-red-700 to-transparent"></div>
        <div className="absolute top-1/3 right-16 w-16 h-16 border-2 border-purple-800/40 rounded-full"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 flex justify-center">
            <img src="/Marsera logo try 2 copy NN.png" alt="Marsera Logo" className="h-10 w-auto"/>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gradient leading-tight">
            Where India's Finest Design Minds Compete
          </h1>

          <p className="text-xl md:text-2xl mb-16 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Marsera is India's first fashion design battle where college teams prove their talent to get industry attention, Jury mentorship, cash prizes & more.
          </p>

          <a 
            href="https://docs.google.com/forms/d/16L8kCB5hqhy9URXOYCLi5gLsCQzcEmLpQrBZYjJYQ0E/edit"
            target="_blank" rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-600 text-white px-20 py-8 rounded-full text-3xl font-semibold button-hover inline-block"
          >
            REGISTER
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 bg-black">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">
            About <span className="text-red-500">Marsera</span>
          </h2>

          <div className="bg-gray-900/70 backdrop-blur rounded-3xl p-12 border border-gray-700">
            <p className="text-2xl leading-relaxed text-gray-300">
              We provide the tees. You design them. The top designers are celebrated with a cash prize, certificate & industry attention. At Marsera, we're constantly looking for India's prime fashion talent.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            How It <span className="text-red-500">Works</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Users, title: "Register in Teams", desc: "Register in teams of two (₹299 per head)", step: "01" },
              { icon: Package, title: "Receive Your Tee", desc: "Marsera delivers the plain white tee to you through your college", step: "02" },
              { icon: Scissors, title: "Design & Create", desc: "Reimagine and style the t-shirt using techniques like DTF printing and embroidery.", step: "03" },
              { icon: Camera, title: "Submissions", desc: "Submit the final t-shirt to Team Marsera at a venue close to your college", step: "04" },
              { icon: Award, title: "Jury's Decision", desc: "Design Professors and designers from Balenciaga, Reliance Brands, etc judge the entries", step: "05" },
              { icon: Trophy, title: "Winners' Perks", desc: "Winning team gets certificates, cash prize, feedback round from the Jury, and attention from the industry", step: "06" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-900/70 backdrop-blur rounded-3xl p-10 border border-gray-700 card-hover">
                  <div className="text-6xl font-bold text-red-900/30 mb-6">{item.step}</div>
                  <div className="bg-gradient-to-r from-red-700 to-purple-800 p-6 rounded-xl inline-block mb-6">
                    <item.icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jury & Certificates */}
      <section className="relative py-32 px-6 bg-black">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-700 to-purple-800 p-4 rounded-2xl inline-block mb-8">
            <Award className="w-16 h-16 text-white"/>
          </div>

          <h2 className="text-5xl font-bold mb-8">
            Jury & <span className="text-red-500">Certificates</span>
          </h2>

          <div className="bg-gray-900/70 backdrop-blur rounded-3xl p-12 border border-gray-700">
            <p className="text-2xl leading-relaxed text-gray-300 mb-8">
              Judged by SMI Bengaluru professors and leading fashion industry experts, with official certificates signed by the jury.
            </p>

            <div className="flex items-center justify-center space-x-4 text-red-500">
              <CheckCircle className="w-6 h-6"/>
              <span className="text-xl">Industry Recognition</span>
              <CheckCircle className="w-6 h-6"/>
              <span className="text-xl">Expert Evaluation</span>
              <CheckCircle className="w-6 h-6"/>
              <span className="text-xl">Official Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 px-6 bg-black">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gradient leading-tight">
            Think you have what it takes?
          </h2>

          <p className="text-3xl mb-16 text-gray-400 font-light">
            Join the battle. Design your legacy.
          </p>

          <a 
            href="https://docs.google.com/forms/d/16L8kCB5hqhy9URXOYCLi5gLsCQzcEmLpQrBZYjJYQ0E/edit"
            target="_blank" rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-600 text-white px-24 py-10 rounded-full text-3xl font-semibold button-hover group inline-block"
          >
            REGISTER
            <ArrowRight className="inline ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform"/>
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;
