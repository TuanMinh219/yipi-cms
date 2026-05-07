import { pageConfigs } from '@/assets/data/learningData'
import EntityPage from '@/pages/shared/EntityPage'

export default function Lessons() {
  return <EntityPage config={pageConfigs.lessons} />
}
