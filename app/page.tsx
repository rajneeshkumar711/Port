"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Code,
  Database,
  Server,
  Smartphone,
  Award,
  Users,
  Coffee,
  Zap,
  Heart,
  Eye,
  MessageCircle,
  CheckCircle,
  Globe,
  Briefcase,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "testimonials", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    Frontend: {
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "TailwindCSS", level: 92 },
        { name: "JavaScript", level: 94 },
        { name: "HTML5/CSS3", level: 96 },
      ],
    },
    Backend: {
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "NestJS", level: 85 },
        { name: "Python", level: 82 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 92 },
      ],
    },
    Database: {
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 83 },
        { name: "Redis", level: 80 },
        { name: "Firebase", level: 78 },
        { name: "Prisma", level: 82 },
      ],
    },
    Tools: {
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "Git/GitHub", level: 94 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 82 },
        { name: "Vercel", level: 90 },
        { name: "Jest", level: 88 },
        { name: "Webpack", level: 80 },
      ],
    },
  }

  const projects = [
    {
      name: "EcoCommerce Platform",
      description:
        "A sustainable e-commerce platform built with Next.js and Stripe, featuring AI-powered product recommendations, carbon footprint tracking, and a comprehensive admin dashboard. Serves over 50,000 active users monthly.",
      techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB", "TailwindCSS", "OpenAI"],
      liveDemo: "https://ecocommerce-demo.vercel.app",
      github: "https://github.com/johndeveloper/ecocommerce",
      image: "/placeholder.svg?height=300&width=500",
      stats: { users: "50K+", performance: "98%", uptime: "99.9%" },
      featured: true,
    },
    {
      name: "TaskFlow Pro",
      description:
        "Advanced project management tool with real-time collaboration, Kanban boards, time tracking, and team analytics. Built with React and Socket.io for seamless real-time updates across distributed teams.",
      techStack: ["React.js", "Socket.io", "Express.js", "PostgreSQL", "Redis", "Chart.js"],
      liveDemo: "https://taskflow-pro.netlify.app",
      github: "https://github.com/johndeveloper/taskflow",
      image: "/placeholder.svg?height=300&width=500",
      stats: { teams: "200+", tasks: "10K+", satisfaction: "4.8/5" },
      featured: true,
    },
  
    {
      name: "AI Content Generator",
      description:
        "SaaS platform for AI-powered content creation with multiple templates, SEO optimization, and team collaboration features. Integrated with OpenAI GPT-4 and custom fine-tuned models.",
      techStack: ["Next.js", "OpenAI", "Prisma", "Stripe", "Vercel", "TailwindCSS"],
      liveDemo: "https://ai-content-gen.com",
      github: "https://github.com/johndeveloper/ai-content",
      image: "/placeholder.svg?height=300&width=500",
      stats: { content: "100K+", users: "5K+", revenue: "$50K+" },
      featured: false,
    },
    {
      name: "Social Media API",
      description:
        "Scalable RESTful API powering a social media platform with user management, real-time messaging, content moderation, and advanced analytics. Handles 1M+ requests daily.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS", "Docker"],
      liveDemo: "https://social-api-docs.com",
      github: "https://github.com/johndeveloper/social-api",
      image: "/placeholder.svg?height=300&width=500",
      stats: { requests: "1M+", endpoints: "50+", uptime: "99.8%" },
      featured: false,
    },
    {
      name: "Blockchain Voting System",
      description:
        "Secure, transparent voting platform built on Ethereum blockchain with smart contracts, ensuring tamper-proof elections and real-time result tracking.",
      techStack: ["React.js", "Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
      liveDemo: "https://blockchain-voting.eth",
      github: "https://github.com/johndeveloper/blockchain-voting",
      image: "/placeholder.svg?height=300&width=500",
      stats: { votes: "25K+", security: "100%", transparency: "Full" },
      featured: false,
    },
  ]

  const experiences = [
    {
      company: "Vortex Bizlink Pvt. Ltd.",
      role: "Full-stack Developer",
      period: "Feb 2021 - Present",
      type: "Full-time",
      responsibilities: [
        "I’ve led full stack development of scalable web and mobile apps using React, React Native, Node.js, NestJS, and cloud platforms like AWS/Azure. I rebuilt a laggy system with real-time WebSocket features, mobile-first design, and clean APIs—boosting performance and reliability. I also set up CI/CD pipelines, mentored juniors, and ensured smooth delivery, earning strong client trust and long-term collaboration."
      ],
      achievements: [
       "Skills: React.js · Node.js · NestJS · DevOps · Amazon Web Services (AWS)"
      ],
    },
    {
      company: "LAS CONSULTING",
      role: "Full Stack Engineer",
      period: "Aug 2016 - Jan 2021",
      type: "Hybrid",
      responsibilities: [
      "I started as an intern, gaining hands-on experience with clean coding, business logic, and team collaboration. I soon transitioned into a full-time role, spending three years working on internal apps using Angular, .NET Core, and SQL Server. I contributed across the full stack — building REST APIs, frontend logic, and backend services — while actively participating in agile workflows. Over time, I took ownership of key features, improved code quality, and supported smooth releases. This phase laid a solid foundation for my full stack and leadership roles today."
      ],
      achievements: [
        
      ],
    },
    
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Full Stack Engineer",
      company: "LAS CONSULTING",
      feedback:
        "John is an exceptional developer and leader. His technical expertise combined with strong communication skills makes him invaluable to any team. He consistently delivers high-quality solutions and mentors others effectively.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      relationship: "Direct Manager",
    },
    {
      name: "Michael Rodriguez",
      position: "Product Manager",
      company: "InnovateTech",
      feedback:
        "Working with John was a game-changer for our startup. His ability to translate complex requirements into elegant solutions while maintaining code quality is remarkable. He's a true full-stack expert.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      relationship: "Colleague",
    },
    {
      name: "Emily Watson",
      position: "Lead Designer",
      company: "Creative Studio",
      feedback:
        "John brings designs to life with incredible attention to detail. His collaborative approach and technical insights often improve the final product beyond our initial vision. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      relationship: "Collaborator",
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable React Applications: Architecture Patterns That Work",
      summary:
        "Explore proven architectural patterns for large-scale React applications, including component composition, state management strategies, and performance optimization techniques used in production.",
      image: "/placeholder.svg?height=200&width=350",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      category: "React",
      views: "2.3K",
      likes: "156",
    },
    {
      title: "Node.js Performance Optimization: From 100ms to 10ms Response Times",
      summary:
        "Deep dive into Node.js performance optimization techniques including clustering, caching strategies, database optimization, and monitoring that reduced our API response times by 90%.",
      image: "/placeholder.svg?height=200&width=350",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      category: "Node.js",
      views: "3.1K",
      likes: "203",
    },
    {
      title: "The Complete Guide to Modern CSS: Grid, Flexbox, and Beyond",
      summary:
        "Master modern CSS techniques including CSS Grid, Flexbox, custom properties, and container queries to create responsive, maintainable layouts without relying on frameworks.",
      image: "/placeholder.svg?height=200&width=350",
      readTime: "6 min read",
      date: "Nov 10, 2024",
      category: "CSS",
      views: "1.8K",
      likes: "124",
    },
  ]

  const stats = [
    { label: "Years Experience", value: "5+", icon: <Calendar className="h-6 w-6" /> },
    { label: "Projects Completed", value: "50+", icon: <CheckCircle className="h-6 w-6" /> },
    { label: "Happy Clients", value: "30+", icon: <Users className="h-6 w-6" /> },
    { label: "Code Commits", value: "2000+", icon: <Code className="h-6 w-6" /> },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
             Rajneesh Kumar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Blog", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
                  )}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-primary/10"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-primary/10"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
              {["Home", "About", "Skills", "Projects", "Experience", "Blog", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-600/20" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Profile Image */}
         

            <div className="mb-6">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
                <Zap className="mr-2 h-4 w-4" />
                Available for new opportunities
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Rajneesh Kumar
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-muted-foreground">
              Senior Full Stack Developer
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with <span className="text-primary font-semibold">5+ years</span>{" "}
              of expertise in modern web technologies. Passionate about building scalable, user-centric applications
              that make a difference.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <User className="mr-2 h-4 w-4" />
                About Me
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Passionate About{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Creating
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I believe in the power of technology to solve real-world problems and create meaningful experiences.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hello! I'm Rajneesh , a passionate Full Stack Developer with over{" "}
                    <span className="text-primary font-semibold">5 years</span> of experience creating digital solutions
                    that make a difference.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I build software that actually solves problems — whether it’s for users, teams, or entire businesses.
I work as a full stack developer, building both web and mobile apps using tools like React, Node.js, .NET, and React Native. I’ve delivered products in fintech, CRM, and intelligence domains — always focusing on clean code, clear UI, and strong backend systems.
From front-end to back-end, cloud to CI/CD, I handle the full journey. I’ve helped launch startup MVPs and improved large enterprise systems — always with speed, scalability, and real impact in mind.


                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're looking for someone who can turn ideas into real, working products — let’s connect.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Open Source</Badge>
                      <Badge variant="secondary">AI/ML</Badge>
                      <Badge variant="secondary">Web3</Badge>
                      <Badge variant="secondary">DevOps</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Photography</Badge>
                      <Badge variant="secondary">Travel</Badge>
                      <Badge variant="secondary">Gaming</Badge>
                      <Badge variant="secondary">Music</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-1">
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
                          RK
                        </div>
                        <p className="text-muted-foreground">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Code className="mr-2 h-4 w-4" />
                Skills & Technologies
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive toolkit built over years of hands-on experience and continuous learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, data]) => (
                <Card key={category} className="hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{data.icon}</div>
                      <CardTitle className="text-2xl">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {data.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Briefcase className="mr-2 h-4 w-4" />
                Featured Work
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Recent{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A showcase of my latest work, demonstrating expertise across the full development stack.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-12 mb-16">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 border-border/50 overflow-hidden"
                  >
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                      <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-3">
                            <Button size="sm" className="bg-white/20 backdrop-blur-md hover:bg-white/30">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-primary">{value}</div>
                                <div className="text-sm text-muted-foreground capitalize">{key}</div>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

            {/* Other Projects Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => !project.featured)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                          <Button size="sm" variant="secondary">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-lg font-bold text-primary">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.techStack.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.techStack.length - 4}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Briefcase className="mr-2 h-4 w-4" />
                Career Journey
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Work{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A timeline of my professional growth and the impact I've made at each organization.
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                        <div className="flex items-center space-x-2 text-lg font-medium">
                          <span>{exp.company}</span>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            {/* <span>{exp.location}</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Heart className="mr-2 h-4 w-4" />
                Testimonials
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                What{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  People Say
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Feedback from colleagues, clients, and collaborators I've had the pleasure to work with.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic leading-relaxed">
                      "{testimonial.feedback}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {testimonial.relationship}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <MessageCircle className="mr-2 h-4 w-4" />
                Latest Articles
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                From The{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Blog</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sharing insights, tutorials, and thoughts on modern web development and technology trends.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{post.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="hover:bg-primary/10 bg-transparent">
                <Globe className="mr-2 h-4 w-4" />
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. Whether you have a question, want
                    to discuss a potential collaboration, or just want to say hi, I'd love to hear from you!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">Rajneesh.developer@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Availability</p>
                      <p className="text-muted-foreground">Open to new opportunities</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary bg-transparent"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary bg-transparent"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary bg-transparent"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>I'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">First Name</label>
                        <Input placeholder="John" className="border-border/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Last Name</label>
                        <Input placeholder="Doe" className="border-border/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input type="email" placeholder="john@example.com" className="border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <Input placeholder="Project Discussion" className="border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="border-border/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
                 Rajneesh Kumar
                </div>
                <p className="text-muted-foreground mb-4">
                  Full Stack Developer passionate about creating exceptional digital experiences.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
                <div className="space-y-2">
                  {["About", "Skills", "Projects", "Experience", "Blog", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Services</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Web Development</p>
                  <p>Mobile Apps</p>
                  <p>API Development</p>
                  <p>Technical Consulting</p>
                  <p>Code Review</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground">
                © 2024 John Developer. Built with 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
