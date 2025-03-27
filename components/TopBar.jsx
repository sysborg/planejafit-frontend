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
            <p className='text-[13px] font-normal text-green-600 mt-1'>
              ▲ 16% this month
            </p>
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
            <p className='text-[13px] font-normal text-red-500 mt-1'>
              ▼ 1% this month
            </p>
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
            <div className='flex mt-2'>
              <img
                src='/avatar-1.png'
                alt='User 1'
                className='w-[26px] h-[26px] rounded-full border-2 border-white -ml-1'
              />
              <img
                src='/avatar-2.png'
                alt='User 2'
                className='w-[26px] h-[26px] rounded-full border-2 border-white -ml-1'
              />
              <img
                src='/avatar-3.png'
                alt='User 3'
                className='w-[26px] h-[26px] rounded-full border-2 border-white -ml-1'
              />
              <img
                src='/avatar-4.png'
                alt='User 4'
                className='w-[26px] h-[26px] rounded-full border-2 border-white -ml-1'
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
