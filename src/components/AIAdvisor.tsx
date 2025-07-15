
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Send, 
  Lightbulb,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const AIAdvisor = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Hello! I\'m your AI farming assistant. Ask me anything about crops, pests, soil, weather, fertilizers, irrigation, or any farming challenges you\'re facing.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    'How to control aphids on tomatoes?',
    'Best time to plant maize in Kenya?',
    'Signs of nitrogen deficiency?',
    'Irrigation schedule for vegetables?',
    'How to improve soil fertility?',
    'Organic pest control methods?'
  ];

  // Comprehensive farming knowledge base
  const getAIResponse = (question: string): string => {
    const q = question.toLowerCase();
    
    // Pest control responses
    if (q.includes('aphid') || q.includes('greenfly')) {
      return 'For aphid control: 1) Use neem oil spray (mix 2 tablespoons per liter of water) 2) Introduce beneficial insects like ladybugs 3) Plant companion crops like marigolds and nasturtiums 4) Remove affected leaves early 5) Use insecticidal soap spray 6) Apply treatments in early morning or evening to avoid harming beneficial insects.';
    }
    
    if (q.includes('pest') && (q.includes('control') || q.includes('management'))) {
      return 'Integrated Pest Management (IPM) approach: 1) Regular monitoring and early detection 2) Use resistant crop varieties 3) Crop rotation to break pest cycles 4) Biological control with beneficial insects 5) Organic sprays like neem oil 6) Physical barriers like row covers 7) Proper sanitation and field hygiene 8) Chemical pesticides only as last resort.';
    }

    // Crop planting and timing
    if (q.includes('maize') && (q.includes('plant') || q.includes('time'))) {
      return 'Best time to plant maize in Kenya: Long rains season (March-May) and short rains season (October-December). Plant when soil temperature is above 12°C and soil moisture is adequate. Ensure good drainage to prevent waterlogging. Plant at the beginning of rains for optimal growth.';
    }

    if (q.includes('tomato') && (q.includes('plant') || q.includes('grow'))) {
      return 'Tomato growing tips: 1) Plant during cool dry season or under protection 2) Use well-draining, fertile soil with pH 6.0-6.8 3) Space plants 60cm apart 4) Provide support stakes or cages 5) Water consistently but avoid wetting leaves 6) Apply balanced fertilizer regularly 7) Prune suckers for better fruit production.';
    }

    // Nutrient deficiencies
    if (q.includes('nitrogen') && q.includes('deficiency')) {
      return 'Nitrogen deficiency signs: 1) Older leaves turn yellow from bottom up 2) Stunted growth and small plants 3) Pale green overall color 4) Reduced fruit/grain production. Treatment: Apply nitrogen fertilizer, compost, or organic manure. Use urea (46-0-0) at 50-100kg/ha or chicken manure at 5-10 tonnes/ha.';
    }

    if (q.includes('phosphorus') || q.includes('phosphorous')) {
      return 'Phosphorus deficiency causes: 1) Purple/reddish leaf discoloration 2) Poor root development 3) Delayed flowering and fruiting 4) Stunted growth. Apply DAP fertilizer (18-46-0) or rock phosphate. Ensure soil pH is 6.0-7.0 for optimal phosphorus availability.';
    }

    if (q.includes('potassium') || q.includes('potash')) {
      return 'Potassium deficiency symptoms: 1) Yellowing and browning of leaf edges 2) Weak stems and poor disease resistance 3) Poor fruit quality and storage. Apply muriate of potash (0-0-60) or wood ash. Potassium is crucial for drought tolerance and disease resistance.';
    }

    // Irrigation and water management
    if (q.includes('irrigation') || q.includes('water')) {
      return 'Irrigation best practices: 1) Water early morning (6-8 AM) or evening (6-8 PM) 2) Deep, infrequent watering is better than frequent shallow watering 3) Check soil moisture 5cm deep before watering 4) Use drip irrigation or furrow irrigation to conserve water 5) Mulch around plants to retain moisture 6) Adjust frequency based on crop stage and weather.';
    }

    // Soil management
    if (q.includes('soil') && (q.includes('fertility') || q.includes('improve'))) {
      return 'Improving soil fertility: 1) Add organic matter (compost, manure) regularly 2) Practice crop rotation with legumes 3) Use cover crops during off-season 4) Minimize tillage to preserve soil structure 5) Test soil pH and adjust if needed 6) Apply balanced fertilizers based on soil test results 7) Control erosion with contour farming or terracing.';
    }

    if (q.includes('ph') || q.includes('acidity') || q.includes('alkaline')) {
      return 'Soil pH management: Most crops prefer pH 6.0-7.0. For acidic soils (pH < 6.0): Apply agricultural lime at 1-3 tonnes/ha. For alkaline soils (pH > 7.5): Add organic matter, sulfur, or acidifying fertilizers. Test soil pH annually and adjust gradually. Proper pH ensures optimal nutrient availability.';
    }

    // Disease management
    if (q.includes('disease') || q.includes('fungus') || q.includes('blight')) {
      return 'Disease prevention and management: 1) Use certified disease-free seeds 2) Practice crop rotation (3-4 year cycle) 3) Ensure proper plant spacing for air circulation 4) Avoid overhead watering to reduce leaf wetness 5) Remove and destroy infected plant material 6) Apply preventive fungicides during humid conditions 7) Use resistant varieties when available.';
    }

    // Fertilizer application
    if (q.includes('fertilizer') || q.includes('fertiliser')) {
      return 'Fertilizer application guidelines: 1) Conduct soil test first 2) Apply basal fertilizer at planting (DAP or NPK) 3) Top-dress with nitrogen fertilizer at key growth stages 4) For maize: Apply 125kg DAP + 125kg Urea per hectare 5) For vegetables: Use balanced NPK (17-17-17) at 200-300kg/ha 6) Split nitrogen applications to reduce losses 7) Incorporate organic fertilizers for long-term soil health.';
    }

    // Organic farming
    if (q.includes('organic') || q.includes('natural')) {
      return 'Organic farming practices: 1) Use compost and well-rotted manure 2) Practice companion planting 3) Use beneficial insects for pest control 4) Apply organic sprays (neem, soap, botanical extracts) 5) Maintain soil health with cover crops 6) Use physical pest barriers 7) Implement proper crop rotation 8) Focus on prevention rather than treatment.';
    }

    // Market and economics
    if (q.includes('market') || q.includes('price') || q.includes('sell')) {
      return 'Marketing tips for farmers: 1) Know market prices before harvesting 2) Form farmer groups for bulk marketing 3) Consider value addition (processing, packaging) 4) Develop relationships with buyers 5) Time your harvest for better prices 6) Maintain quality standards 7) Keep records of costs and profits 8) Diversify your crops to spread risk.';
    }

    // Climate and weather
    if (q.includes('weather') || q.includes('climate') || q.includes('drought')) {
      return 'Weather-smart farming: 1) Use weather forecasts for planning 2) Plant drought-tolerant varieties during dry spells 3) Harvest rainwater for irrigation 4) Use mulching to conserve soil moisture 5) Adjust planting dates based on seasonal patterns 6) Have contingency plans for extreme weather 7) Consider climate-adapted crops for your region.';
    }

    // Crop storage
    if (q.includes('storage') || q.includes('store') || q.includes('preserve')) {
      return 'Proper crop storage: 1) Harvest at right maturity and moisture content 2) Dry crops to safe moisture levels (13-14% for grains) 3) Use clean, dry storage containers 4) Apply storage pesticides if needed 5) Monitor regularly for pests and moisture 6) Use hermetic storage for longer periods 7) Practice first-in-first-out inventory management.';
    }

    // Seeds and varieties
    if (q.includes('seed') || q.includes('variety') || q.includes('cultivar')) {
      return 'Seed selection and management: 1) Use certified seeds from reputable sources 2) Choose varieties suited to your climate and soil 3) Consider disease-resistant varieties 4) Store seeds properly in cool, dry conditions 5) Test germination before planting 6) Save seeds from healthy, productive plants 7) Rotate varieties to prevent pest buildup.';
    }

    // General farming advice
    return 'Here are some general farming principles: 1) Plan your farming activities based on seasonal calendar 2) Keep detailed farm records for better decision making 3) Diversify crops to reduce risk 4) Invest in soil health for long-term productivity 5) Learn continuously through extension services and farmer groups 6) Practice sustainable farming for environmental protection 7) Consider your local market demands when choosing crops. For specific advice, please provide more details about your crop, location, and farming conditions.';
  };

  const handleSend = () => {
    if (!question.trim()) return;

    const userMessage = {
      type: 'user',
      content: question,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(question);
      
      const aiMessage = {
        type: 'ai',
        content: response,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);

    setQuestion('');
  };

  const handleQuickQuestion = (q: string) => {
    setQuestion(q);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-600" />
          AI Crop Advisor
        </CardTitle>
        <CardDescription>Get expert farming advice powered by AI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-64 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-lg">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white border shadow-sm'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border shadow-sm p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                  <span className="text-sm text-gray-500">AI is analyzing your question...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Quick Questions</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((q, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleQuickQuestion(q)}
              >
                {q}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask any farming question..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} disabled={!question.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
