# 📄 How to Add Your CV for Download

## Quick Setup (2 Steps)

### Step 1: Get Your CV Ready
- Make sure your CV/Resume is in **PDF format**
- Rename it to: `AbdulRehman_CV.pdf`

### Step 2: Add to Project
1. Copy your `AbdulRehman_CV.pdf` file
2. Paste it into the **public** folder at:
   ```
   C:\Users\DELL\Desktop\Portfolio\public\
   ```

That's it! ✅

## How It Works

When visitors click the **"Download CV"** button on your portfolio:
- The browser will automatically download your PDF
- The file will be named `AbdulRehman_CV.pdf` on their computer

## Using a Different Filename?

If you want to use a different name (e.g., `resume.pdf` or `MyCV.pdf`):

1. Place your PDF in the `public` folder with your chosen name
2. Open: `C:\Users\DELL\Desktop\Portfolio\src\components\Hero.jsx`
3. Find line 32 and change:
   ```javascript
   <a href="/AbdulRehman_CV.pdf" download className="btn btn-secondary">
   ```
   to:
   ```javascript
   <a href="/YourFileName.pdf" download className="btn btn-secondary">
   ```

## Testing

1. Add your PDF to the `public` folder
2. Refresh your portfolio: http://localhost:5173/
3. Click "Download CV" button
4. Your CV should download! 🎉

## Important Notes

- ✅ The PDF must be in the `public` folder (not `src`)
- ✅ The filename in the code must match your actual PDF filename exactly
- ✅ PDF format is recommended (most professional and compatible)
- ✅ Keep the file size reasonable (under 2MB is ideal)

## Troubleshooting

**Button doesn't download anything?**
- Check that the PDF is in the `public` folder
- Verify the filename matches exactly (case-sensitive)
- Make sure the file extension is `.pdf`

**File downloads with wrong name?**
- The download attribute in the code determines the downloaded filename
- You can customize it like: `<a href="/file.pdf" download="AbdulRehman_Resume.pdf">`
