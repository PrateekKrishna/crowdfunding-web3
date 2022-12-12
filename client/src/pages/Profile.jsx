import {useState, useEffect, useContext} from 'react'
import DisplayCampaigns from '../components/DisplayCampaigns'
import {useStateContext} from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])  
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(()=>{
    if(contract){
      fetchCampaigns();
    }
  }, [address, contract])
  return (
    <div>
      <DisplayCampaigns 
      title = "All Campaigns"
      isLoading = {isLoading}
      campaigns = {campaigns}
      />
    </div>
  )
}

export default Profile