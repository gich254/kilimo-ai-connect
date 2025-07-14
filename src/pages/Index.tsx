
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Brain, 
  Smartphone, 
  CloudRain, 
  Bug, 
  TrendingUp, 
  Users, 
  Target,
  CheckCircle,
  AlertCircle,
  Thermometer,
  Droplets,
  DollarSign
} from 'lucide-react';
import { WeatherSimulator } from '@/components/WeatherSimulator';
import { CropMonitor } from '@/components/CropMonitor';
import { AIAdvisor } from '@/components/AIAdvisor';
import { PestDetection } from '@/components/PestDetection';
import { MarketPrices } from '@/components/MarketPrices';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Platform",
      description: "Optimized for low-bandwidth environments across Kenya"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Advisory",
      description: "Claude AI and GPT-4 integration for smart farming guidance"
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: "Weather & Soil Monitoring",
      description: "Real-time IoT sensors for weather, soil moisture, and pH"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Disease & Pest Detection",
      description: "Image-based analysis for early detection and prevention"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Intelligence",
      description: "Daily agricultural tips and real-time market prices"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Crop Optimization",
      description: "Supports maize, tomatoes, sukuma, and other Kenyan crops"
    }
  ];

  const objectives = [
    "Build a mobile/web platform for crop monitoring and tracking",
    "Implement AI-powered crop advisory using Claude AI or GPT",
    "Integrate IoT or simulated sensors for weather, soil moisture, and pH",
    "Allow image-based disease and pest detection",
    "Provide daily agricultural tips and market price data"
  ];

  const techStack = [
    { category: "Frontend", tech: "React & Flutter", progress: 90 },
    { category: "Backend", tech: "Node.js + Express", progress: 85 },
    { category: "Database", tech: "Firebase & PostgreSQL", progress: 80 },
    { category: "AI Integration", tech: "Claude AI & GPT-4", progress: 95 },
    { category: "IoT Sensors", tech: "Arduino Kit (Optional)", progress: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Smart Farm Assistant</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Agriculture Project Proposal
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Smart Farm Assistant (SFA)
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            An intelligent farming assistant system that helps smallholder farmers monitor their crops 
            and receive tailored guidance through AI-powered advisory services and real-time IoT data.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-2" />
              For Farmers
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Target className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="demo">Live Demo</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Problem Statement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Many farmers in Kenya and across Africa face low yields due to lack of access to timely 
                  agricultural information and expert advice. Pests, soil degradation, and unpredictable 
                  weather further exacerbate the problem, leading to significant crop losses and reduced 
                  farm productivity.
                </p>
              </CardContent>
            </Card>

            {/* Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Project Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Scope */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-green-600" />
                  Project Scope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Crop Support</h4>
                    <p className="text-sm text-gray-600">Maize, tomatoes, sukuma, and other common Kenyan crops</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Platform Focus</h4>
                    <p className="text-sm text-gray-600">Mobile-first design for low-bandwidth environments</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Data Source</h4>
                    <p className="text-sm text-gray-600">Simulated sensor data for MVP, real IoT integration ready</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <div className="p-2 bg-green-100 rounded-lg mr-3">
                        {feature.icon}
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                <p className="text-gray-600 mb-8">
                  Experience the Smart Farm Assistant features with our interactive demonstration
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <WeatherSimulator />
                <CropMonitor />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <AIAdvisor />
                <PestDetection />
              </div>
              
              <MarketPrices />
            </div>
          </TabsContent>

          <TabsContent value="methodology">
            <Card>
              <CardHeader>
                <CardTitle>Development Methodology</CardTitle>
                <CardDescription>Our approach to building the Smart Farm Assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Phase 1: Research & Planning</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Requirement gathering from local farmers</li>
                        <li>• Market analysis and competitor research</li>
                        <li>• Technical feasibility assessment</li>
                        <li>• User persona development</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Phase 2: Development</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Agile development approach</li>
                        <li>• MVP development with core features</li>
                        <li>• AI integration and testing</li>
                        <li>• User interface optimization</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Phase 3: Integration</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Open-source sensor simulation libraries</li>
                        <li>• Image analysis for pest detection</li>
                        <li>• Claude/GPT API integration</li>
                        <li>• Real-time data processing</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Phase 4: Testing & Deployment</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• User acceptance testing</li>
                        <li>• Performance optimization</li>
                        <li>• Deployment to production</li>
                        <li>• Continuous monitoring and updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tech">
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Modern, scalable technologies for optimal performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {techStack.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-sm text-gray-600">{item.tech}</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Expected Results</CardTitle>
                  <CardDescription>Anticipated outcomes and impact metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-green-600">Direct Benefits</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Functional app improving farmer decision-making</li>
                        <li>• 15-30% yield improvement via timely alerts</li>
                        <li>• Reduced crop losses from pests and diseases</li>
                        <li>• Better resource utilization and cost savings</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-blue-600">Long-term Impact</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Deployable MVP with clear use cases</li>
                        <li>• Scalable platform for multiple crop types</li>
                        <li>• Data-driven insights for agricultural research</li>
                        <li>• Foundation for AI-powered farming revolution</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-600">25%</CardTitle>
                    <CardDescription>Expected Yield Increase</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-blue-600">10K+</CardTitle>
                    <CardDescription>Target Farmers (Year 1)</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-purple-600">40%</CardTitle>
                    <CardDescription>Reduced Crop Losses</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-6 h-6" />
            <span className="text-xl font-bold">Smart Farm Assistant</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering farmers with intelligent technology for sustainable agriculture
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="border-green-400 text-green-400">
              Kenya Agriculture Project
            </Badge>
            <Badge variant="outline" className="border-blue-400 text-blue-400">
              AI-Powered Solution
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
