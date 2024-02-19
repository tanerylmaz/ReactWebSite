import React from 'react'
import SocialIcon from './SocialIcon';

function FollowMe() {
    return (
        <div id='followMe'>
            <SocialIcon link="https://www.facebook.com" icon="facebook" />
            <SocialIcon link="https://www.instagram.com" icon="instagram" />
            <SocialIcon link="https://www.twitter.com" icon="twitter" />
            <SocialIcon link="https://www.linekdin.com" icon="linkedin" />
            <span>Follow Me</span>
        </div>
    )
}

export default FollowMe;