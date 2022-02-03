import useData from '@hooks/useData'
import { SkillModel } from '@shared/types'
import styles from '@styles/containers/Skills.module.scss'
import Typhography from '@components/Typhography'
import Container from '@components/Container'

export default function Skills() {
  const data = useData<SkillModel>('skills.json')
  console.log(data)
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
    </Container>
  )
}
