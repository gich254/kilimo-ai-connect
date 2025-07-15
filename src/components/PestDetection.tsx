
import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Bug, 
  AlertTriangle,
  CheckCircle,
  Eye,
  ImageIcon,
  X
} from 'lucide-react';

export const PestDetection = () => {
  const [detectionResult, setDetectionResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const pestData = {
    'aphids': {
      name: 'Aphids',
      severity: 'medium',
      confidence: 87,
      description: 'Small, soft-bodied insects that feed on plant sap, causing leaf curling and yellowing',
      treatment: 'Use neem oil spray (2 tbsp per liter), introduce ladybugs, or apply insecticidal soap',
      prevention: 'Regular monitoring, proper plant spacing, and companion planting with marigolds'
    },
    'caterpillars': {
      name: 'Caterpillars',
      severity: 'high',
      confidence: 92,
      description: 'Larvae of moths/butterflies that can cause significant leaf and fruit damage',
      treatment: 'Hand picking for small infestations, Bt spray (Bacillus thuringiensis), or neem-based pesticides',
      prevention: 'Row covers during egg-laying season, companion planting, and beneficial insect habitat'
    },
    'whiteflies': {
      name: 'Whiteflies',
      severity: 'medium',
      confidence: 85,
      description: 'Small white flying insects that suck plant juices and transmit viral diseases',
      treatment: 'Yellow sticky traps, neem oil spray, or reflective mulch around plants',
      prevention: 'Remove weeds, avoid over-fertilizing with nitrogen, and use resistant varieties'
    },
    'spider_mites': {
      name: 'Spider Mites',
      severity: 'high',
      confidence: 89,
      description: 'Tiny pests that cause stippling and webbing on leaves, especially in dry conditions',
      treatment: 'Increase humidity, spray with water, use predatory mites, or miticide if severe',
      prevention: 'Adequate irrigation, avoid dusty conditions, and maintain beneficial insect populations'
    },
    'leaf_blight': {
      name: 'Leaf Blight',
      severity: 'high',
      confidence: 91,
      description: 'Fungal disease causing dark spots and yellowing of leaves, can spread rapidly',
      treatment: 'Remove affected leaves, improve air circulation, apply copper-based fungicide',
      prevention: 'Avoid overhead watering, ensure proper spacing, and use disease-resistant varieties'
    },
    'healthy': {
      name: 'Healthy Plant',
      severity: 'none',
      confidence: 95,
      description: 'No pests or diseases detected. Plant appears healthy with good growth',
      treatment: 'Continue current care routine and monitor regularly',
      prevention: 'Maintain good plant hygiene, proper watering, and balanced nutrition'
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setSelectedImage(imageUrl);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setSelectedImage(imageUrl);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setDetectionResult(null);
    
    // Simulate AI analysis
    setTimeout(() => {
      const pestTypes = Object.keys(pestData);
      const randomPest = pestTypes[Math.floor(Math.random() * pestTypes.length)];
      setDetectionResult(pestData[randomPest as keyof typeof pestData]);
      setIsAnalyzing(false);
    }, 3000);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setDetectionResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
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
          Pest & Disease Detection
        </CardTitle>
        <CardDescription>AI-powered image analysis for pest and disease identification</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {selectedImage ? (
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Uploaded plant" 
                  className="max-w-full max-h-48 mx-auto rounded-lg"
                />
                <Button
                  onClick={clearImage}
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              {isAnalyzing && (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
                  <span className="text-sm text-gray-600">Analyzing image for pests and diseases...</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                {isAnalyzing ? (
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                ) : (
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Upload or capture plant image
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Support JPG, PNG files up to 10MB. Focus on affected plant parts for better accuracy.
                </p>
              </div>
            </div>
          )}
          
          <div className="flex justify-center space-x-4 mt-4">
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleCameraCapture}
              className="hidden"
            />
            <Button 
              onClick={() => cameraInputRef.current?.click()}
              disabled={isAnalyzing}
              variant="outline"
            >
              <Camera className="w-4 h-4 mr-2" />
              Camera
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              disabled={isAnalyzing}
              variant="outline"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
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
                <span className="text-sm font-medium">Confidence Level</span>
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
                <h4 className="font-medium text-sm mb-1">Recommended Treatment</h4>
                <p className="text-sm text-gray-600">{detectionResult.treatment}</p>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Prevention Measures</h4>
                <p className="text-sm text-gray-600">{detectionResult.prevention}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Tips for better results:</strong> Take photos in good lighting, focus on affected plant parts, 
            and ensure the image is clear and well-focused. Multiple angles can help improve accuracy.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
