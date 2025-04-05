import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "@/lib/session";
import TopBar from '../components/TopBar'
import Card from '../components/Card'
import PageTitle from '../components/PageTitle'
import PageSubtitle from '../components/PageSubtitle'
import Grid from '../components/Grid'
import React from 'react'

export default function HomePage() {
  const gridHead = [
    'Nome',
    'Plano',
    'Telefone',
    'Email',
    'Ativo?',
  ];

  const members = [
    {
      "name": "Jane Cooper",
      "company": "Microsoft",
      "phone": "(225) 555-0118",
      "email": "jane@microsoft.com",
      "status": true
    },
    {
      "name": "Floyd Miles",
      "company": "Yahoo",
      "phone": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "status": false
    },
    {
      "name": "Ronald Richards",
      "company": "Adobe",
      "phone": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "status": true
    },
    {
      "name": "Marvin McKinney",
      "company": "Tesla",
      "phone": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "status": true
    },
    {
      "name": "Jerome Bell",
      "company": "Google",
      "phone": "(629) 555-0129",
      "email": "jerome@google.com",
      "status": true
    },
    {
      "name": "Jenny Wilson",
      "company": "Amazon",
      "phone": "(505) 555-0125",
      "email": "jenny@amazon.com",
      "status": true
    },
    {
      "name": "Kathryn Murphy",
      "company": "Microsoft",
      "phone": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "status": false
    },
    {
      "name": "Jacob Jones",
      "company": "Yahoo",
      "phone": "(208) 555-0112",
      "email": "jacob@yahoo.com",
      "status": true
    }
  ];

  const badgeColumn = {
    "status": {
      "true": {
        "class": "badge badge-active",
        "label": "Active"
      },
      "false": {
        "class": "badge badge-inactive",
        "label": "Inactive"
      }
    }
  };

  return (
    <>
      <TopBar />
      <Card>
        <PageTitle title='Dashboard' />
        <PageSubtitle subtitle='Clientes ativos' />
        <Grid head={gridHead} body={members} badgeColumn={badgeColumn} />
      </Card>
    </>
  )
}
