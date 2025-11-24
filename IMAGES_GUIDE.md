# How to Replace Stock Images

To make this portfolio truly yours, you should replace the placeholder images with your own photos.

## 1. Prepare Your Images
- **Hero Image**: A high-quality portrait or abstract shot. (Recommended: Vertical or Square)
- **Runway Images**: 2 photos representing your time at Bitwise and Capgemini. (Abstract tech or office shots work well).
- **Collection Textures**: 3 abstract textures for the "Fabric Swatches".
- **Project Images**: 2 screenshots or visuals for your projects.

## 2. Where to Place Them
1.  Go to the `public` folder in your project: `c:\Users\pmish\Downloads\portfolio\public`
2.  Create a new folder named `images`.
3.  Paste your image files there (e.g., `hero.jpg`, `bitwise.jpg`).

## 3. How to Update the Code
You need to update the `src` paths in the code files.

### **Hero Section** (`src/components/Hero.tsx`)
Find this line (around line 96):
```tsx
src="https://images.unsplash.com/..."
```
Change it to:
```tsx
src="/images/hero.jpg"
```

### **Runway Section** (`src/components/Runway.tsx`)
Find the `seasons` array at the top of the file. Change the `image` property:
```tsx
image: "/images/bitwise.jpg"
```

### **Collection Section** (`src/components/Collection.tsx`)
Find the `fabrics` and `projects` arrays. Change the `texture` and `image` properties:
```tsx
texture: "/images/fabric-1.jpg"
image: "/images/project-1.jpg"
```

## Tips
- Use **high-resolution** images (at least 1000px wide).
- **Black & White** photos often look best with this theme (or the code will automatically grayscale them for you!).
