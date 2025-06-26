import { Metadata } from 'next';
import React from "react";

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'Eklavya Pricing - Affordable Plans for Everyone',
  description: 'Choose the perfect Eklavya plan for your needs. Flexible, value-driven pricing options for students, teachers, and parents. Start your free trial today!',
  keywords: ['pricing', 'plans', 'subscription', 'affordable education', 'free trial', 'educational pricing', 'value', 'flexible plans'],
};

export default function Pricing() {
  return <div>Pricing page</div>;
}
