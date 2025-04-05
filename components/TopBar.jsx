import Card from "./Card"

export default function TopBar() {
  return (
    <Card>
      <div className="grid grid-cols-3 gap-4 justify-between">
        <div className='flex items-center gap-4'>
          <div className='w-[84px] h-[84px] bg-[#D3FFE7] rounded-full flex items-center justify-center'>
            <img
              src='profile-2user.svg'
              alt='profile 2 Icon'
              className='w-[42px] h-[42px]'
            />
          </div>
          <div>
            <p className='text-sm font-normal text-[#ACACAC]'>Total Customers</p>
            <h2 className='text-[32px] font-semibold text-[#333333]'>5,423</h2>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='w-[84px] h-[84px] bg-[#D3FFE7] rounded-full flex items-center justify-center'>
            <img
              src='profile-tick.svg'
              alt='profile tick Icon'
              className='w-[42px] h-[42px]'
            />
          </div>
          <div>
            <p className='text-sm font-normal text-[#ACACAC]'>Members</p>
            <h2 className='text-[32px] font-semibold text-[#333333]'>1,893</h2>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='w-[84px] h-[84px] bg-[#D3FFE7] rounded-full flex items-center justify-center'>
            <img
              src='monitor.svg'
              alt='monitor Icon'
              className='w-[42px] h-[42px]'
            />
          </div>
          <div>
            <p className='text-sm font-normal text-[#ACACAC]'>Active Now</p>
            <h2 className='text-[32px] font-semibold text-[#333333]'>189</h2>
          </div>
        </div>
      </div>
    </Card>
  )
}
