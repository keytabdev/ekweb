import { Metadata } from 'next';
import Footer from '@/components/shared/Footer';
import TeacherHeroSection from '@/components/teacher/TeacherHeroSection';
import EngageStudentsSection from '@/components/teacher/EngageStudentsSection';
import TransformLessonsSection from '@/components/teacher/TransformLessonsSection';
import ThrivingClassroomSection from '@/components/teacher/ThrivingClassroomSection';
import SaveTimeSection from '@/components/teacher/SaveTimeSection';
import MonitorGrowthSection from '@/components/teacher/MonitorGrowthSection';
import React from 'react'

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'Eklavya for Teachers - Smarter Tools, Inspired Teaching',
  description: 'Empower your teaching with AI-powered lesson creation, automated grading, gamified learning paths, and real-time analytics. Save time and inspire students with Eklavya.',
  keywords: ['teaching tools', 'AI lesson creation', 'automated grading', 'classroom management', 'educational technology', 'teacher resources', 'lesson planning', 'student analytics'],
};

export default function Teacher() {
  return (
    <div className="min-h-screen bg-white">
      <TeacherHeroSection />
      <EngageStudentsSection />
      <TransformLessonsSection />
      <ThrivingClassroomSection />
      <SaveTimeSection />
      <MonitorGrowthSection />
      <Footer />
    </div>
  );
}
