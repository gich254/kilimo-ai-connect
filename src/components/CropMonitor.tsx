
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Calendar,
  Ruler
} from 'lucide-react';

export const CropMonitor = () => {
  const [crops] = useState([
    {
      name: 'Maize',
      stage: 'Flowering',
      health: 85,
      growth: 75,
      daysToHarvest: 45,
      height: 165,
      status: 'healthy'
    },
    {
      name: 'Tomatoes',
      stage: 'Fruiting',
      health: 72,
      growth: 60,
      daysToHarvest: 30,
      height: 95,
      status: 'warning'
    },
    {
      name: 'Sukuma Wiki',
      stage: 'Mature',
      health: 90,
      growth: 95,
      daysToHarvest: 7,
      height: 25,
      status: 'healthy'
    }
  ]);

  const [selectedCrop, setSelectedCrop] = useState(0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  const crop = crops[selectedCrop];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Leaf className="w-5 h-5 mr-2 text-green-600" />
          Crop Monitoring
        </CardTitle>
        <CardDescription>Track your crop health and growth</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex space-x-2">
          {crops.map((c, index) => (
            <Button
              key={index}
              variant={selectedCrop === index ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCrop(index)}
            >
              {c.name}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{crop.name}</h3>
            <Badge className={getStatusColor(crop.status)}>
              {getStatusIcon(crop.status)}
              <span className="ml-1 capitalize">{crop.status}</span>
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Health Score</span>
              </div>
              <Progress value={crop.health} className="h-2 mb-1" />
              <p className="text-xs text-gray-600">{crop.health}%</p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Growth</span>
              </div>
              <Progress value={crop.growth} className="h-2 mb-1" />
              <p className="text-xs text-gray-600">{crop.growth}%</p>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Harvest</span>
              </div>
              <p className="text-lg font-semibold text-purple-800">{crop.daysToHarvest} days</p>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Ruler className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Height</span>
              </div>
              <p className="text-lg font-semibold text-orange-800">{crop.height} cm</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Current Stage: {crop.stage}</h4>
            <p className="text-sm text-gray-600">
              {crop.name === 'Maize' && 'Your maize is in the flowering stage. Ensure adequate water supply and monitor for pests.'}
              {crop.name === 'Tomatoes' && 'Tomatoes are fruiting. Watch for blight and ensure proper support structures.'}
              {crop.name === 'Sukuma Wiki' && 'Ready for harvest! Pick outer leaves regularly to encourage continued growth.'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
