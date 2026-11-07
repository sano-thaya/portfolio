const projectPath = (slug) => `/projects/${slug}`

export const featuredProjects = [
  {
    slug: 'compnet',
    theme: 'compnet',
    href: projectPath('compnet'),
    title: 'COMPNet',
    type: 'Personal Project· Ongoing',
    category: 'Personal Poroject · Ongoing',
    summary:
      'An AI-assisted system that checks claims against Sri Lankan legal documents. I built the claim analysis API and evidence retrieval pipeline.',
    tags: ['FastAPI', 'PostgreSQL', 'RAG'],
    image: '/cases/compnet.svg',
    imageCaption: 'Claim intake, evidence retrieval, and verification',
    lead: 'Tracing a legal claim from input to cited evidence.',
    contribution:
      'I own the claim verification component of COMPNet, a team research project on legal misinformation in Sri Lanka. I built FastAPI endpoints and a background worker for claim analysis, indexed legal passages for retrieval, and integrated Tesseract OCR for image submissions.',
    walkthroughTitle: 'System walkthrough',
    walkthroughIntro: 'Open a step to see what happens there.',
    steps: [
      {
        title: 'Capture the claim',
        description:
          'The API accepts claim text. For an image submission, Tesseract extracts text that can be used for claim analysis.',
      },
      {
        title: 'Queue the analysis',
        description:
          'A background worker processes each queued claim and updates its status. The API makes the result available when processing finishes.',
      },
      {
        title: 'Retrieve legal evidence',
        description:
          'LaBSE embeds the claim and the indexed document passages. PostgreSQL with pgvector retrieves passages related to the claim.',
      },
      {
        title: 'Generate a cited result',
        description:
          'The verification step uses the selected passages to produce a classification and explain it with source citations.',
      },
    ],
    decisionTitle: 'Check the evidence behind the verdict',
    decision:
      'I inspect whether the retrieved passages address the specific claim. I’m comparing results for equivalent claims in English, Sinhala, and Tamil to see where retrieval and verification need improvement.',
    facts: [
      { label: 'Role', value: 'Component 3 · Claim verification' },
      { label: 'Status', value: 'Ongoing research' },
      { label: 'Stack', value: 'Python, FastAPI, PostgreSQL, pgvector, LaBSE, Tesseract' },
    ],
  },
  {
    slug: 'sparkling-bakery',
    theme: 'bakery',
    href: projectPath('sparkling-bakery'),
    title: 'Sparkling Bakery',
    type: 'Freelance · E-commerce',
    category: 'Freelance · E-commerce',
    summary:
      'I built a storefront for a home bakery with custom cake orders, Stripe Checkout, and a dashboard for managing orders.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    image: '/cases/bakery.svg',
    imageCaption: 'Custom orders, checkout, and the admin dashboard',
    lead: 'From custom cake orders to payment and fulfilment.',
    contribution:
      'I built and delivered a bakery’s e-commerce and business management platform, from requirements gathering through deployment and handoff. I implemented custom cake ordering, Stripe Checkout, payment webhooks, and an admin dashboard for orders, revenue, enquiries, and gallery content.',
    walkthroughTitle: 'System walkthrough',
    walkthroughIntro: 'Open a step to see what happens there.',
    steps: [
      {
        title: 'Place a custom order',
        description:
          'The storefront collects a customer’s cake order and the application stores the order details.',
      },
      {
        title: 'Pay through Stripe Checkout',
        description: 'The customer completes payment in Stripe Checkout.',
      },
      {
        title: 'Update the order',
        description:
          'A Stripe webhook confirms the payment and the backend updates the corresponding order status.',
      },
      {
        title: 'Manage the bakery’s orders',
        description:
          'The bakery team uses its dashboard to review orders and manage enquiries and gallery content.',
      },
    ],
    decisionTitle: 'Use the payment event to update the order',
    decision:
      'I connected payment confirmation to the stored order status. That lets the bakery see which orders were paid for in the same dashboard it uses to manage them.',
    facts: [
      { label: 'Role', value: 'Freelance full-stack web developer' },
      { label: 'Timeline', value: 'July–August 2026' },
      { label: 'Stack', value: 'Next.js, PostgreSQL, Prisma, Stripe, NextAuth.js' },
    ],
  },
  {
    slug: 'amc-travel',
    theme: 'amc',
    href: projectPath('amc-travel'),
    title: 'AMC Travel Service',
    type: 'Freelance · Client website',
    category: 'Freelance · Client website',
    summary:
      'I built a website for a Canadian travel agency so visitors can explore its services and send travel enquiries.',
    tags: ['React', 'Vite', 'Resend'],
    image: '/cases/amc-travel.svg',
    imageCaption: 'Travel services, enquiry form, and email delivery',
    lead:
      'A website for a Canadian travel agency, with an enquiry form that connects visitors to the business.',
    contribution:
      'I spoke with the owner to understand how customers found the agency and what they needed to know before making an enquiry. I built the site to explain services such as air tickets and travel packages, then connected the contact form to an email service.',
    walkthroughTitle: 'How an enquiry works',
    walkthroughIntro: 'Open a step to follow a visitor’s enquiry.',
    steps: [
      {
        title: 'Browse travel services',
        description:
          'Visitors can look through the agency’s services, destinations, and travel options.',
      },
      {
        title: 'Choose an enquiry topic',
        description:
          'When a visitor starts an enquiry from a service, the form can preselect that service.',
      },
      {
        title: 'Validate the submission',
        description:
          'The contact endpoint checks the submitted fields and returns feedback if a visitor needs to correct something.',
      },
      {
        title: 'Send the enquiry',
        description:
          'The serverless endpoint uses Resend to deliver the enquiry to the agency by email.',
      },
    ],
    decisionTitle: 'Carry the chosen service into the form',
    decision:
      'Preselecting a service saves the visitor a step and gives the agency more context when it receives the enquiry.',
    facts: [
      { label: 'Role', value: 'Freelance web developer' },
      { label: 'Client', value: 'Travel agency in Toronto, Canada' },
      { label: 'Stack', value: 'React, Vite, Vercel Functions, Resend' },
    ],
    source: 'https://github.com/sano-thaya/amc_website',
  },
  {
    slug: 'clearledger',
    theme: 'clearledger',
    href: projectPath('clearledger'),
    title: 'ClearLedger',
    type: 'Team project · Android',
    category: 'Team project · Android',
    summary:
      'An Android personal finance app. I implemented authentication and session handling, and designed how Firestore stores each user’s records.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    image: '/cases/clearledger.svg',
    imageCaption: 'Authentication, session restoration, and user records',
    lead: 'Account access and data foundations for an Android finance app.',
    contribution:
      'I implemented email registration, sign-in, session restoration, and logout. I also defined the Firestore data structure and ownership rules for user records, and wrote unit tests for registration and session behavior.',
    walkthroughTitle: 'System walkthrough',
    walkthroughIntro: 'Open a step to see what happens there.',
    steps: [
      {
        title: 'Create an account',
        description:
          'Firebase Auth registers the user with email and password. The app creates a corresponding Firestore user document.',
      },
      {
        title: 'Restore a session',
        description:
          'The splash screen checks the current Firebase session and routes returning users to the dashboard or sign-in screen.',
      },
      {
        title: 'Access user records',
        description:
          'Finance records live under the account’s user ID. Firestore rules scope reads and writes to the signed-in owner.',
      },
      {
        title: 'Sign out',
        description:
          'The app clears the current auth session and takes the user back to sign-in.',
      },
    ],
    decisionTitle: 'Store money in minor units',
    decision:
      'I defined money amounts as integer minor units and used a consistent month key for monthly queries. The shared format gives teammates one way to store and query amounts across features.',
    facts: [
      { label: 'Role', value: 'Team member · Authentication and data foundations' },
      { label: 'Platform', value: 'Android' },
      { label: 'Stack', value: 'Kotlin, Jetpack Compose, Firebase Auth, Firestore, Hilt' },
    ],
    source: 'https://github.com/balasuthagar-code/clearledger-android',
  },
]

export const earlierProjects = [
  {
    title: 'NextTurn',
    type: 'Testing & QA',
    category: 'Testing & QA',
    summary:
      'I wrote Playwright regression tests for appointment booking, rescheduling, and cancellation, plus k6 load tests for queue workflows.',
    tags: ['Playwright', 'k6', 'Postman'],
    links: [
      { label: 'Code', href: 'https://github.com/K-M-Shehan/next-turn' },
      { label: 'Demo', href: 'https://web-mauve-nine-46.vercel.app/' },
    ],
  },
  {
    title: 'TestLang++',
    type: 'API testing',
    category: 'API testing',
    summary:
      'I designed a small language for repeatable API checks and built its lexer, parser, and interpreter.',
    tags: ['Java', 'JFlex', 'CUP'],
    links: [{ label: 'Code', href: 'https://github.com/sano-thaya/testlang_plus' }],
  },
  {
    title: 'Employee Management API',
    type: 'Backend API',
    category: 'Backend API',
    summary: 'I built a Java REST API for employee records, roles, and organizational data.',
    tags: ['Java', 'REST API'],
    links: [
      {
        label: 'Code',
        href: 'https://github.com/sano-thaya/employee-management-system-api',
      },
    ],
  },
  {
    title: 'Chloride Diffusion Analyzer',
    type: 'Web application',
    category: 'Web application',
    summary:
      'I adapted a Python desktop tool for engineering calculations into a React web application.',
    tags: ['React', 'JavaScript'],
    links: [
      { label: 'Code', href: 'https://github.com/sano-thaya/Chloride-Calculator-web-app' },
      { label: 'Demo', href: 'https://chloride-calculator-web-app.vercel.app/' },
    ],
  },
  {
    title: 'Hotel Management System',
    type: 'Full-stack team project',
    category: 'Full-stack team project',
    summary: 'I worked in a team of four to build a web application for managing a hotel and its rooms.',
    tags: ['Java', 'React', 'MySQL'],
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/Jenitha23/Hotel-Management-System-Frontend',
      },
      {
        label: 'Backend',
        href: 'https://github.com/Jenitha23/Hotel-Management-System-Backend',
      },
      { label: 'Demo', href: 'https://frontend-palmbeachresort.vercel.app/' },
    ],
  },
  {
    title: 'Fault-Tolerant Messaging System',
    type: 'Distributed systems',
    category: 'Distributed systems',
    summary: 'I helped build a distributed messaging system that can keep operating when components fail.',
    tags: ['Java', 'Distributed computing'],
    links: [
      {
        label: 'Code',
        href: 'https://github.com/Jenitha23/Fault-Tolerant-Distributed-Messaging-System-GRP-17',
      },
    ],
  },
]
