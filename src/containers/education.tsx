import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '@styles/containers/About.module.scss'

const About: NextPage = () => {
  return (
    <section
      className={['container', styles['about-container']].join(' ')}
      id="education"
    >
      <div className="typhography typhography-title typhography-header">
        Education
      </div>
      <div className={styles.description}>
        <p>
          I am a Software Developer who designs, builds and sometimes
          applications. I like to participate and build well-structured
          applications in terms of architecture and code quality. I also like to
          deliver a product with great design and that promotes a good user
          experience.
        </p>
        <p>
          With a degree in computer engineering, having previously taken a
          course in computer systems management and programming technician, one
          of my goals is to grow in terms of knowledge, which is why I always
          keep up with technological news and learn new languages ​​and tools.
        </p>
        <p>
          I am a professional of back-end and front-end. I have been developing
          applications in C# for backend and ReactJS for frontend, but I am fit
          and available for development in other stacks.
        </p>
        <p>
          In my spare time I like to develop new ideas and personal
          applications, from the creation of the graphical interface to its
          final functionalities. Another of my hobbies is exercising and
          cooking.
        </p>
      </div>
    </section>
  )
}

export default About
