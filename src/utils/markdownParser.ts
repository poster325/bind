// Utility functions for parsing markdown files with frontmatter

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

// Frontmatter parsing function
function parseFrontmatter(content: string): { frontmatter: any; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }

  const [, frontmatterStr, bodyContent] = match;
  
  // Simple YAML-like parsing (basic implementation)
  const frontmatter: any = {};
  const lines = frontmatterStr.split('\n');
  let currentKey = '';
  let currentArray: string[] = [];
  let inArray = false;
  let inObject = false;
  let currentObject: any = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('-') && inArray) {
      // Array item
      currentArray.push(trimmed.substring(1).trim().replace(/['"]/g, ''));
    } else if (trimmed.includes(':') && !inArray) {
      if (inObject && currentKey) {
        frontmatter[currentKey] = currentObject;
        currentObject = {};
        inObject = false;
      }
      
      const [key, ...valueParts] = trimmed.split(':');
      const value = valueParts.join(':').trim();
      
      if (value === '[') {
        // Start of array
        currentKey = key.trim();
        currentArray = [];
        inArray = true;
      } else if (value === '{' || value.startsWith('{')) {
        // Start of object
        currentKey = key.trim();
        currentObject = {};
        inObject = true;
        
        // Handle inline object
        if (value.includes('}')) {
          const objContent = value.replace(/[{}]/g, '');
          if (objContent.trim()) {
            const pairs = objContent.split(',');
            for (const pair of pairs) {
              const [objKey, objValue] = pair.split(':');
              if (objKey && objValue) {
                currentObject[objKey.trim().replace(/['"]/g, '')] = objValue.trim().replace(/['"]/g, '');
              }
            }
          }
          frontmatter[currentKey] = currentObject;
          currentObject = {};
          inObject = false;
          currentKey = '';
        }
      } else {
        // Regular key-value pair
        let processedValue: any = value.replace(/['"]/g, '');
        
        // Try to parse as number
        if (!isNaN(Number(processedValue))) {
          processedValue = Number(processedValue);
        }
        // Try to parse as boolean
        else if (processedValue === 'true') {
          processedValue = true;
        } else if (processedValue === 'false') {
          processedValue = false;
        }
        
        if (inObject) {
          currentObject[key.trim().replace(/['"]/g, '')] = processedValue;
        } else {
          frontmatter[key.trim()] = processedValue;
        }
      }
    } else if (trimmed === ']' && inArray) {
      // End of array
      frontmatter[currentKey] = currentArray;
      currentArray = [];
      inArray = false;
      currentKey = '';
    } else if (trimmed === '}' && inObject) {
      // End of object
      frontmatter[currentKey] = currentObject;
      currentObject = {};
      inObject = false;
      currentKey = '';
    } else if (inObject && trimmed.includes(':')) {
      // Object property
      const [objKey, objValue] = trimmed.split(':');
      if (objKey && objValue) {
        currentObject[objKey.trim().replace(/['"]/g, '')] = objValue.trim().replace(/['"]/g, '').replace(/,$/, '');
      }
    }
  }

  // Handle any remaining data
  if (inArray && currentKey) {
    frontmatter[currentKey] = currentArray;
  }
  if (inObject && currentKey) {
    frontmatter[currentKey] = currentObject;
  }

  return { frontmatter, content: bodyContent.trim() };
}

// Mock file system for demo purposes
// In a real application, you would use fetch() or a file system API
const mockFileSystem: { [key: string]: string } = {
  'src/content/articles/manifest.json': JSON.stringify([
    { id: "digital-storytelling", file: "digital-storytelling.md" },
    { id: "sustainable-publishing", file: "sustainable-publishing.md" }
  ]),
  'src/content/binders/manifest.json': JSON.stringify([
    { id: "sarah-chen", file: "sarah-chen.md" },
    { id: "marcus-rodriguez", file: "marcus-rodriguez.md" },
    { id: "elena-vasquez", file: "elena-vasquez.md" }
  ]),
  'src/content/articles/digital-storytelling.md': `---
id: "digital-storytelling"
title: "The Art of Digital Storytelling"
author: "Sarah Chen"
authorBio: "Digital storytelling specialist with 8+ years of experience in multimedia publishing"
publishDate: "2023-11-15"
readTime: "8 min read"
tags: ["Digital Media", "Storytelling", "Technology", "Publishing"]
excerpt: "Exploring how technology transforms traditional narratives into immersive digital experiences."
featured: true
---

# The Art of Digital Storytelling

In our rapidly evolving digital landscape, the way we tell and consume stories is undergoing a profound transformation...`,
  'src/content/articles/sustainable-publishing.md': `---
id: "sustainable-publishing"
title: "Sustainable Publishing in the Digital Era"
author: "Marcus Rodriguez"
authorBio: "Environmental consultant and author specializing in climate fiction and sustainable practices"
publishDate: "2023-11-10"
readTime: "12 min read"
tags: ["Sustainability", "Publishing", "Environment", "Green Technology"]
excerpt: "How the publishing industry is adapting to environmental challenges and embracing sustainable practices."
featured: true
---

# Sustainable Publishing in the Digital Era

The publishing industry stands at a crossroads, facing unprecedented environmental challenges...`,
  'src/content/binders/sarah-chen.md': `---
id: "sarah-chen"
name: "Sarah Chen"
title: "Digital Storytelling Specialist"
avatar: "/images/binders/sarah-chen.jpg"
location: "San Francisco, CA"
joinedDate: "2023-03-15"
tags: ["Digital Media", "Storytelling", "Interactive Design", "UX Writing", "Content Strategy"]
specialties: ["Interactive Narratives", "Multimedia Publishing", "Digital Art"]
languages: ["English", "Mandarin", "Japanese"]
social: { website: "https://sarahchen.design", twitter: "@sarahchen_design", linkedin: "sarah-chen-design" }
stats: { booksPublished: 12, totalReads: "45.2K", rating: 4.8, followers: 1250 }
featured: true
---

# Meet Sarah Chen

## About Me

Hello! I'm Sarah Chen, a passionate digital storyteller who bridges the gap between traditional narrative and cutting-edge technology. With over 8 years of experience in multimedia publishing, I specialize in creating immersive, interactive stories that captivate and engage modern audiences.

## My Journey

My journey into digital storytelling began during my graduate studies in Interactive Media Design at Stanford University. What started as curiosity about how technology could enhance narrative experiences has evolved into a career dedicated to pushing the boundaries of what stories can be.

### Background & Education

- **M.A. Interactive Media Design** - Stanford University (2016)
- **B.A. English Literature** - UC Berkeley (2014)
- **Certificate in UX Design** - General Assembly (2017)

## What I Do

I create digital narratives that combine:

- **Interactive Elements**: Choose-your-own-adventure style storytelling
- **Multimedia Integration**: Seamlessly blending text, audio, and visual elements
- **Responsive Design**: Stories that adapt to different devices and reading preferences
- **User Experience Focus**: Ensuring every interaction enhances the narrative

## My Publishing Philosophy

> "Every story deserves to be told in the medium that best serves its purpose. Sometimes that's a traditional book, sometimes it's an interactive digital experience, and often it's something entirely new."

I believe in:

- **Reader Agency**: Giving readers meaningful choices in how they experience stories
- **Accessibility**: Creating inclusive narratives that welcome all audiences
- **Innovation**: Constantly exploring new ways to tell timeless stories
- **Collaboration**: Working with other creators to push creative boundaries`,
  'src/content/binders/marcus-rodriguez.md': `---
id: "marcus-rodriguez"
name: "Marcus Rodriguez"
title: "Sustainable Publishing Advocate"
avatar: "/images/binders/marcus-rodriguez.jpg"
location: "Portland, OR"
joinedDate: "2023-01-20"
tags: ["Sustainability", "Environment", "Green Tech", "Climate Fiction", "Environmental Science"]
specialties: ["Climate Fiction", "Environmental Journalism", "Green Technology"]
languages: ["English", "Spanish", "Portuguese"]
social: { website: "https://sustainablestories.org", twitter: "@marcus_eco_stories", linkedin: "marcus-rodriguez-sustainability" }
stats: { booksPublished: 8, totalReads: "32.1K", rating: 4.9, followers: 890 }
featured: true
---

# Meet Marcus Rodriguez

## About Me

I'm Marcus Rodriguez, an environmental consultant turned author who combines scientific expertise with compelling storytelling to address our planet's most pressing challenges. Through my writing, I strive to make environmental issues accessible, engaging, and actionable for readers worldwide.

## My Mission

As a writer, my mission is to bridge the gap between complex environmental science and public understanding. I believe that stories have the power to inspire change, foster empathy, and drive meaningful action toward a more sustainable future.

### Background & Credentials

- **M.S. Environmental Science** - Oregon State University (2015)
- **B.S. Biology** - University of California, Davis (2013)
- **Environmental Consultant** - 6 years in renewable energy sector
- **Certified Climate Reality Leader** - The Climate Reality Project (2019)

## What I Write About

My work focuses on three core areas:

### Climate Fiction (Cli-Fi)

Stories that explore climate change through human experiences:

- Near-future scenarios grounded in climate science
- Character-driven narratives about adaptation and resilience
- Hope-based storytelling that inspires action`,
  'src/content/binders/elena-vasquez.md': `---
id: "elena-vasquez"
name: "Elena Vasquez"
title: "Historical Fiction & Cultural Heritage Writer"
avatar: "/images/binders/elena-vasquez.jpg"
location: "Barcelona, Spain"
joinedDate: "2022-11-08"
tags: ["Historical Fiction", "Cultural Heritage", "Mediterranean History", "Archives", "Linguistics"]
specialties: ["Historical Research", "Cultural Preservation", "Multilingual Storytelling"]
languages: ["Spanish", "Catalan", "English", "French", "Italian", "Latin"]
social: { website: "https://elenashistories.com", twitter: "@elena_historias", linkedin: "elena-vasquez-writer" }
stats: { booksPublished: 15, totalReads: "78.9K", rating: 4.7, followers: 2100 }
featured: true
---

# Meet Elena Vasquez

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
- Consultation with expert historians`
};

// Mock fetch function for demo
async function mockFetch(path: string): Promise<string> {
  const content = mockFileSystem[path];
  if (!content) {
    throw new Error(`File not found: ${path}`);
  }
  return content;
}

// Load articles from manifest
export async function loadArticles(): Promise<Article[]> {
  try {
    const manifestContent = await mockFetch('src/content/articles/manifest.json');
    const manifest = JSON.parse(manifestContent);
    
    const articles: Article[] = [];
    
    for (const item of manifest) {
      try {
        const fileContent = await mockFetch(`src/content/articles/${item.file}`);
        const { frontmatter, content } = parseFrontmatter(fileContent);
        
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
    
    return articles;
  } catch (error) {
    console.error('Failed to load articles manifest:', error);
    return [];
  }
}

// Load binders from manifest
export async function loadBinders(): Promise<Binder[]> {
  try {
    const manifestContent = await mockFetch('src/content/binders/manifest.json');
    const manifest = JSON.parse(manifestContent);
    
    const binders: Binder[] = [];
    
    for (const item of manifest) {
      try {
        const fileContent = await mockFetch(`src/content/binders/${item.file}`);
        const { frontmatter, content } = parseFrontmatter(fileContent);
        
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