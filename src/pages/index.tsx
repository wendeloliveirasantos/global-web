import { MainLayout } from '@/components/common/layouts'
import { AboutUsHome, HeroHome, InsurancesHome } from '@/components/common/home'


export default function Home() {
  return (
    <MainLayout>
      <HeroHome />
      <InsurancesHome />
      <AboutUsHome />
    </MainLayout>
  )
}
