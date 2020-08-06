import React from 'react'
import CandidateExp from '../component/CandidateExp'
import TrustedBy from '../component/TrustedBy'
import RecruitersTalk from '../component/RecruitersTalk'

function Feedback() {
  return (
    <div style={{ width: '90%', margin: '4vmax auto' }}>
      <TrustedBy />
      <RecruitersTalk />
      <CandidateExp />
    </div>
  )
}
export default Feedback
