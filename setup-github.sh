#!/bin/bash

echo "🚀 Setting up Sauna Cult Booking System on GitHub..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run this from the project directory."
    exit 1
fi

echo "📝 Current git status:"
git status

echo ""
echo "🔧 To create a new GitHub repository and push this code:"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'sauna-cult-booking'"
echo "3. Make it public"
echo "4. Don't initialize with README, .gitignore, or license"
echo "5. Copy the repository URL (e.g., https://github.com/yourusername/sauna-cult-booking.git)"
echo ""
echo "6. Then run these commands:"
echo ""
echo "   git remote remove origin"
echo "   git remote add origin https://github.com/yourusername/sauna-cult-booking.git"
echo "   git push -u origin main"
echo ""
echo "7. After pushing, you can deploy to Vercel:"
echo "   - Go to https://vercel.com/dashboard"
echo "   - Click 'New Project'"
echo "   - Import your GitHub repository"
echo "   - Configure environment variables"
echo "   - Deploy!"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"

# Show current branch and commit info
echo ""
echo "📊 Current repository info:"
echo "Branch: $(git branch --show-current)"
echo "Last commit: $(git log -1 --oneline)"
echo "Files ready to push:"
git ls-files | wc -l | xargs echo "Total files:"