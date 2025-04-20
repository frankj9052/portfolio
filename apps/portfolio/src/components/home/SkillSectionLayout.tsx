'use client';
import { FrankAccordion, FrankTabs, HeroTitle } from '@frankjia9052/shared-ui';
import { EducationCard } from '../../components/home/SkillSectionLayout/EducationCard';
import { WorkCard } from './SkillSectionLayout/WorkCard';
import { Spacer } from '@heroui/react';
import { AccordionTitleCard } from './SkillSectionLayout/AccordionTitleCard';
import { GoBrowser } from "react-icons/go";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const SkillSectionLayout = () => {
  return (
    <div className="aaaabg-red-200 w-full h-full md:pt-8">
      {/* Title */}
      <div>
        <HeroTitle>Skills</HeroTitle>
      </div>
      {/* Description */}
      <div className="text-color-text-black font-popins max-w-[700px]">
        <h1 className="text-3xl font-bold">Skills & Qualification</h1>
        <p>
          For more than 4 years I have been accomplishing not enough with modern
          Web Development, new generation web and App programming language.
        </p>
      </div>
      {/* Content */}
      <div className="grid grid-cols-3 text-sm">
        {/* Qualifications */}
        <div>
          <FrankTabs
            ariaLable="work and education"
            tabsData={[
              {
                key: 'work',
                title: 'Work',
                content: (
                  <div>
                    <WorkCard
                      companyName="DMSolving Corp."
                      workType="full-time"
                      workPeriod="2023-2025"
                      jobTitle="Full-stack Developer"
                      jobDescription="Full Stack Developer for Noqclinic, building scalable features with React, Node.js, and microservices, focusing on frontend optimization, secure authentication, and CI/CD."
                    />
                    <Spacer y={2}/>
                    <WorkCard
                      companyName="Mark2win Corp."
                      workType="part-time"
                      workPeriod="2021-2023"
                      jobTitle="Full-stack Developer"
                      jobDescription="Developed the e-commerce platform SPA by using React, React-Redux, Redux-Form, with(Express & NodeJS) as REST API backend to talk to database(MySQL)"
                    />
                  </div>
                ),
              },
              {
                key: 'education',
                title: 'Education',
                content: (
                  <div>
                    <EducationCard
                      year="2018-2019"
                      program="Computer Programmer"
                      school="Seneca"
                      location="ON, Canada"
                    />
                  </div>
                ),
              },
            ]}
            color="primary"
          />
        </div>
        {/* skills */}
        <div className="col-span-2 abg-yellow-200">
          <FrankAccordion  
            variant='splitted' 
            hideShadow                     
            items={[
              {
                ariaLabel: "frontend developer",
                title: <AccordionTitleCard
                  icon={<GoBrowser className='text-primary'/>}
                  title='Frontend'
                  subTitle='Over 4 years'                  
                />,
                key: 'frontend-accordion',
                content: <div>html, css</div>,
                indicator: {
                  isClose: <MdKeyboardArrowLeft className='text-primary text-4xl'/>
                }                
                
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};
