import useData from '@hooks/useData'
import { ProjectViewModel, ThumbnailCardViewModel } from '@shared/types'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import styles from '@styles/containers/Project.module.scss'
import ThumbnailCard from '@components/Card/ThumbnailCard'
import useHorizontalScroll from '@hooks/useScrollHorizontal'
import { useEffect, useState } from 'react'

function ExtractCategories(data: ProjectViewModel[]) {
  var categories: string[] = ['All']

  data.forEach(item => {
    item.categories.forEach(category => {
      if (categories.indexOf(category) === -1) {
        categories.push(category)
      }
    })
  })

  return categories
}

export default function Project() {
  const data = useData<ProjectViewModel[]>('projects.json')
  const scrollRef = useHorizontalScroll()
  const navItems = ExtractCategories(data)
  const [selectedCategory, setSelectedCategory] = useState('All')
  let [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    let newData =
      selectedCategory == 'All'
        ? data
        : data.filter(e => e.categories.includes(selectedCategory))

    setFilteredData(newData)
  }, [selectedCategory])

  return (
    <Container sectionId="project" page className={styles['project-container']}>
      <Typhography type="title" color="primary" strong upperCase header>
        Projects
      </Typhography>
      <ul className={styles.nav}>
        {navItems.map((item, index) => {
          return (
            <li
              key={index}
              className={[
                styles['nav-item'],
                selectedCategory === item && styles['nav-item--active']
              ].join(' ')}
              onClick={() => setSelectedCategory(item)}
            >
              <Typhography type="sub-title" strong upperCase color="primary">
                {item}
              </Typhography>
            </li>
          )
        })}
      </ul>
      <div className={styles['card-list']}>
        <div className={styles.content} ref={scrollRef}>
          {filteredData.map((item, index) => {
            return (
              <ThumbnailCard
                data={item as ThumbnailCardViewModel}
                page="project"
                key={index}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}
