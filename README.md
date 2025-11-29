TaskFlow Landing Page

A responsive, high-performance landing page for TaskFlow, a hypothetical project management SaaS. This project was built to demonstrate modern frontend development practices using Next.js, Tailwind CSS, and AI-assisted UI generation via Vercel v0.

🚀 Live Demo

[Insert your Vercel Deployment Link Here]

🛠️ Tech Stack

Framework: Next.js (App Router)

Styling: Tailwind CSS

Icons: Lucide React

UI Generation: Vercel v0

Language: TypeScript

📂 Project Structure

/
├── app/
│   ├── layout.tsx       # Root layout with font configuration
│   └── page.tsx         # Main landing page assembling all sections
├── components/
│   ├── Navbar.tsx       # Responsive navigation
│   ├── Hero.tsx         # Hero section with mock dashboard
│   ├── Features.tsx     # Feature grid
│   ├── Testimonials.tsx # v0 Generated Component
│   ├── Pricing.tsx      # v0 Generated Component
│   └── Footer.tsx       # Site footer
└── styles/
    └── globals.css      # Tailwind directives


🤖 Vercel v0 Usage Notes

Evaluation Requirement:
The following components were generated using Vercel v0 to accelerate the development of complex UI patterns:

Testimonials Section: I used v0 to generate a clean, card-based grid layout for customer reviews. The prompt focused on "minimalist testimonial cards with star ratings and user avatars in a responsive grid."

Pricing Section: The pricing table was generated via v0. I specifically requested a "3-column pricing table with a highlighted 'Pro' tier," leveraging v0's ability to quickly structure complex lists and tiered visual hierarchy.

UI Primitives: The base styles for the Button and Badge components follow patterns often output by v0/shadcn-ui for consistency.

🏃‍♂️ Getting Started

Clone the repository:

git clone [https://github.com/yourusername/taskflow-landing.git](https://github.com/yourusername/taskflow-landing.git)
cd taskflow-landing


Install dependencies:

npm install
# or
yarn install


Run the development server:

npm run dev


Open http://localhost:3000 with your browser to see the result.

📦 Deployment

This project is optimized for deployment on Vercel.

Push your code to a GitHub repository.

Import the project into Vercel.

