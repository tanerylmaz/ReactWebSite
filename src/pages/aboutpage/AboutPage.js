import React from 'react'
import PageTitle from '../../components/pagetitle/PageTitle';
import ProgressContainer from '../../components/progress/ProgressContainer';
import ProgressItem from '../../components/progress/ProgressItem';

function AboutPage() {
    return (
        <div className='pages container' id='aboutPage'>
            <PageTitle title="Hakkımda" />
            <div className='pageContent'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti amet blanditiis porro totam soluta perspiciatis vero sequi vitae harum suscipit.</p>
                <ProgressContainer>
                    <ProgressItem from="0" to="85" speed="1800" />
                </ProgressContainer>
            </div>
        </div>
    );
}

export default AboutPage;