# 🌸 Anshu & Sunny — Engagement Invite · Deployment Guide

## Deploy to Vercel in 3 Steps

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   cd anshu-sunny-engagement
   git init
   git add .
   git commit -m "Anshu & Sunny engagement invite 💍"
   git remote add origin https://github.com/YOUR_USERNAME/anshu-sunny-invite.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) → Sign in with GitHub
   - Click **"Add New Project"**
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy** 🚀

3. **Share the link!**
   Your invite will be live at something like: `https://anshu-sunny-invite.vercel.app`

---

### Option 2: Vercel CLI (Fastest)

```bash
npm install -g vercel
cd anshu-sunny-engagement
vercel
```
Follow the prompts — done in 60 seconds!

---

### Option 3: Drag & Drop

```bash
npm run build
```
Then drag the `.next` folder into [vercel.com/new](https://vercel.com/new)

---

## Customizations

| What to change | File | Line |
|---|---|---|
| Event time | `app/page.tsx` | Time card section |
| Quote/message | `app/page.tsx` | "closing blessing" section |
| Colors | `app/globals.css` | `:root` variables |
| Petal count | `app/components/Petals.tsx` | `Array.from({ length: 18 }` |

## 💛 Enjoy your special day!
