# Portfolio V2 Blueprint
## RaphaelParmentier.dev

Version: 2.0
Status: Design & Product Specification

---

# Vision

The portfolio should no longer feel like a CV converted into a website.

The objective is to communicate a coherent professional journey:

Scientific Foundations
→ Statistical Reasoning
→ Operational Automation
→ AI Engineering
→ Knowledge Transfer

The website must explain not only what has been done, but why each step naturally led to the next one.

Core idea:

> Transforming complex information into actionable decisions.

This principle connects:
- Biological research
- Statistics
- Pharmaceutical R&D
- Operational analytics
- Automation
- Artificial Intelligence
- Teaching

---

# Product Goals

The website should:

- Differentiate from generic AI/Data portfolios
- Remain highly readable on mobile devices
- Be easy to extend with future projects
- Emphasize storytelling over technology lists
- Highlight Teaching Brain Lab as a major differentiator
- Present projects as products rather than exercises
- Maintain a premium and professional aesthetic

---

# Information Architecture

Homepage structure:

Hero
↓
Journey Map
↓
Teaching & Knowledge Design
↓
What I Build
↓
Currently Building
↓
Contact

Removed sections:

- Skills
- Traditional Experience Timeline
- Generic Technology Badges
- KPI Cards

CV remains downloadable but does not define the site structure.

---

# Hero Section

## Headline

AI Engineer & Data Scientist

Keep aligned with:
- LinkedIn
- CV
- Professional branding

---

## Main Title

Preferred option:

Turning complex information into actionable decisions.

Alternative:

Building AI systems, automation workflows and learning experiences.

---

## Introduction

From biological research and pharmaceutical R&D
to operational automation, AI engineering and
higher education, I design systems that help
people understand, decide and act.

---

## Call To Action

Primary:
- Explore My Work

Secondary:
- Download CV

---

## Hero Right Card

Replace KPI cards.

Current:

- 3+
- Live
- Teaching

Remove entirely.

Replace with:

Scientific Foundations
↓
Statistical Reasoning
↓
Operational Automation
↓
AI Engineering
↓
Knowledge Transfer

Each item becomes clickable.

---

# Journey Map

Signature component of the portfolio.

Desktop:
Interactive horizontal navigation.

Mobile:
Swipeable carousel.

Sections:

Scientist
Statistician
Builder
AI Engineer
Teacher

---

## Scientist

### Theme

Curiosity and observation.

### Content

Health Biology

Original ambition:
Ethology and animal behaviour.

Experiences:

- ONF internship
- Honeybee learning research (CNRS)

Key realization:

Collecting data is only the beginning.
Reliable conclusions require analytical methods.

Main concepts:

- Experimental design
- Observation
- Behavioural analysis
- Scientific reasoning

---

## Statistician

### Theme

Data as a scientific tool.

### Content

Bioinformatics & Biostatistics

Experiences:

- CRISPR prediction project
- Sperm whale behavioural analysis
- Big Data environments

Skills developed:

- Statistics
- SQL
- Data analysis
- Machine learning
- Reproducible workflows

Key realization:

Domain expertise alone is not sufficient.
Complex questions require statistical reasoning.

---

## Builder

### Theme

Operational problem solving.

### Content

Serebis

Focus:

- Process improvement
- Reporting automation
- Operational analytics
- Decision support

Example initiatives:

- Automated reporting workflows
- KPI consolidation tools
- Inventory analytics
- Maintenance monitoring dashboards
- Multi-source Excel consolidation

Key realization:

Reliable analysis is valuable,
but efficient systems create greater impact.

This stage explains the transition toward automation.

---

## AI Engineer

### Theme

Building systems rather than only analysing them.

### Content

Current AI Engineering training.

Projects:

- AI Data Quality Auditor
- Career Intelligence Assistant
- Future AI products

Focus:

- FastAPI
- Next.js
- LLM systems
- Backend services
- Product development

Key realization:

Software engineering and AI enable analytical thinking at scale.

---

## Teacher

### Theme

Knowledge transfer and learning design.

### Content

2024-2025

Guest lectures:

- Big Data in Healthcare
- Databases
- Statistics
- Introduction to Machine Learning

2026

Strategic Data Analytics

Marketing Digital Major

Pilot course successfully delivered.

Integrated into the official curriculum after positive results.

Key realization:

Teaching improves clarity, communication and systems thinking.

---

# Teaching & Knowledge Design

Positioned before project showcase.

Teaching is not a side project.

Teaching is part of the professional identity.

---

## Title

Teaching Beyond Slides

---

## Description

I design learning experiences combining
statistics, data science and AI through
interactive missions and realistic deliverables.

---

## Teaching Brain Lab

Featured project.

Visual focus:

Interactive brain visualization.

Branches:

- Statistics
- Data Analysis
- Machine Learning
- AI Systems
- Decision Making

Features:

- Interactive missions
- Progressive learning paths
- Realistic deliverables
- Applied projects

CTA:

Explore Teaching Brain Lab

---

# What I Build

Projects become products.

---

## Product 1

AI Data Quality Auditor

### Problem

Raw datasets are difficult to validate efficiently.

### Solution

AI-assisted validation workflows.

### Workflow

Upload
↓
Checks
↓
Scoring
↓
AI Report
↓
Decision Support

---

## Product 2

Career Intelligence Assistant

Status:
Currently Building

### Problem

Opportunity discovery is fragmented across multiple platforms.

### Solution

An AI-powered system that aggregates opportunities,
scores relevance, generates summaries and supports career decisions.

### Workflow

Sources
↓
Collection
↓
Scoring Engine
↓
LLM Analysis
↓
Email Reporting

Potential sources:

- LinkedIn
- APEC
- France Travail
- Welcome To The Jungle

Possible stack:

- LangChain
- FastAPI
- PostgreSQL
- Next.js
- Docker
- Gemini / OpenAI

---

# Currently Building

Dedicated lightweight section.

Example:

Currently Building

Career Intelligence Assistant

- Aggregating opportunities
- Scoring positions
- AI-powered summaries
- Automated reporting

Purpose:

Show active learning and experimentation.

---

# Contact

## Title

Let's Build Something Useful

Content:

- Email
- LinkedIn
- GitHub
- CV

Simple and direct.

---

# Visual Direction

Keep:

- Dark theme
- Orange RP accent
- Existing typography
- Existing brand identity

Do not redesign branding.

---

# Motion Design Principles

Premium, subtle and purposeful.

Avoid:

- WebGL overload
- Heavy particles
- Aggressive parallax
- Excessive animations

---

# Animation Concepts

## Progress Line

Animated line following the journey:

Science
↓
Statistics
↓
Automation
↓
AI
↓
Teaching

Scroll-driven progression.

---

## Morphing Cards

Journey card transitions smoothly between identities.

Scientist
→ Statistician
→ Builder
→ AI Engineer
→ Teacher

---

## Skills Constellation

Optional enhancement.

Nodes:

- Statistics
- Automation
- AI Systems
- Teaching

Connections illuminate on interaction.

---

## Living Brain

Exclusive to Teaching Brain Lab.

Subtle neuron activation.

Interactive branch highlighting.

SVG-based.

Mobile-friendly.

---

## Product Reveal

Screenshots progressively reveal:

Problem
↓
Solution
↓
Architecture
↓
Impact

---

# Mobile First Requirements

Primary target:

390px

Secondary targets:

430px
768px
1024px
1440px

Development order:

1. Mobile
2. Tablet
3. Desktop

Never desktop-first.

---

# Quality Requirements

Before deployment:

- Lighthouse > 90
- No horizontal overflow
- CLS near zero
- Smooth touch interactions
- Consistent spacing system
- Accessibility checks completed

---

# Development Roadmap

## Sprint 1

Hero V2

- Remove badges
- Remove KPI cards
- Add Journey Card
- Mobile optimization

---

## Sprint 2

Journey Map

- Interactive navigation
- Mobile carousel
- Dynamic content panels

---

## Sprint 3

Teaching Brain Lab Premium Section

- Brain visualization
- Screenshots
- Storytelling
- CTA

---

## Sprint 4

Products

- AI Data Quality Auditor
- Career Intelligence Assistant

---

## Sprint 5

Motion Design

- Progress line
- Reveal animations
- Morphing cards
- Final polish

---

# Guiding Principle

The website should communicate:

Scientist
↓
Statistician
↓
Builder
↓
AI Engineer
↓
Teacher

rather than:

Skills
↓
Experience
↓
Projects

The portfolio should feel like a premium product experience,
not a CV displayed on a webpage.