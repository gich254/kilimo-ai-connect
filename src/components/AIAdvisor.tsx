
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
      content: 'Hello! I\'m your AI farming assistant. Ask me anything about crops, pests, soil, or weather.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    'How to control aphids on tomatoes?',
    'Best time to plant maize in Kenya?',
    'Signs of nitrogen deficiency?',
    'Irrigation schedule for vegetables?'
  ];

  const aiResponses = {
    'aphids': 'For aphid control on tomatoes: 1) Use neem oil spray 2) Introduce ladybugs 3) Plant marigolds nearby 4) Remove affected leaves. Apply treatments early morning or evening.',
    'maize': 'Best time to plant maize in Kenya: March-May (long rains) and October-December (short rains). Ensure soil temperature is above 12°C and good drainage.',
    'nitrogen': 'Nitrogen deficiency signs: yellowing of older leaves, stunted growth, pale green color. Apply organic compost or nitrogen fertilizer. Test soil pH (should be 6.0-7.0).',
    'irrigation': 'Vegetable irrigation schedule: Morning (6-8 AM) or evening (6-8 PM). Deep watering 2-3 times per week. Check soil moisture 2 inches down.',
    'default': 'Based on your question, I recommend checking soil moisture levels, monitoring for pests, and ensuring proper nutrition. For specific advice, please provide more details about your crop and conditions.'
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
      let response = aiResponses.default;
      
      if (question.toLowerCase().includes('aphid')) response = aiResponses.aphids;
      else if (question.toLowerCase().includes('maize')) response = aiResponses.maize;
      else if (question.toLowerCase().includes('nitrogen')) response = aiResponses.nitrogen;
      else if (question.toLowerCase().includes('irrigation')) response = aiResponses.irrigation;

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
                  <span className="text-sm text-gray-500">AI is thinking...</span>
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
            placeholder="Ask your farming question..."
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
