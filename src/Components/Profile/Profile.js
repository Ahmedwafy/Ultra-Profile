import React, {useState , useEffect} from "react";
import axios from "axios";

import { ProfileAndSkills, ProfileWrapper, ProfileList, ProfilTitle, SpanTitle, ProfileItem, ItemSpan,
        Skills, SkillsDesc, Bar, Title, Percentage, SpanParent, Span, SkillsTitle, SkillsSpanTitle,
} from "./ProfileStyle.js"

const Profile = () => {
  // Profile
  const [ profile , setProfile ] = useState([])

  useEffect ( () => {
    axios.get('/js/data.json').then( res => {setProfile(res.data.profile)} )
  } , [] )

  const ProfileInfo = profile.map((Element) => {
    return (
      <ProfileList key={Element.id}>
        <ProfileItem>
            <ItemSpan>{Element.label}</ItemSpan>
            {Element.value}
        </ProfileItem>
      </ProfileList>
    )
  })

  // Skills
  const [ skills , setSkills ] = useState([])

  useEffect ( () => {
    axios.get('/js/data.json').then( res => {setSkills(res.data.skills)} )
  } , [] )

  const skillsInfo = skills.map((Element) => {
    return (
      <Bar key={Element.id}>
        <Title>{Element.title}</Title>
        <Percentage>{Element.percentage}</Percentage>
        <SpanParent>
            <Span></Span>
        </SpanParent>
      </Bar>
    )
  })


  return (
    
    <ProfileAndSkills>
      <div className="container">
        <ProfileWrapper>
          <ProfilTitle><SpanTitle>My </SpanTitle>Profile</ProfilTitle>
          <div>{ProfileInfo}</div>
        </ProfileWrapper>
        


        <Skills>
          <SkillsTitle>Some <SkillsSpanTitle>skills</SkillsSpanTitle></SkillsTitle>
          <SkillsDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
         
          <div>{skillsInfo}</div>
          
        </Skills>    
    </div>
</ProfileAndSkills>

  );
}
export default Profile;
