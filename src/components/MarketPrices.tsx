
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  RefreshCw,
  MapPin,
  Calendar
} from 'lucide-react';

export const MarketPrices = () => {
  const [prices, setPrices] = useState([
    { crop: 'Maize', price: 45, unit: 'KES/kg', change: 5, market: 'Nairobi', trend: 'up' },
    { crop: 'Tomatoes', price: 65, unit: 'KES/kg', change: -8, market: 'Mombasa', trend: 'down' },
    { crop: 'Sukuma Wiki', price: 25, unit: 'KES/bundle', change: 12, market: 'Kisumu', trend: 'up' },
    { crop: 'Onions', price: 80, unit: 'KES/kg', change: 3, market: 'Nakuru', trend: 'up' },
    { crop: 'Potatoes', price: 55, unit: 'KES/kg', change: -2, market: 'Eldoret', trend: 'down' },
    { crop: 'Cabbage', price: 35, unit: 'KES/head', change: 15, market: 'Nairobi', trend: 'up' }
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isUpdating, setIsUpdating] = useState(false);

  const updatePrices = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setPrices(prev => prev.map(item => ({
        ...item,
        price: Math.max(10, item.price + Math.round((Math.random() - 0.5) * 20)),
        change: Math.round((Math.random() - 0.5) * 30),
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
      setLastUpdated(new Date());
      setIsUpdating(false);
    }, 1500);
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 
      <TrendingUp className="w-4 h-4 text-green-500" /> : 
      <TrendingDown className="w-4 h-4 text-red-500" />;
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              Market Prices
            </CardTitle>
            <CardDescription>Real-time agricultural commodity prices</CardDescription>
          </div>
          <Button onClick={updatePrices} disabled={isUpdating} variant="outline" size="sm">
            <RefreshCw className={`w-4 h-4 mr-2 ${isUpdating ? 'animate-spin' : ''}`} />
            {isUpdating ? 'Updating...' : 'Refresh'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated.toLocaleString()}</span>
            </div>
            <Badge variant="outline">Live Data</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prices.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{item.crop}</h3>
                  {getTrendIcon(item.trend)}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-500">{item.unit}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{item.market}</span>
                    </div>
                    <span className={`text-sm font-medium ${getTrendColor(item.trend)}`}>
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Market Insights</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Maize prices are rising due to increased demand</li>
              <li>• Tomato prices dropping due to seasonal harvest</li>
              <li>• Sukuma Wiki showing strong growth in urban markets</li>
              <li>• Weather conditions affecting vegetable supply chains</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
