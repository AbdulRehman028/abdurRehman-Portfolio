# Portfolio Data Customization Guide

This guide explains how to replace the mock data in your portfolio website with your own information.

## 📁 Data File Location

All portfolio data is centralized in one file:
```
data/portfolio-data.ts
```

## 🎯 What You Can Customize

### 1. Personal Information

Located in the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  tagline: "Your Catchy Tagline",
  bio: "Your detailed bio paragraph...",
  email: "your.email@example.com",
  location: "Your City, Country",
  availability: "Your availability status",
  resumeUrl: "/path-to-your-resume.pdf",
};
```

**What each field does:**
- `name`: Displayed in the hero section and footer
- `title`: Your professional headline (shown under your name)
- `tagline`: Short catchy phrase
- `bio`: Full biography paragraph (About section)
- `email`: Contact email address
- `location`: Your location (About and Contact sections)
- `availability`: Current work availability status
- `resumeUrl`: Link to your resume PDF

---

### 2. Social Links

Located in the `socialLinks` array:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "🔗",
  },
  // Add more social links...
];
```

**How to modify:**
- Change the `url` to your actual profile URLs
- You can add/remove social platforms
- Change `icon` to any emoji you prefer
- The `name` appears on hover

**Supported platforms:** GitHub, LinkedIn, Twitter/X, Email, or any custom platform

---

### 3. Skills & Technologies

Located in the `skills` array:

```typescript
export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  // Add your skills...
];
```

**Categories:**
- `frontend`: Frontend technologies
- `backend`: Backend technologies
- `tools`: Development tools and platforms
- `other`: Anything else

**How to add a skill:**
```typescript
{ name: "Python", icon: "🐍", category: "backend" }
```

You can use emojis as icons or replace them with text symbols.

---

### 4. Projects

Located in the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Short description (1-2 lines)",
    longDescription: "Detailed description for future use",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/projects/project-image.jpg",
    liveUrl: "https://your-live-demo.com", // Optional
    githubUrl: "https://github.com/you/repo", // Optional
    featured: true, // Set to true for featured projects
  },
];
```

**How to add a project:**
1. Copy an existing project object
2. Increment the `id`
3. Update all fields
4. Add project image to `public/projects/` folder
5. Update the `image` path
6. Set `featured: true` for your best projects

**Image requirements:**
- Place images in `public/projects/`
- Recommended size: 1200x800px
- Formats: JPG, PNG, or WebP

---

### 5. Work Experience

Located in the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "2020 - 2022",
    description: "What you did in this role...",
    technologies: ["React", "TypeScript", "AWS"],
  },
];
```

**How to add experience:**
1. Copy an existing experience object
2. Increment the `id`
3. Update all fields
4. List relevant technologies used

**Timeline order:** The most recent experience should be first (highest in the array).

---

### 6. Stats/Highlights

Located in the `stats` array:

```typescript
export const stats = [
  {
    label: "Years Experience",
    value: "5+",
  },
  // Add more stats...
];
```

**Ideas for stats:**
- Years of experience
- Projects completed
- Happy clients
- GitHub contributions
- Technologies mastered
- Awards won

---

## 🖼️ Adding Your Own Images

### Profile Image
Currently using an emoji (👨‍💻). To add your actual photo:

1. Place your photo in `public/` folder (e.g., `public/profile.jpg`)
2. Edit `components/About.tsx`
3. Find the profile section
4. Replace the emoji div with:
```tsx
<img 
  src="/profile.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### Project Images
1. Add project screenshots to `public/projects/` folder
2. Update the `image` field in your project:
```typescript
image: "/projects/my-awesome-project.jpg"
```

---

## 🎨 Customizing Colors

To change the color scheme, edit `app/globals.css`:

```css
:root {
  --color-accent-cyan: #00d4ff;    /* Change to your primary color */
  --color-accent-purple: #b366ff;  /* Change to your secondary color */
  --color-accent-pink: #ff3ea5;    /* Change to your tertiary color */
}
```

---

## ✅ Quick Start Checklist

- [ ] Update `personalInfo` with your details
- [ ] Add your social media URLs to `socialLinks`
- [ ] Replace skills with your technologies
- [ ] Add your projects with descriptions and links
- [ ] Update work experience timeline
- [ ] Customize stats/highlights
- [ ] Add your profile image
- [ ] Add project screenshots
- [ ] Test all links work correctly
- [ ] Update the page title and description in `app/layout.tsx`

---

## 🚀 After Customization

Once you've updated your data:

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **View your portfolio:**
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images (optimize them first)
- Test all external links before deploying
- Update meta tags in `app/layout.tsx` for better SEO
- Regularly update your projects and experience

Need help? Check the TypeScript interfaces in `data/portfolio-data.ts` for exact field requirements.
