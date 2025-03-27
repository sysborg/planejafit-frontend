import SearchIndicator from '../components/SearchIndicator'
import TopBar from '../components/TopBar'
import SearchMini from '../components/SearchMini'
import SortBy from '../components/SortBy'
import Pagination from '../components/Pagination'
import Card from '../components/Card'
import PageTitle from '../components/PageTitle'
import PageSubtitle from '../components/PageSubtitle'
import Grid from '../components/Grid'

export default function HomePage() {
  const gridHead = [
    'Customer Name',
    'Company',
    'Phone Number',
    'Email',
    'Country',
    'Status',
  ];

  const members = [
    {
      "name": "Jane Cooper",
      "company": "Microsoft",
      "phone": "(225) 555-0118",
      "email": "jane@microsoft.com",
      "country": "United States",
      "status": true
    },
    {
      "name": "Floyd Miles",
      "company": "Yahoo",
      "phone": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "country": "Kiribati",
      "status": false
    },
    {
      "name": "Ronald Richards",
      "company": "Adobe",
      "phone": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "country": "Israel",
      "status": true
    },
    {
      "name": "Marvin McKinney",
      "company": "Tesla",
      "phone": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "country": "Iran",
      "status": true
    },
    {
      "name": "Jerome Bell",
      "company": "Google",
      "phone": "(629) 555-0129",
      "email": "jerome@google.com",
      "country": "Réunion",
      "status": true
    },
    {
      "name": "Jenny Wilson",
      "company": "Amazon",
      "phone": "(505) 555-0125",
      "email": "jenny@amazon.com",
      "country": "Costa Rica",
      "status": true
    },
    {
      "name": "Kathryn Murphy",
      "company": "Microsoft",
      "phone": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "country": "Curaçao",
      "status": false
    },
    {
      "name": "Jacob Jones",
      "company": "Yahoo",
      "phone": "(208) 555-0112",
      "email": "jacob@yahoo.com",
      "country": "Brazil",
      "status": true
    }
  ];

  const badgeColumn = {
    "status": {
      "true": {
        "class": "badge badge-active",
        "label": "Active"
      },
      "false": {
        "class": "badge badge-inactive",
        "label": "Inactive"
      }
    }
  };

  return (
    <>
        {/*<SearchIndicator />
        <SearchMini />*/}
        <TopBar />
        <Card>
          <PageTitle title='Dashboard' />
          <PageSubtitle subtitle='Active Members' />
          <Grid head={gridHead} body={members} badgeColumn={badgeColumn} />
        {/*<SortBy />
        <Pagination />*/}
        </Card>
    </>
  )
}
