import { Flex, Span } from '@icstark/ui'
import React from 'react'
import { FaEnvelope, FaMobile, FaUserCircle, FaCheckCircle } from 'react-icons/fa'
import { Section, SubSection, UserProfile, Profile, Details } from '../styled'
// import { Section, SubSection } from '../../../style/styled'
// import { Details, Profile, UserProfile } from '../styled'
// import ManageAddress from './ManageAddress'
// import ManageVehicle from './ManageVehicle'

export const capitalize = (string: any) => {
  return string[0].toUpperCase() + string.slice(1)
}

const UserDetail = ({ Icon, detail, verify }: any) => {
  return (
    <Flex alignItemsCenter style={{ padding: '5px 0' }}>
      {Icon ? <Icon style={{ marginRight: 10 }} /> : null}
      {detail ? <Span variant="ellipsis">{detail}</Span> : null}
      {verify && <FaCheckCircle color={'#90EE90'} size={12} style={{ marginLeft: 5 }} />}
    </Flex>
  )
}

function Userprofile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <Section>
      <SubSection style={{ padding: '50px 0' }}>
        <UserProfile>
          <Flex width={[1, 0.3]} style={{ padding: '0 15px', marginBottom: 30 }}>
            <Profile>
              <FaUserCircle size={60} style={{ display: 'block', margin: '0 auto' }} />
              <Details>
                <p style={{ textTransform: 'capitalize' }}>{`${user.firstName} ${
                  user.lastName || null
                }`}</p>
                <UserDetail Icon={FaMobile} detail={user.phoneNumber} />
                <UserDetail Icon={FaEnvelope} detail={user.email} verify={user.emailVerified} />
              </Details>
            </Profile>
          </Flex>
          {/* <Flex width={[1, 0.7]} column style={{ padding: '0 15px' }}>
            <ManageAddress />
            <ManageVehicle />
          </Flex> */}
        </UserProfile>
      </SubSection>
    </Section>
  )
}
export default Userprofile
