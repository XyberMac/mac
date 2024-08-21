import React from 'react'
import { getSession } from "@/lib/getSession";
import { redirect } from 'next/navigation';
import CreativeHero from '@/components/studio/CreativeHero';
import CreativeServices from '@/components/studio/CreativeServices';
import TechStack from '@/components/studio/TechStack';
import { CreativeFooter } from '@/components/studio/CreativeFooter';


export default async function page() {
  const session = await getSession()
  const user=session?.user
  if(!user) redirect("/login")
  return (
    <div>
     <CreativeHero/>
     <TechStack/>
     <CreativeServices/>
     <CreativeFooter/>
    </div>
  )
}
