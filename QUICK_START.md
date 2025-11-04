# Quick Start - Publishing to npm

## 🚀 Quick Commands

```bash
# 1. Fix npm cache permissions (if needed)
sudo chown -R $(id -u):$(id -g) "$HOME/.npm"

# 2. Install tsup for building
npm install --save-dev tsup

# 3. Login to npm
npm login

# 4. Build the package
npm run build:package

# 5. Publish to npm
npm publish --access public
```

## ✅ What's Already Set Up

- ✅ `package.json` configured for npm publishing
- ✅ `tsup.config.ts` for building TypeScript
- ✅ `.npmignore` to exclude unnecessary files
- ✅ `README.md` with full documentation
- ✅ `index.ts` as entry point
- ✅ TypeScript types exported

## 📦 Package Details

- **Name**: `@khaouitiabdelhakim/react-video-player`
- **Version**: 1.0.0
- **Entry Point**: `dist/index.js`
- **TypeScript**: Fully typed with `.d.ts` files

## 🔄 Update Version & Publish

```bash
# Update version (choose one)
npm version patch   # 1.0.0 -> 1.0.1 (bug fixes)
npm version minor   # 1.0.0 -> 1.1.0 (new features)
npm version major   # 1.0.0 -> 2.0.0 (breaking changes)

# Build and publish
npm run build:package
npm publish
```

## 📝 Before First Publish

1. Update the package name in `package.json` if needed:
   - For scoped: `@your-username/react-video-player`
   - For public: `react-video-player` (must be unique)

2. Update repository URLs in `package.json`

3. Update author information

4. Create a GitHub repository (optional but recommended)

## 🧪 Test Locally First

```bash
# Build the package
npm run build:package

# Check what will be published
npm pack --dry-run

# Create a test package
npm pack

# Install in another project to test
npm install /path/to/khaouitiabdelhakim-react-video-player-1.0.0.tgz
```

## 📖 Full Documentation

For detailed instructions, see `PUBLISHING.md`

## 🆘 Common Issues

**Issue: Package name taken**
```bash
# Use a scoped package name
"name": "@your-username/react-video-player"
```

**Issue: 402 Payment Required**
```bash
npm publish --access public
```

**Issue: Not logged in**
```bash
npm login
npm whoami  # verify
```

## 🎉 After Publishing

Your package will be available at:
- https://www.npmjs.com/package/@khaouitiabdelhakim/react-video-player

Users can install it with:
```bash
npm install @khaouitiabdelhakim/react-video-player
```

And use it like:
```jsx
import VideoPlayer from '@khaouitiabdelhakim/react-video-player';

<VideoPlayer src="/video.mp4" poster="/poster.jpg" />
```

---

Good luck! 🚀 For more details, check `PUBLISHING.md`

