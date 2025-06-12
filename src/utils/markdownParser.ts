// Utility functions for parsing markdown files with frontmatter

import matter from "gray-matter";

// Content type definitions
export interface Article {
  id: string;
  title: string;
  author: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  featured: boolean;
  content: string;
}

export interface Binder {
  id: string;
  name: string;
  title: string;
  avatar: string;
  location: string;
  joinedDate: string;
  tags: string[];
  specialties: string[];
  languages: string[];
  social: {
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
  stats: {
    booksPublished: number;
    totalReads: string;
    rating: number;
    followers: number;
  };
  featured: boolean;
  content: string;
}

// Fallback data to ensure the page always loads
export const fallbackArticles: Article[] = [
  {
    id: "digital-storytelling",
    title: "The Art of Digital Storytelling",
    author: "Sarah Chen",
    authorBio: "Digital storytelling specialist with 8+ years of experience in multimedia publishing",
    publishDate: "2023-11-15",
    readTime: "8 min read",
    tags: ["Digital Media", "Storytelling", "Technology", "Publishing"],
    excerpt: "Exploring how technology transforms traditional narratives into immersive digital experiences.",
    featured: true,
    content: `# The Art of Digital Storytelling

In our rapidly evolving digital landscape, the way we tell and consume stories is undergoing a profound transformation. From interactive web narratives to immersive virtual reality experiences, digital storytelling is reshaping how we connect with audiences and convey meaningful messages.

## The Evolution of Narrative

Traditional storytelling has always been about connecting with audiences on an emotional level. Digital storytelling takes this connection further by adding layers of interactivity, multimedia elements, and personalization that were impossible in traditional media.

### Key Elements of Digital Storytelling

- **Interactive Elements**: Allowing readers to make choices that affect the narrative
- **Multimedia Integration**: Combining text, audio, video, and visual elements
- **Responsive Design**: Adapting to different devices and user preferences
- **Real-time Feedback**: Enabling audience participation and engagement

## The Future of Digital Narratives

As technology continues to advance, we're seeing exciting developments in how stories are told and experienced. From AI-generated content to blockchain-based narrative ownership, the possibilities are endless.

The art of digital storytelling is not just about adopting new technologies—it's about understanding how these tools can enhance the fundamental human experience of sharing and receiving stories.`
  },
  {
    id: "sustainable-publishing",
    title: "Sustainable Publishing in the Digital Era",
    author: "Park",
    authorBio: "Poet & Emotional Interpreter specializing in poetic binding through unintended emotional recall",
    publishDate: "2023-11-10",
    readTime: "12 min read",
    tags: ["Sustainability", "Publishing", "Environment", "Green Technology"],
    excerpt: "How the publishing industry is adapting to environmental challenges and embracing sustainable practices.",
    featured: true,
    content: `# Sustainable Publishing in the Digital Era

The publishing industry stands at a crossroads, facing unprecedented environmental challenges while embracing digital transformation. As readers become more environmentally conscious, publishers must adapt their practices to meet both market demands and ecological responsibilities.

## The Environmental Impact of Traditional Publishing

Traditional publishing has long been associated with significant environmental costs:

- **Paper Production**: Massive deforestation and water usage
- **Transportation**: Global shipping of physical books
- **Waste**: Unsold books often end up in landfills
- **Energy Consumption**: Manufacturing and distribution processes

## Digital Solutions and Their Benefits

The shift toward digital publishing offers numerous environmental advantages:

### Reduced Carbon Footprint
Digital distribution eliminates the need for physical transportation, significantly reducing carbon emissions associated with book distribution.

### Zero Waste Production
Digital books don't generate physical waste, solving the problem of unsold inventory disposal.

### Resource Conservation
No paper, ink, or binding materials are needed for digital publications.

## Sustainable Practices for Modern Publishers

1. **Print-on-Demand Technology**: Reducing waste by printing only what's ordered
2. **Sustainable Materials**: Using recycled paper and eco-friendly inks
3. **Local Printing**: Reducing transportation emissions
4. **Digital-First Strategies**: Prioritizing digital formats while offering print options

## The Role of Authors and Readers

Sustainability in publishing isn't just a publisher's responsibility. Authors and readers play crucial roles in creating a more sustainable literary ecosystem.

The future of publishing lies in balancing accessibility, sustainability, and the timeless joy of reading—regardless of format.`
  }
];

export const fallbackBinders: Binder[] = [
  {
    id: "kim",
    name: "Kim",
    title: "Story Crafter of Emotional Highs",
    avatar: "/imgs/kim.jpg",
    location: "Daejeon, South Korea",
    joinedDate: "2024-01-10",
    tags: ["Scene-Driven", "Empathetic", "Emotion-Focused", "Fiction Writing", "Memory Curation"],
    specialties: ["Emotional Storytelling", "Scene-Based Narratives", "Memory Curation"],
    languages: ["Korean", "English"],
    social: {
      website: "https://kim-stories.kr",
      twitter: "@kim_binder",
      linkedin: "kim-stories"
    },
    stats: {
      booksPublished: 1,
      totalReads: "7 Contributors",
      rating: 5.0,
      followers: 150
    },
    featured: true,
    content: `# Meet Binder Kim

## About Me

I'm Kim, a fiction writer based in Daejeon who builds stories around emotion, not just events. As a Binder, I guide people to uncover personal truths and emotional turning points hidden in everyday moments. My goal is to curate memory-based stories that feel both cinematic and deeply human.

## My Approach

I treat every book like a narrative, with rising tension, a meaningful climax, and emotional closure. I begin not with a timeline, but with the heart of the story — a moment of impact — and build from there. When gathering memories, I focus on relationship dynamics, emotional shifts, and lived perspectives rather than just facts.

## Binder Mission

To discover each group's unique emotional arc, and to translate those invisible bonds into a shared memory artifact. I believe the best stories are not told — they are recalled, felt, and shaped through deep listening.

## My Workflow as a Binder

### 🧭 Climax-Oriented Structure
I begin from what each person feels is the most emotionally intense moment, then work backwards to make the story meaningful.

### 🎭 Character Through Connection
I explore how each member relates to others — who they felt close to, distanced from, or changed by.

### 💡 Emotion Over Facts
I don't ask everyone to recall everything. Some give timeline structure, others offer texture through feelings and perspective.

### 🧵 Story from Fragments
I connect casual voice memos, texts, and conversation into a scene-based narrative with emotional logic.

### 🤖 AI as Sketch Partner
I imagine an AI that not only listens, but sketches: generating visuals, capturing tone, and helping us feel the scene together.

## Binder Philosophy

> "The best stories are not told — they are recalled, felt, and shaped through deep listening."

I believe in:

- **Emotional Truth**: Finding the real story beneath the surface events
- **Relational Depth**: Understanding how people connect and change each other
- **Scene-Based Thinking**: Building narratives around powerful moments
- **Collaborative Creation**: Working with AI as a creative partner

## Featured Project

### "Twenties Dream: 2024"

A story-driven yearbook for a university band navigating passion, burnout, and friendship.

**Project Details:**
- 7 participants (band members and close friends)
- Interviews guided around emotional climax, inter-member dynamics, and personal turning points
- Intentionally avoids dry chronological edits in favor of immersive narrative pacing
- Designed to capture raw moments and relational growth

## Why Work With Me

If you're looking for a binder who will:
- Find the emotional core of your shared experiences
- Create a narrative that feels like a compelling story, not just a chronicle
- Focus on relationships and personal growth rather than just events
- Use innovative AI tools to enhance the storytelling process

Then let's create something meaningful together.

## Skills & Expertise

**Technical Skills:**

- Adobe Creative Suite (Expert)
- Twine & Ink (Interactive Fiction)
- HTML/CSS/JavaScript (Intermediate)
- Unity (Basic 3D Storytelling)

**Creative Skills:**

- Narrative Design
- Character Development
- World Building
- Visual Storytelling
- Audio Production

## Let's Collaborate

I'm always excited to work with fellow creators, whether you're:

- A writer looking to explore digital formats
- A developer interested in narrative projects
- A publisher seeking innovative content approaches
- A reader with an amazing story idea

## Current Projects

🔮 **"Quantum Hearts"** - A romance novel with parallel universe story branches
📱 **Mobile Storytelling App** - Developing a new platform for micro-narratives
🎨 **AR Poetry Collection** - Bringing poems to life through augmented reality

## Get in Touch

I love connecting with fellow storytellers and creative minds. Feel free to reach out through any of my social channels or drop me a message here on the platform!

---

_"Stories shape our world, and technology shapes our stories. Let's create something amazing together."_ - Sarah Chen`
  },
  {
    id: "park",
    name: "Park",
    title: "Poet & Emotional Interpreter",
    avatar: "/imgs/park.jpg",
    location: "Seoul, South Korea",
    joinedDate: "2024-02-15",
    tags: ["Poetry", "Emotional Recall", "Family Stories", "Memory", "Gentle Workflow"],
    specialties: ["Poetic Binding", "Emotional Interpretation", "Memory Facilitation"],
    languages: ["Korean", "English"],
    social: {
      website: "https://park-poetry.kr",
      twitter: "@park_poet",
      linkedin: "park-emotional-interpreter"
    },
    stats: {
      booksPublished: 1,
      totalReads: "4 Voices",
      rating: 4.9,
      followers: 320
    },
    featured: true,
    content: `# Meet Park

## About Me

I'm Park, a poet and emotional interpreter who believes that the most honest memories emerge when we're not forcing them. I specialize in creating space for unintended emotional recall, allowing stories to surface naturally through gentle atmosphere and suggestive flow rather than direct questioning.

## My Approach

I prefer not to lead with direct questions, but to draw out stories through gentle atmosphere and suggestive flow ("What happened then?" rather than "How did you feel?"). I encourage participants to speak first, letting memory surface without prompt, while maintaining a calm, respectful, and unrushed tone.

### Binder Philosophy

> "Memory gains honesty when it is unplanned, and the poet's role is to hold space rather than direct."

I believe that:

- **Unstructured Recall** creates more authentic emotional truth
- **Gentle Guidance** yields deeper insights than direct interrogation
- **Poetic Interpretation** can capture what plain narrative cannot
- **Family Voices** deserve equal space and respect

## My Workflow

### 🌸 Gentle Atmosphere Creation

I start by creating a calm, unrushed environment where memories can surface naturally without pressure or structure.

### 📱 Memory Triggers

I guide participants through their phone gallery chronologically, or by handling physical keepsakes to trigger memories passively.

### 🗝️ Keyword Collection

After recall, I ask each participant to suggest five keywords that feel most important, gathering both their order of appearance and personal ranking.

### 📖 Story Gathering

I collect honest, concrete stories based on each keyword while minimizing verbal direction to reduce bias. The participant remains the narrator.

## Featured Project

### "Mother, Father, Daughter" (2025)

A poetry collection capturing shared family memories from four perspectives — mother, father, daughter, and the poet — centered on five themes: Taiwan, Health, Food, Scenery, and Family.

**Project Details:**

- **4 Voices:** Mother, Father, Daughter, and Poet perspectives
- **5 Themes:** Taiwan, Health, Food, Scenery, Family
- **Raw Fragments:** Preserves fragmentary emotions rather than finalized narratives
- **Emotional Truth:** Maintained through unstructured recall process
- **Lyrical Memory:** Ordinary moments transformed into poetry

### My Role as Binder

In this project, my role was to maintain emotional truth, balancing nuance and silence across voices. By avoiding interrogation and inviting spontaneous recollection, I allowed ordinary moments to bloom into lyrical memory.

## Let's Connect

I'm always ready to help families and individuals who want to:

- Preserve their family stories through gentle exploration
- Transform scattered memories into meaningful narratives
- Explore the emotional threads that connect generations
- Discover the poetry hidden in everyday family moments

---

_"The most beautiful memories are not told—they are recalled, felt, and gently shaped into poetry through patient listening."_ - Park`
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    title: "Historical Fiction & Cultural Heritage Writer",
    avatar: "/images/binders/elena-vasquez.jpg",
    location: "Barcelona, Spain",
    joinedDate: "2022-11-08",
    tags: ["Historical Fiction", "Cultural Heritage", "Mediterranean History", "Archives", "Linguistics"],
    specialties: ["Historical Research", "Cultural Preservation", "Multilingual Storytelling"],
    languages: ["Spanish", "Catalan", "English", "French", "Italian", "Latin"],
    social: {
      website: "https://elenashistories.com",
      twitter: "@elena_historias",
      linkedin: "elena-vasquez-writer"
    },
    stats: {
      booksPublished: 15,
      totalReads: "78.9K",
      rating: 4.7,
      followers: 2100
    },
    featured: true,
    content: `# Meet Elena Vasquez

## About Me

¡Hola! I'm Elena Vasquez, a passionate historian and storyteller dedicated to bringing forgotten voices from the past to life through immersive historical fiction. Based in Barcelona, I specialize in Mediterranean history and cultural heritage preservation through narrative.

## My Calling

I believe that history is not just about dates and events—it's about the human stories that connect us across time. My mission is to uncover and share the experiences of ordinary people who lived through extraordinary times, especially those whose stories have been overlooked or forgotten.

### Background & Education

- **Ph.D. Medieval History** - Universitat de Barcelona (2018)
- **M.A. Cultural Heritage Management** - Universidad Complutense Madrid (2015)
- **B.A. History & Linguistics** - Universitat Autònoma de Barcelona (2013)
- **Certified Archivist** - Catalan Archives Association (2019)

## What Drives My Writing

My work is deeply rooted in:

### Historical Authenticity

Every story I write is built on:

- Extensive archival research
- Archaeological evidence
- Primary source documents
- Consultation with expert historians

### Cultural Sensitivity

I approach historical narratives with:

- Respect for diverse perspectives
- Careful attention to historical context
- Collaboration with cultural communities
- Ethical representation of marginalized voices

## My Writing Philosophy

> "History lives in the spaces between the official records—in the letters never sent, the stories passed down through generations, and the silence that speaks volumes."

I focus on:

- **Overlooked Perspectives**: Centering women, minorities, and common people
- **Cultural Continuity**: Showing how past traditions influence the present
- **Emotional Resonance**: Making historical experiences feel immediate and relevant
- **Educational Impact**: Weaving learning naturally into engaging narratives

## Notable Publications

### "The Olive Grove Chronicles" Trilogy (2022-2023)

Following three generations of women in rural Catalonia:

- **Book 1: "Roots in Stone"** - Set during the Spanish Civil War
- **Book 2: "Branches in the Wind"** - Post-war reconstruction era
- **Book 3: "Leaves in the Light"** - Modern-day inheritance of family secrets
- Winner of the European Historical Fiction Award 2023

### "Voices from the Archive" (2023)

A collection of short stories based on real documents:

- Stories recovered from historical archives across Spain
- Each tale includes historical notes and source materials
- Collaborative project with 12 European archives
- Translated into 6 languages

## Community Engagement

I'm actively involved in cultural preservation:

- **Board Member** - Barcelona Historical Society
- **Consultant** - Catalan Archives Digitization Project
- **Mentor** - Young Historical Fiction Writers Network
- **Guest Lecturer** - Medieval History at University of Barcelona

---

_"Every stone in Barcelona has a story to tell. My job is to listen carefully and share what I hear."_ - Elena Vasquez`
  }
];

// Fetch function that works both locally and when deployed
async function fetchFile(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
}

// Load articles from manifest and markdown files
export async function loadArticles(): Promise<Article[]> {
  try {
    console.log('Loading articles...');
    // Fetch the manifest
    const manifestContent = await fetchFile('/content/articles/manifest.json');
    const manifest = JSON.parse(manifestContent);
    console.log('Articles manifest:', manifest);

    const articles: Article[] = [];

    // Load each article file
    for (const item of manifest) {
      try {
        console.log(`Loading article: ${item.file}`);
        const fileContent = await fetchFile(`/content/articles/${item.file}`);

        // Parse frontmatter and content using gray-matter (same as blog system)
        const { data: frontmatter, content } = matter(fileContent);
        console.log('Article frontmatter:', frontmatter);

        articles.push({
          id: frontmatter.id || item.id,
          title: frontmatter.title || 'Untitled',
          author: frontmatter.author || 'Unknown Author',
          authorBio: frontmatter.authorBio || '',
          publishDate: frontmatter.publishDate || '',
          readTime: frontmatter.readTime || '',
          tags: frontmatter.tags || [],
          excerpt: frontmatter.excerpt || '',
          featured: frontmatter.featured || false,
          content
        });
      } catch (error) {
        console.warn(`Failed to load article: ${item.file}`, error);
      }
    }

    console.log('Loaded articles:', articles);
    return articles;
  } catch (error) {
    console.error('Failed to load articles manifest:', error);
    return [];
  }
}

// Load binders from manifest and markdown files
export async function loadBinders(): Promise<Binder[]> {
  try {
    console.log('Loading binders...');
    // Fetch the manifest
    const manifestContent = await fetchFile('/content/binders/manifest.json');
    const manifest = JSON.parse(manifestContent);
    console.log('Binders manifest:', manifest);

    const binders: Binder[] = [];

    // Load each binder file
    for (const item of manifest) {
      try {
        console.log(`Loading binder: ${item.file}`);
        const fileContent = await fetchFile(`/content/binders/${item.file}`);

        // Parse frontmatter and content using gray-matter (same as blog system)
        const { data: frontmatter, content } = matter(fileContent);
        console.log('Binder frontmatter:', frontmatter);

        binders.push({
          id: frontmatter.id || item.id,
          name: frontmatter.name || 'Unknown',
          title: frontmatter.title || '',
          avatar: frontmatter.avatar || '/images/default-avatar.jpg',
          location: frontmatter.location || '',
          joinedDate: frontmatter.joinedDate || '',
          tags: frontmatter.tags || [],
          specialties: frontmatter.specialties || [],
          languages: frontmatter.languages || [],
          social: frontmatter.social || {},
          stats: frontmatter.stats || { booksPublished: 0, totalReads: '0', rating: 0, followers: 0 },
          featured: frontmatter.featured || false,
          content
        });
      } catch (error) {
        console.warn(`Failed to load binder: ${item.file}`, error);
      }
    }

    console.log('Loaded binders:', binders);
    return binders;
  } catch (error) {
    console.error('Failed to load binders manifest:', error);
    return [];
  }
}

// Get single binder by ID
export async function getBinderById(id: string): Promise<Binder | null> {
  const binders = await loadBinders();
  return binders.find(binder => binder.id === id) || null;
}

// Get single article by ID
export async function getArticleById(id: string): Promise<Article | null> {
  const articles = await loadArticles();
  return articles.find(article => article.id === id) || null;
}