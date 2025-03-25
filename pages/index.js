import DashboardSidebar from '../components/DashboardSidebar'
import SearchIndicator from '../components/SearchIndicator'
import TopBar from '../components/TopBar'
import DashboardContent from '../components/DashboardContent'
import SearchMini from '../components/SearchMini'
import SortBy from '../components/SortBy'
import Pagination from '../components/Pagination'
export default function HomePage() {
  return (
    <div className='relative min-h-screen bg-[#F5F6F8]'>
      <DashboardSidebar />
      <SearchIndicator />
      <TopBar />
      <SearchMini />
      <DashboardContent />
      <SortBy />
      <Pagination />
    </div>
  )
}
