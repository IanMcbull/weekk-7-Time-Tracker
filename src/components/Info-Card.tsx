import profilePhoto from '../assets/images/image-jeremy.png'
function InfoCard() {
  return (
    <section className='flex flex-col bg-dark-blue rounded-b-md w-64'>
        <div className="flex flex-col bg-blue p-10 space-y-4 rounded-md">
        <div className="user-information space-y-12">
          <img src={profilePhoto} alt="profile photo" className='w-24'/>
           <div className='pb-10'>
           <p className='text-pale-blue font-rubik font-[300]'>Report for</p>
           <h2 className='max-w-md text-white font-rubik font-[300] text-3xl'>JEREMY ROBSON</h2>
           </div>
        </div>
    </div>
    <div className='flex flex-col p-10 space-y-2 font-rubik'>
       <p className='text-desaturated-blue'>Daily</p>
       <p className='text-white'>Weekly</p>
       <p className='text-desaturated-blue'>Monthly</p>
    </div>
    </section>
  )
}

export default InfoCard