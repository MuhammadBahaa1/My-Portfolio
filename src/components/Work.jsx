/**
 * @copyright Copyright (c) 2024 MohammedBahaa
 * @license Apache-2.0
 */


import ProjectCard from "./ProjectCard";



const works = [
  {
    imgSrc: 'images/sabb-al3ezza.gif',
    title: 'سبب العزة',
    tags: ['Animation', 'Social Media Designs', 'Content'],
    projectLink: 'https://www.behance.net/mohammadhassan8s'
  },
  {
    imgSrc: '/images/power.png',
    title: 'Power for Chemicals & Plasts',
    tags: ['Animation', 'Multi-Media Designs', 'Web Development'],
    projectLink: 'https://www.behance.net/mohammadhassan8s'
  },
  {
    imgSrc: '/images/ACP.gif',
    title: 'Alexa for Chemicals & Plasts',
    tags: ['Animation', 'Explainer Video'],
    projectLink: 'https://www.behance.net/mohammadhassan8s'
  },
  {
    imgSrc: '/images/sm2.png',
    title: 'Social Media Designs',
    tags: ['Social Media Designs'],
    projectLink: 'https://www.behance.net/mohammadhassan8s'
  }
  /*{
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://www.behance.net/mohammadhassan8s'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://www.behance.net/mohammadhassan8s'
  },**/
];

/**
 * Components
 */

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
        My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work;