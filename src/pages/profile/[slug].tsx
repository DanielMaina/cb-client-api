import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IParams, RootStore } from '../../utils/Typescript'

import UserInfo from '../../components/profile/UserInfo'
import OtherInfo from '../../components/profile/OtherInfo'
import HireCrew from '../../components/profile/HireCrew'

const Profile = () => {
  const { slug }: IParams = useParams()
  const { auth } = useSelector((state: RootStore) => state)

  return (
    <div className="row my-3">
      <div className="col-md-5 mb-3">
        {
          auth.user?._id === slug
          ? <UserInfo />
          : <OtherInfo />
        }
      </div>

      <div className="col-md-7">
        <HireCrew />
      </div>
    </div>
  )
}

export default Profile