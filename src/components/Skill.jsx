/**
 * @copyright Copyright (c) 2024 MohammedBahaa
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/adobe-after-effects.svg',
    label: 'Adobe After Effects',
    desc: 'Design & Animation tool'
  },
  {
    imgSrc: '/images/adobe-photoshop.svg',
    label: 'Adobe Photoshop',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/adobe-illustrator.svg',
    label: 'Adobe Illustrator',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/adobe-premiere.svg',
    label: 'Adobe Premiere pro',
    desc: 'Editing tool'
  },
  {
    imgSrc: '/images/webflow.svg',
    label: 'WebFlow',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/html-5.svg',
    label: 'HTML5',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/notion.svg',
    label: 'Notion',
    desc: 'Productivity tool'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
        Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        Explore the innovative tools I use to create stunning animations, engaging designs, and high-performing websites.
        </p>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))
        }
      </div>

      </div>
    </section>
  )
}

export default Skill