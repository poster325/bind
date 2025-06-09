// Utility functions for parsing markdown files with frontmatter

export interface ArticleMetadata {
  title: string;
  author: string;
  authorBio: string;
  publishedDate: string;
  tags: string[];
  excerpt: string;
  featured: boolean;
}

export interface Article extends ArticleMetadata {
  id: string;
  content: string;
}

export interface BinderMetadata {
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
}

export interface Binder extends BinderMetadata {
  content: string;
}

export function parseFrontmatter(markdown: string): { metadata: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, content: markdown };
  }
  
  const [, frontmatterStr, content] = match;
  
  try {
    // Simple YAML-like parser for frontmatter
    const metadata: any = {};
    const lines = frontmatterStr.split('\n');
    let currentKey = '';
    let isInObject = false;
    let isInArray = false;
    let objectBuffer: any = {};
    let arrayBuffer: string[] = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;
      
      if (trimmedLine.endsWith(': {')) {
        // Start of object
        currentKey = trimmedLine.replace(': {', '');
        isInObject = true;
        objectBuffer = {};
      } else if (trimmedLine === '}') {
        // End of object
        metadata[currentKey] = objectBuffer;
        isInObject = false;
        currentKey = '';
      } else if (trimmedLine.startsWith('- ')) {
        // Array item
        if (!isInArray) {
          arrayBuffer = [];
          isInArray = true;
        }
        arrayBuffer.push(trimmedLine.substring(2).replace(/['"]/g, ''));
      } else if (trimmedLine.includes(': [')) {
        // Inline array
        const [key, valueStr] = trimmedLine.split(': [');
        const arrayStr = valueStr.replace(']', '');
        const values = arrayStr.split(',').map(v => v.trim().replace(/['"]/g, ''));
        metadata[key] = values;
      } else if (trimmedLine.includes(': ')) {
        // End of array if we were in one
        if (isInArray) {
          metadata[currentKey] = arrayBuffer;
          isInArray = false;
          arrayBuffer = [];
        }
        
        const [key, ...valueParts] = trimmedLine.split(': ');
        let value = valueParts.join(': ').trim();
        
        if (isInObject) {
          // Object property
          objectBuffer[key.trim()] = value.replace(/['"]/g, '');
        } else {
          // Regular property
          currentKey = key;
          
          // Parse different value types
          if (value === 'true') {
            metadata[key] = true;
          } else if (value === 'false') {
            metadata[key] = false;
          } else if (!isNaN(Number(value)) && value !== '') {
            metadata[key] = Number(value);
          } else {
            metadata[key] = value.replace(/['"]/g, '');
          }
        }
      }
    }
    
    // Handle any remaining array
    if (isInArray) {
      metadata[currentKey] = arrayBuffer;
    }
    
    return { metadata, content: content.trim() };
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    return { metadata: {}, content: markdown };
  }
}

// Sample data for demonstration (in a real app, these would be loaded from the actual markdown files)
export const sampleArticles: Article[] = [
  {
    id: "digital-storytelling",
    title: "The Art of Digital Storytelling",
    author: "Sarah Chen",
    authorBio: "Award-winning digital storyteller and multimedia artist",
    publishedDate: "2024-01-15",
    tags: ["Digital Media", "Storytelling", "Art", "Technology"],
    excerpt: "Exploring how modern technology enhances traditional narrative techniques in the digital age.",
    featured: true,
    content: "In today's rapidly evolving digital landscape, storytelling has transcended traditional boundaries..."
  },
  {
    id: "sustainable-publishing",
    title: "Sustainable Publishing in the Digital Era",
    author: "Marcus Rodriguez",
    authorBio: "Environmental consultant and sustainable technology advocate",
    publishedDate: "2024-02-08",
    tags: ["Sustainability", "Publishing", "Environment", "Green Tech"],
    excerpt: "How digital publishing platforms are revolutionizing the industry while reducing environmental impact.",
    featured: true,
    content: "The publishing industry stands at a crossroads where environmental responsibility meets technological innovation..."
  }
];

export const sampleBinders: Binder[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Digital Storytelling Specialist",
    avatar: "/images/binders/sarah-chen.jpg",
    location: "San Francisco, CA",
    joinedDate: "2023-03-15",
    tags: ["Digital Media", "Storytelling", "Interactive Design", "UX Writing", "Content Strategy"],
    specialties: ["Interactive Narratives", "Multimedia Publishing", "Digital Art"],
    languages: ["English", "Mandarin", "Japanese"],
    social: {
      website: "https://sarahchen.design",
      twitter: "@sarahchen_design",
      linkedin: "sarah-chen-design"
    },
    stats: {
      booksPublished: 12,
      totalReads: "45.2K",
      rating: 4.8,
      followers: 1250
    },
    featured: true,
    content: "Hello! I'm Sarah Chen, a passionate digital storyteller who bridges the gap between traditional narrative and cutting-edge technology..."
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    title: "Sustainable Publishing Advocate",
    avatar: "/images/binders/marcus-rodriguez.jpg",
    location: "Portland, OR",
    joinedDate: "2023-01-20",
    tags: ["Sustainability", "Environment", "Green Tech", "Climate Fiction", "Environmental Science"],
    specialties: ["Climate Fiction", "Environmental Journalism", "Green Technology"],
    languages: ["English", "Spanish", "Portuguese"],
    social: {
      website: "https://sustainablestories.org",
      twitter: "@marcus_eco_stories",
      linkedin: "marcus-rodriguez-sustainability"
    },
    stats: {
      booksPublished: 8,
      totalReads: "32.1K",
      rating: 4.9,
      followers: 890
    },
    featured: true,
    content: "I'm Marcus Rodriguez, an environmental consultant turned author who combines scientific expertise with compelling storytelling..."
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    title: "Historical Fiction & Cultural Heritage Writer",
    avatar: "/images/binders/elena-vasquez.jpg",
    location: "Barcelona, Spain",
    joinedDate: "2023-05-10",
    tags: ["Historical Fiction", "Cultural Heritage", "Mediterranean History", "Genealogy", "Translation"],
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
    content: "¡Hola! I'm Elena Vasquez, a passionate historian and storyteller dedicated to bringing forgotten voices from the past to life..."
  }
]; 