/**
 * @copyright Copyright (c) 2024 MohammedBahaa
 * @license Apache-2.0
 */

const aboutItems = [
  /*{
    label: 'Project done',
    number: 45
  },*/
  {
    label: 'Years of experience',
    number: 3
  }
];



const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          My name is Mohammad Bahaa, and I am a creative motion designer and web designer with over three years of experience. I specialize in 2D animation, explainer videos, advanced motion graphics, logo design, and social media content. In addition to my expertise in Adobe After Effects, Photoshop, and Premiere Pro, I also design and develop modern, user-friendly websites. With a passion for creativity and a commitment to precision, I combine design and technology to deliver captivating visuals and seamless online experiences. I am always evolving and ready to bring your ideas to life with style and excellence.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number}, key) =>(
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-red-700 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img src="images/logo-04 (small).svg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About