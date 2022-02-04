import useData from '@hooks/useData'
import { SkillModel } from '@shared/types'
import styles from '@styles/containers/Skills.module.scss'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import { useState } from 'react'
import Icon from '@components/Icon'

export default function Skills() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const data = useData<SkillModel[]>('skills.json')
  const navItems = data.map(item => item.type)

  return (
    <Container sectionId="skills" className={styles['skills-container']} page>
      <Typhography type="title" color="primary" strong upperCase header>
        Skills
      </Typhography>
      <img
        src="/images/skills_cover.jpg"
        alt="Skills cover image"
        className={styles['cover-image']}
      />
      <div className={styles.tab}>
        <ul className={styles.nav}>
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className={[
                  styles['nav-item'],
                  activeTabIndex === index && styles['nav-item--active']
                ].join(' ')}
                onClick={() => setActiveTabIndex(index)}
              >
                <Typhography type="sub-title" strong upperCase color="primary">
                  {item}
                </Typhography>
              </li>
            )
          })}
        </ul>
        <div className={styles.content}>
          {data.map((skillType, index) => {
            return (
              <div
                className={styles['tab-pane']}
                key={index}
                style={{ transform: `translateX(-${activeTabIndex * 100}%)` }}
              >
                {skillType.section.map((section, index) => {
                  return (
                    <div key={index} className={styles['pane-section']}>
                      <Typhography
                        type="sub-sub-title"
                        strong
                        upperCase
                        color="primary"
                      >
                        {section.title}
                      </Typhography>
                      <div className={styles['skills-content']}>
                        {section.skills.map((skill, index) => {
                          return (
                            <div key={index} className={styles.skill}>
                              {skill.iconName && <Icon name={skill.iconName} />}
                              {skill.name}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
