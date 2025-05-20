// src/components/project/Project.jsx
import React, { Suspense, lazy } from 'react';
import './Project.css'; // Import shared CSS

// Dynamically import each project to ensure clean loading
const Project1 = lazy(() => import('./projectinfo/Project1'));
const Project2 = lazy(() => import('./projectinfo/Project2'));
const Project3 = lazy(() => import('./projectinfo/Project3'));
const Project4 = lazy(() => import('./projectinfo/Project4'));
const Project5 = lazy(() => import('./projectinfo/Project5'));
const Project6 = lazy(() => import('./projectinfo/Project6'));
const Project7 = lazy(() => import('./projectinfo/Project7'));
const Project8 = lazy(() => import('./projectinfo/Project8'));
const Project9 = lazy(() => import('./projectinfo/Project9'));
const Project10 = lazy(() => import('./projectinfo/Project10'));
const Project11 = lazy(() => import('./projectinfo/Project11'));
const Project12 = lazy(() => import('./projectinfo/Project12'));
const Project13 = lazy(() => import('./projectinfo/Project13'));
const Project14 = lazy(() => import('./projectinfo/Project14'));
const Project15 = lazy(() => import('./projectinfo/Project15'));
const Project16 = lazy(() => import('./projectinfo/Project16'));
const Project17 = lazy(() => import('./projectinfo/Project17'));
const Project18 = lazy(() => import('./projectinfo/Project18'));
const Project19 = lazy(() => import('./projectinfo/Project19'));
const Project20 = lazy(() => import('./projectinfo/Project20'));


const Project = () => {
  return (
    <div className="projects-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
        <Project11 />
        <Project12 />
        <Project13 />
        <Project14 />
        <Project15 />
        <Project16 />
        <Project17 />
        <Project18 />
        <Project19 />
        <Project20 />
      </Suspense>
    </div>
  );
};

export default Project;
