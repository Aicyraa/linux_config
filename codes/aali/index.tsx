import React, { useState, useRef, useCallback } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "/components/ui/label";
import { RadioGroup, RadioGroupItem } from "/components/ui/radio-group";

const ResearchAnalyzerApp: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisType, setAnalysisType] = useState('summary');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type === 'text/plain' || file.name.endsWith('.txt')) {
        setSelectedFile(file);
        setError('');
      } else {
        setError('Please upload a PDF or text file');
      }
    }
  };

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || file.type === 'text/plain' || file.name.endsWith('.txt'))) {
      setSelectedFile(file);
      setError('');
    } else {
      setError('Please upload a PDF or text file');
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const extractTextFromFile = async (file: File): Promise<string> => {
    if (file.type === 'text/plain') {
      return await file.text();
    } else if (file.type === 'application/pdf') {
      // For PDF files, we'd normally use a PDF parser library
      // Since we can't use external libraries, we'll simulate text extraction
      return "This is simulated text extraction from a PDF file. In a real implementation, you would use a PDF text extraction library like pdf-parse or pdf.js to get the actual content.";
    }
    return '';
  };

  const analyzeContent = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError('');
    
    try {
      const extractedText = await extractTextFromFile(selectedFile);
      
      if (!extractedText.trim()) {
        throw new Error('No text could be extracted from the file');
      }

      const systemPrompt = getSystemPrompt(analysisType, customPrompt);
      
      const response = await fetch('https://oi-server.onrender.com/chat/completions', {
        method: 'POST',
        headers: {
          'CustomerId': '',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xxx'
        },
        body: JSON.stringify({
          model: 'openrouter/claude-sonnet-4',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: [
                { type: 'text', text: `Please analyze the following research content:\n\n${extractedText.substring(0, 10000)}` }
              ]
            }
          ],
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      const data = await response.json();
      setAnalysisResult(data.choices[0].message.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSystemPrompt = (type: string, custom: string): string => {
    if (custom.trim()) return custom;

    const prompts = {
      summary: 'You are an expert research analyst. Provide a comprehensive summary of the research paper, highlighting the main objectives, methodology, key findings, and conclusions. Structure your response with clear headings and bullet points for readability.',
      keypoints: 'You are a research analyst. Extract and list the most important key points, findings, and insights from the research paper. Present them in a clear, organized manner with bullet points.',
      methodology: 'You are a research methodology expert. Analyze and describe the research methodology used in the paper, including study design, data collection methods, analysis techniques, and any limitations. Evaluate the robustness of the methodology.',
      implications: 'You are a research implications specialist. Discuss the practical implications, applications, and potential impact of the research findings. Consider both theoretical and practical significance.'
    };

    return prompts[type as keyof typeof prompts] || prompts.summary;
  };

  const resetAnalysis = () => {
    setSelectedFile(null);
    setAnalysisResult('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">AI Research Paper Analyzer</CardTitle>
            <CardDescription className="text-muted-foreground">
              Upload research papers, documentation, or publications for AI-powered analysis and summarization
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* File Upload Section */}
            <div className="space-y-4">
              <Label htmlFor="file-upload" className="text-foreground">Upload Research Document</Label>
              <div
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Document upload icon with paper sheet and arrow pointing upward&id=19a6551f-012b-45e3-aaf0-adb2f59f84d2" 
                    alt="Document upload icon" 
                    className="mx-auto h-16 w-16 opacity-70"
                  />
                  <p className="text-muted-foreground">
                    {selectedFile ? selectedFile.name : 'Drag and drop your PDF or text file here, or click to browse'}
                  </p>
                  <p className="text-sm text-muted-foreground">Supported formats: PDF, TXT</p>
                </div>
                <input
                 