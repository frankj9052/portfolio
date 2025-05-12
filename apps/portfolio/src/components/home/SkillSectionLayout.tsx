'use client';
import {
  FrankAccordion,
  FrankTabs,
  HeroTitle,
} from '@frankjia9052/shared-ui';
import { EducationCard } from '../../components/home/SkillSectionLayout/EducationCard';
import { WorkCard } from './SkillSectionLayout/WorkCard';
import { Spacer } from '@heroui/react';
import { AccordionTitleCard } from './SkillSectionLayout/AccordionTitleCard';
import { GoBrowser } from 'react-icons/go';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import {
  SkillContent,
  SkillGroupData,
} from './SkillSectionLayout/SkillContent';
import { ReactNode } from 'react';
import { CiServer } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

type SkillDataType = {
  ariaLable: string;
  name: string;
  key: string;
  icon: ReactNode;
  contentData: SkillGroupData[];
};

const skillData: SkillDataType[] = [
  {
    ariaLable: 'frontend development',
    name: 'Front-end Development',
    key: 'frontend',
    icon: <GoBrowser className="text-primary" size={32}/>,
    contentData: [
      {
        groupName: 'Languages & Frameworks',
        skills: [
          {
            name: 'JavaScript/Typescript',
            value: 90,
          },
          {
            name: 'React/Nextjs',
            value: 80,
          },
        ],
      },
      {
        groupName: 'UI & Styling',
        skills: [
          {
            name: 'Tailwind CSS',
            value: 85,
          },
          {
            name: 'Framer Motion',
            value: 82,
          },
        ],
      },
      {
        groupName: 'Forms & Validation',
        skills: [
          {
            name: 'React Hook Form / Zod',
            value: 78,
          },
        ],
      },
      {
        groupName: 'Techniques',
        skills: [
          {
            name: 'Server-Side Rendering / Server Action',
            value: 88,
          },
        ],
      },
    ],
  },
  {
    ariaLable: 'backend development',
    name: 'Backend Development',
    key: 'backend',
    icon: <CiServer className="text-primary" size={32}/>,
    contentData: [
      {
        groupName: 'Languages & Frameworks',
        skills: [
          {
            name: 'Node.js / Express',
            value: 90,
          },
          {
            name: 'GraphQL',
            value: 76,
          },
        ],
      },
      {
        groupName: 'Infrastructure & Systems',
        skills: [
          {
            name: 'Docker, Kubernetes, YAML, Skaffold, nginx',
            value: 72,
          },
          {
            name: 'AWS(IAM, EC2, S3, Lambda, Amplify)',
            value: 55,
          },
        ],
      },
      {
        groupName: 'Tools & Architecture',
        skills: [
          {
            name: 'Role-Based Access Control',
            value: 72,
          },
          {
            name: 'Stripe Integration',
            value: 55,
          },
        ],
      },
      {
        groupName: 'Testing',
        skills: [
          {
            name: 'Jest',
            value: 81,
          },
          {
            name: 'Unit Testing (supertest)',
            value: 72,
          },
        ],
      },
    ],
  },
  {
    ariaLable: 'database management',
    name: 'Database Management',
    key: 'database',
    icon: <GoDatabase className="text-primary" size={32}/>,
    contentData: [
      {
        groupName: 'Databases',
        skills: [
          {
            name: 'PostgreSQL/MySQL',
            value: 80,
          },
          {
            name: 'MongoDB',
            value: 82,
          },
          {
            name: 'Redis',
            value: 76,
          },
        ],
      },
      {
        groupName: 'ORM',
        skills: [
          {
            name: 'prisma',
            value: 65,
          },
          {
            name: 'TypeORM',
            value: 72,
          },
        ],
      },
    ],
  },
  {
    ariaLable: 'project management & dev tools',
    name: 'Project Management & Dev Tools',
    key: 'project-management-and-dev-tools',
    icon: <FaGithub className="text-primary" size={32}/>,
    contentData: [
      {
        groupName: 'Project Management',
        skills: [
          {
            name: 'JIRA',
            value: 76,
          },
          {
            name: 'Kanban',
            value: 65,
          },
        ],
      },
      {
        groupName: 'Dev Tools',
        skills: [
          {
            name: 'Bitbucket, GitHub, GitLab, Git Bash',
            value: 65,
          },
          {
            name: 'Linux CLI',
            value: 71,
          },
        ],
      },
    ],
  },
];

export const SkillSectionLayout = () => {
  return (
    <div className="w-full h-full amd:pt-8">
      {/* Title */}
      <div>
        <HeroTitle>Skills</HeroTitle>
      </div>
      {/* Description */}
      <div className="text-color-text-black font-popins max-w-[700px] mb-2">
        <h1 className="text-3xl font-bold">Skills & Qualification</h1>
        <p>
          For more than 4 years I have been accomplishing not enough with modern
          Web Development, new generation web and App programming language.
        </p>
      </div>
      {/* Content */}
      <div className="grid grid-cols-3 text-sm gap-4">
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
                    <Spacer y={2} />
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
        <div className="col-span-2">
          <h1 className="bg-primary w-[60px] h-[32px] flex items-center justify-center text-white rounded-md cursor-default mb-4">
            Skills
          </h1>
          <FrankAccordion
            variant="shadow"
            defaultExpandedKeys={''}
            items={skillData.map((item) => ({
              ariaLabel: item.ariaLable,
              title: <AccordionTitleCard icon={item.icon} title={item.name} />,
              key: item.key,
              indicator: {
                isClose: (
                  <MdKeyboardArrowLeft className="text-primary text-4xl" />
                ),
              },
              content: <SkillContent data={item.contentData} />,
            }))}
          />
        </div>
      </div>
    </div>
  );
};
