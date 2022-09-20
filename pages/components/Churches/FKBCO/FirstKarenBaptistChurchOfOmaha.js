import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'

function FirstKarenBaptistChurchOfOmaha() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
      <Header/>
      <Navbar/>
      <Image src='/images/FirstKarenBaptistChurchOfOmahaImage/First Karen Baptist Church of Omaha.jpg' width={1024} height={260} alt='omaha'/>
      <div className='flex bg-white'>
        <ContentTemplatesLeft
          title="l" 
          pic="/images/FirstKarenBaptistChurchOfOmahaImage/Nuyttin.jpg"
          description="k"
          title2="o"
          title3="s"
          />
        <ContentTemplatesRight/>
      </div>
      <Footer/>
    </div>
  )
}

export default FirstKarenBaptistChurchOfOmaha