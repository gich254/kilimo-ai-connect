
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Bug, 
  AlertTriangle,
  CheckCircle,
  Eye
} from 'lucide-react';

export const PestDetection = () => {
  const [detectionResult, setDetectionResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const pestData = {
    'aphids': {
      name: 'Aphids',
      severity: 'medium',
      confidence: 87,
      description: 'Small, soft-bodied insects that feed on plant sap',
      treatment: 'Use neem oil spray or introduce ladybugs',
      prevention: 'Regular monitoring and proper plant spacing'
    },
    'caterpillars': {
      name: 'Caterpillars',
      severity: 'high',
      confidence: 92,
      description: 'Larvae that can cause significant leaf damage',
      treatment: 'Hand picking or use of Bt (Bacillus thuringiensis)',
      prevention: 'Row covers and companion planting'
    },
    'healthy': {
      name: 'Healthy Plant',
      severity: 'none',
      confidence: 95,
      description: 'No pests or diseases detected',
      treatment: 'Continue current care routine',
      prevention: 'Maintain good plant hygiene'
    }
  };

  const simulateDetection = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const pestTypes = Object.keys(pestData);
      const randomPest = pestTypes[Math.floor(Math.random() * pestTypes.length)];
      setDetectionResult(pestData[randomPest as keyof typeof pestData]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      case 'none': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Bug className="w-4 h-4" />;
      case 'low': return <Eye className="w-4 h-4" />;
      case 'none': return <CheckCircle className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Camera className="w-5 h-5 mr-2 text-orange-600" />
          Pest Detection
        </CardTitle>
        <CardDescription>AI-powered image analysis for pest identification</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              {isAnalyzing ? (
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              ) : (
                <Camera className="w-12 h-12 text-gray-400" />
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                {isAnalyzing ? 'Analyzing image...' : 'Upload or capture plant image'}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {isAnalyzing ? 'AI is detecting pests and diseases' : 'Support JPG, PNG files up to 10MB'}
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={simulateDetection} 
                disabled={isAnalyzing}
                variant="outline"
              >
                <Camera className="w-4 h-4 mr-2" />
                Camera
              </Button>
              <Button 
                onClick={simulateDetection} 
                disabled={isAnalyzing}
                variant="outline"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>
        </div>

        {detectionResult && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{detectionResult.name}</h3>
              <Badge className={getSeverityColor(detectionResult.severity)}>
                {getSeverityIcon(detectionResult.severity)}
                <span className="ml-1 capitalize">{detectionResult.severity || 'Healthy'}</span>
              </Badge>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Confidence</span>
                <span className="text-sm font-bold">{detectionResult.confidence}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${detectionResult.confidence}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-1">Description</h4>
                <p className="text-sm text-gray-600">{detectionResult.description}</p>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Treatment</h4>
                <p className="text-sm text-gray-600">{detectionResult.treatment}</p>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Prevention</h4>
                <p className="text-sm text-gray-600">{detectionResult.prevention}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Take photos in good lighting conditions for better accuracy. Focus on affected areas of the plant.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
