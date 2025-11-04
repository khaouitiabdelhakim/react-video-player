# Publishing Guide for React Video Player

This guide will walk you through the process of publishing your React Video Player component to npm.

## Prerequisites

Before publishing, make sure you have:

1. ✅ An npm account (create one at https://www.npmjs.com/signup)
2. ✅ Node.js and npm installed
3. ✅ Git repository (optional but recommended)
4. ✅ All dependencies installed

## Step-by-Step Publishing Process

### 1. Install tsup (Build Tool)

First, install tsup if you haven't already:

```bash
npm install --save-dev tsup
```

### 2. Login to npm

Open your terminal and login to your npm account:

```bash
npm login
```

Enter your npm credentials:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

Verify you're logged in:

```bash
npm whoami
```

### 3. Update Package Information

Open `package.json` and verify/update:

- **name**: Change `@khaouitiabdelhakim/react-video-player` to your scope
  - If you want a public scoped package: `@your-username/react-video-player`
  - If you want an unscoped package: `react-video-player` (name must be unique on npm)

- **version**: Follow semantic versioning (e.g., `1.0.0`)

- **description**: Customize if needed

- **repository**: Update with your GitHub URL

- **author**: Update with your name/email

### 4. Build the Package

Run the build command to compile your TypeScript code:

```bash
npm run build:package
```

This will create a `dist/` folder with:
- `index.js` - CommonJS build
- `index.mjs` - ES Module build
- `index.d.ts` - TypeScript declarations
- Source maps

### 5. Test the Build Locally (Optional but Recommended)

Test your package locally before publishing:

```bash
# Create a tarball
npm pack

# This creates a .tgz file like: khaouitiabdelhakim-react-video-player-1.0.0.tgz
# You can install this in another project to test:
# npm install /path/to/khaouitiabdelhakim-react-video-player-1.0.0.tgz
```

Or use npm link:

```bash
# In your video-player directory
npm link

# In another test project
npm link @khaouitiabdelhakim/react-video-player
```

### 6. Check Package Contents

Verify what files will be published:

```bash
npm pack --dry-run
```

This shows you exactly what will be included in your package.

### 7. Publish to npm

#### For Scoped Public Package

```bash
npm publish --access public
```

#### For Unscoped Package

```bash
npm publish
```

### 8. Verify Publication

Visit your package page:
- For scoped: https://www.npmjs.com/package/@your-username/react-video-player
- For unscoped: https://www.npmjs.com/package/react-video-player

## Publishing Updates

When you make changes and want to publish a new version:

### 1. Update Version Number

Use npm's version command (automatically updates package.json and creates a git tag):

```bash
# For bug fixes (1.0.0 -> 1.0.1)
npm version patch

# For new features (1.0.0 -> 1.1.0)
npm version minor

# For breaking changes (1.0.0 -> 2.0.0)
npm version major
```

Or manually update the version in `package.json`.

### 2. Build and Publish

```bash
npm run build:package
npm publish
```

## Common Issues and Solutions

### Issue: Package name already exists

**Solution**: Change the package name in `package.json` or use a scoped package (`@your-username/package-name`)

### Issue: 402 Payment Required

**Solution**: You need to make your scoped package public:
```bash
npm publish --access public
```

### Issue: 403 Forbidden

**Solutions**:
- Make sure you're logged in: `npm whoami`
- Verify you have permission to publish under that scope
- Check if the package name is already taken

### Issue: Build errors

**Solution**: 
- Make sure all dependencies are installed: `npm install`
- Check TypeScript compilation: `npx tsc --noEmit`
- Review tsup.config.ts settings

### Issue: "dist" folder not found

**Solution**: Run `npm run build:package` before publishing

## Best Practices

1. ✅ **Always test locally** before publishing
2. ✅ **Use semantic versioning** correctly
3. ✅ **Update README.md** with changes
4. ✅ **Create a CHANGELOG.md** to track versions
5. ✅ **Add GitHub repository** for issues and contributions
6. ✅ **Use .npmignore** to exclude unnecessary files
7. ✅ **Test in different React/Next.js versions**
8. ✅ **Document breaking changes** clearly

## Unpublishing (Use with Caution)

If you need to unpublish a version within 72 hours:

```bash
# Unpublish a specific version
npm unpublish @your-username/react-video-player@1.0.0

# Unpublish entire package (only within 72 hours)
npm unpublish @your-username/react-video-player --force
```

⚠️ **Warning**: Unpublishing is discouraged. Use `npm deprecate` instead:

```bash
npm deprecate @your-username/react-video-player@1.0.0 "Use version 1.0.1 instead"
```

## Automating with GitHub Actions (Optional)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build:package
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add your npm token as a GitHub secret named `NPM_TOKEN`.

## Getting Your npm Access Token

1. Login to npmjs.com
2. Click your profile picture → Access Tokens
3. Generate New Token → Classic Token
4. Select "Automation" type
5. Copy the token
6. Add it to your GitHub repository secrets

## Support and Maintenance

After publishing:

1. 📝 Monitor GitHub Issues
2. 🐛 Fix bugs promptly
3. 🔄 Keep dependencies updated
4. 📚 Update documentation
5. 💬 Respond to community feedback

## Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [tsup Documentation](https://tsup.egoist.dev/)
- [Publishing to npm Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

---

Good luck with your package! 🚀

