
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CloudRain, 
  Sun, 
  Cloud, 
  Thermometer, 
  Droplets, 
  Wind,
  Activity
} from 'lucide-react';

export const WeatherSimulator = () => {
  const [weather, setWeather] = useState({
    temperature: 24,
    humidity: 65,
    soilMoisture: 45,
    pH: 6.5,
    windSpeed: 12,
    condition: 'sunny'
  });

  const [isSimulating, setIsSimulating] = useState(false);

  const weatherConditions = {
    sunny: { icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    cloudy: { icon: Cloud, color: 'text-gray-500', bg: 'bg-gray-50' },
    rainy: { icon: CloudRain, color: 'text-blue-500', bg: 'bg-blue-50' }
  };

  const simulateWeather = () => {
    setIsSimulating(true);
    const conditions = ['sunny', 'cloudy', 'rainy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    
    setTimeout(() => {
      setWeather({
        temperature: Math.round(18 + Math.random() * 15),
        humidity: Math.round(40 + Math.random() * 40),
        soilMoisture: Math.round(30 + Math.random() * 40),
        pH: Math.round((5.5 + Math.random() * 2) * 10) / 10,
        windSpeed: Math.round(5 + Math.random() * 20),
        condition: randomCondition
      });
      setIsSimulating(false);
    }, 1500);
  };

  const WeatherIcon = weatherConditions[weather.condition as keyof typeof weatherConditions].icon;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Weather & Soil Monitor
        </CardTitle>
        <CardDescription>Real-time IoT sensor simulation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className={`p-4 rounded-lg ${weatherConditions[weather.condition as keyof typeof weatherConditions].bg}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <WeatherIcon className={`w-8 h-8 ${weatherConditions[weather.condition as keyof typeof weatherConditions].color}`} />
              <div>
                <p className="font-semibold text-lg">{weather.temperature}°C</p>
                <p className="text-sm text-gray-600 capitalize">{weather.condition}</p>
              </div>
            </div>
            <Button 
              onClick={simulateWeather} 
              disabled={isSimulating}
              size="sm"
            >
              {isSimulating ? 'Updating...' : 'Simulate'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Humidity</span>
            </div>
            <Progress value={weather.humidity} className="h-2" />
            <p className="text-xs text-gray-600">{weather.humidity}%</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Wind Speed</span>
            </div>
            <Progress value={weather.windSpeed * 5} className="h-2" />
            <p className="text-xs text-gray-600">{weather.windSpeed} km/h</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Soil Moisture</span>
            </div>
            <Progress value={weather.soilMoisture} className="h-2" />
            <p className="text-xs text-gray-600">{weather.soilMoisture}%</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium">Soil pH</span>
            </div>
            <Progress value={(weather.pH - 5.5) * 40} className="h-2" />
            <p className="text-xs text-gray-600">{weather.pH}</p>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Recommendation:</strong> {
              weather.soilMoisture < 35 ? 'Irrigation needed' :
              weather.soilMoisture > 70 ? 'Reduce watering' :
              'Optimal soil conditions'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
