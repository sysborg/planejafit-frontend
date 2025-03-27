import Card from "./Card"

export default function DashboardContent() {
  return (
    <>
      <Card>
       <h2 className='text-[22px] font-semibold text-[#000000] mb-1'>
          All Customers
        </h2>
        <p className='text-sm text-[#16C098] mb-4 font-medium'>Active Members</p>

        <table className='min-w-full table-auto'>
          <thead>
            <tr className='text-left text-gray-500 border-b'>
              <th className='w-[180px] px-4 py-3'>Customer Name</th>
              <th className='w-[140px] px-4 py-3'>Company</th>
              <th className='w-[160px] px-4 py-3'>Phone Number</th>
              <th className='w-[220px] px-4 py-3'>Email</th>
              <th className='w-[140px] px-4 py-3'>Country</th>
              <th className='w-[100px] px-4 py-3'>Status</th>
            </tr>
          </thead>
          <tbody className='text-sm text-[#292D32] font-medium'>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Jane Cooper</td>
              <td className='px-4 py-4'>Microsoft</td>
              <td className='px-4 py-4'>(225) 555-0118</td>
              <td className='px-4 py-4'>jane@microsoft.com</td>
              <td className='px-4 py-4'>United States</td>
              <td className='px-4 py-4'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Active
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Floyd Miles</td>
              <td className='px-4 py-4'>Yahoo</td>
              <td className='px-4 py-4'>(205) 555-0100</td>
              <td className='px-4 py-4'>floyd@yahoo.com</td>
              <td className='px-4 py-4'>Kiribati</td>
              <td className='px-4 py-4'>
                <span className='bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Inactive
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Ronald Richards</td>
              <td className='px-4 py-4'>Adobe</td>
              <td className='px-4 py-4'>(302) 555-0107</td>
              <td className='px-4 py-4'>ronald@adobe.com</td>
              <td className='px-4 py-4'>Israel</td>
              <td className='px-4 py-4'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Active
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Marvin McKinney</td>
              <td className='px-4 py-4'>Tesla</td>
              <td className='px-4 py-4'>(252) 555-0126</td>
              <td className='px-4 py-4'>marvin@tesla.com</td>
              <td className='px-4 py-4'>Iran</td>
              <td className='px-4 py-4'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Active
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Jerome Bell</td>
              <td className='px-4 py-4'>Google</td>
              <td className='px-4 py-4'>(629) 555-0129</td>
              <td className='px-4 py-4'>jerome@google.com</td>
              <td className='px-4 py-4'>Réunion</td>
              <td className='px-4 py-4'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Active
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Jenny Wilson</td>
              <td className='px-4 py-4'>Amazon</td>
              <td className='px-4 py-4'>(505) 555-0125</td>
              <td className='px-4 py-4'>jenny@amazon.com</td>
              <td className='px-4 py-4'>Costa Rica</td>
              <td className='px-4 py-4'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Active
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Kathryn Murphy</td>
              <td className='px-4 py-4'>Microsoft</td>
              <td className='px-4 py-4'>(406) 555-0120</td>
              <td className='px-4 py-4'>kathryn@microsoft.com</td>
              <td className='px-4 py-4'>Curaçao</td>
              <td className='px-4 py-4'>
                <span className='bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Inactive
                </span>
              </td>
            </tr>
            <tr className='border-t border-[#EEE]'>
              <td className='px-4 py-4'>Jacob Jones</td>
              <td className='px-4 py-4'>Yahoo</td>
              <td className='px-4 py-4'>(208) 555-0112</td>
              <td className='px-4 py-4'>jacob@yahoo.com</td>
              <td className='px-4 py-4'>Brazil</td>
              <td className='px-4 py-4'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  Active
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  )
}
