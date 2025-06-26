import { Metadata } from 'next';
import React from 'react'

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'About Eklavya - Revolutionary Educational Platform',
  description: 'Learn about Eklavya\'s mission to transform education through innovation. Discover how we empower students, teachers, and parents with cutting-edge learning technology.',
  keywords: ['about eklavya', 'educational innovation', 'learning technology', 'educational platform', 'mission', 'vision', 'team'],
};

export default function About() {
  return (
    <div>
      About page
    </div>
  )
}
