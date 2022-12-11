import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFeildChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 ">
      {isLoading && "Loader..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px] "
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            LabelName="Your Name *"
            placeholder="Prateek Krishna"
            inputType="text"
            value={form.name}
            handleChange={(e) => {handleFormFeildChange('name', e)}}
          />
          <FormField
            LabelName="Campign Title *"
            placeholder="Add a campaign"
            inputType="text"
            value={form.title}
            handleChange={(e) => {handleFormFeildChange('title', e)}}
          />
        </div>
        <FormField
          LabelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => {handleFormFeildChange('description', e)}}
        />

        <div className="w-full flex justify-center items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="bag" className="w-40px h-40px object-contain" />
          <h4 className="font-epilogue font-bold text-[25px] ml-[20px] text-white ">
            You'll will get 100% of the raised amount{" "}
          </h4>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            LabelName="Goal *"
            placeholder="ETH 0.5"
            inputType="text"
            value={form.target}
            handleChange={(e) => {handleFormFeildChange('target', e)}}
          />
          <FormField
            LabelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => {handleFormFeildChange('deadline', e)}}
          />
          <FormField
            LabelName="Compaign Image *"
            placeholder="Paste Url of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => {handleFormFeildChange('image', e)}}
          />
        </div>
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
