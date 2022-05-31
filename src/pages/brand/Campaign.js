import React from 'react'
import NewCampaign from './NewCampaign'
import ActiveCampaign from './ActiveCampaign'
import AssignedCampaign from './AssignedCampaign'
import RejectedCampaign from './RejectedCampaign'

export default function Campaign() {
    return (
        <div>
            <ul>
                <li><NewCampaign /></li>
                <li><AssignedCampaign /></li>
                <li><ActiveCampaign /></li>
                <li><RejectedCampaign /></li>
            </ul>
        </div>
    )
}