# Sanity Schema Setup

Create these schemas in your Sanity Studio:

## 1. Personal Info Schema (`personalInfo.ts`)

```typescript
export default {
  name: 'personalInfo',
  title: 'Personal Info',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image' },
    { name: 'bio', title: 'Biography', type: 'text' },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ],
    },
  ],
}
```

## 2. Book Schema (`book.ts`)

```typescript
export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'cover', title: 'Cover Image', type: 'image' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'amazonLink', title: 'Amazon Link', type: 'url' },
    { name: 'publishedDate', title: 'Published Date', type: 'date' },
  ],
}
```

## 3. Video Schema (`video.ts`)

```typescript
export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'videoUrl', title: 'Video URL', type: 'url' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image' },
    { name: 'date', title: 'Date', type: 'date' },
  ],
}
```

## 4. Vlog Schema (`vlog.ts`)

```typescript
export default {
  name: 'vlog',
  title: 'Vlog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'videoUrl', title: 'Video URL', type: 'url' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image' },
    { name: 'date', title: 'Date', type: 'date' },
  ],
}
```

## 5. Meeting Schema (`meeting.ts`)

```typescript
export default {
  name: 'meeting',
  title: 'Meeting',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'date', title: 'Date', type: 'date' },
  ],
}
```

## Setup Instructions

1. In your Sanity Studio, create these schema files in the `schemas` folder
2. Import them in your `schema/index.ts`:

```typescript
import personalInfo from './personalInfo'
import book from './book'
import video from './video'
import vlog from './vlog'
import meeting from './meeting'

export const schemaTypes = [personalInfo, book, video, vlog, meeting]
```

3. Run `sanity dev` to start your studio and add content
