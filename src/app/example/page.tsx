"use client";

import { useState, useRef } from "react";
import { createUploadthingAudioFromBlob, useUploadThing } from "@/utils/uploadthing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Square, Play } from "lucide-react";
import { google } from "@ai-sdk/google"
import { getTranscript, generateCleaningChecklist } from '@/lib/actions/speechToText';
import type { CleaningChecklist } from '@/types/cleaning';

export default function Home() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [rawTranscript, setRawTranscript] = useState('');
  const [cleaningData, setCleaningData] = useState<CleaningChecklist | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  
  // Move the hook to the component level
  const { startUpload, isUploading } = useUploadThing("audioUploader");

  const getFullTranscript = async () => {
    if (!audioBlob) return;
    
    // Use the new function that accepts a Blob directly
    const file = await createUploadthingAudioFromBlob(audioBlob);
    console.log(file);
    
    // Use startUpload from the hook that was called at the component level
    console.log(isUploading);
    const result = await startUpload([file]);
    console.log(result);

    // Create FormData to pass to server action
    const formData = new FormData();
    formData.append('file', file);
    
    // Get transcript from server action
    const fullTranscript = await getTranscript(formData);

    // Set the raw transcript
    setRawTranscript(fullTranscript);
    
    // Generate cleaning checklist from transcript
    const cleaningChecklist = await generateCleaningChecklist(fullTranscript);

    console.log(cleaningChecklist, "cleaning-checklist");
    
    try {
      // Parse the JSON response
      const parsedChecklist = JSON.parse(cleaningChecklist) as CleaningChecklist;
      console.log('Parsed checklist:', parsedChecklist);
      
      // Validate the structure before setting the state
      if (!parsedChecklist.cleaning_checklist) {
        throw new Error('Missing cleaning_checklist property in response');
      }
      
      setCleaningData(parsedChecklist);
    } catch (error) {
      console.error('Failed to parse cleaning checklist:', error);
      // Set a default fallback structure
      setCleaningData({
        cleaning_checklist: {
          bathrooms: [],
          bedrooms: [],
          general_notes: "Could not generate a structured checklist. Please try again."
        }
      });
    }
  };    

  const startRecording = async () => {
    chunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Error accessing microphone. Please ensure you have granted permission.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Audio Recorder</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Button 
              onClick={startRecording} 
              disabled={recording}
              variant="default"
              size="lg"
              className="w-32"
            >
              <Mic className="mr-2 h-4 w-4" /> Record
            </Button>
            <Button 
              onClick={stopRecording} 
              disabled={!recording}
              variant="destructive"
              size="lg"
              className="w-32"
            >
              <Square className="mr-2 h-4 w-4" /> Stop
            </Button>
          </div>
          
          {audioBlob && (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3">
                <audio 
                  className="w-full" 
                  controls
                  src={URL.createObjectURL(audioBlob)}
                >
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English"
                    default
                  />
                  Your browser does not support the audio element.
                </audio>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  Recording saved - ready for transcript
                </p>
              </div>
              <Button 
                onClick={getFullTranscript} 
                disabled={isUploading}
                variant="outline"
                className="w-full"
              >
                <Play className="mr-2 h-4 w-4" />
                {isUploading ? "Processing..." : "Get Transcript"}
              </Button>
            </div>
          )}
          {rawTranscript && (
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 mb-4">
              <h3 className="text-md font-semibold mb-2">Transcript</h3>
              <p className="text-sm text-gray-600">{rawTranscript}</p>
            </div>
          )}
          
          {cleaningData && (
            <div className="w-full rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="text-lg font-semibold mb-4">Cleaning Checklist</h3>
              
              {cleaningData.cleaning_checklist.general_notes && (
                <div className="mb-4 p-3 bg-amber-50 rounded-md border border-amber-200">
                  <h4 className="font-medium text-amber-800 mb-1">General Notes</h4>
                  <p className="text-sm text-amber-700">{cleaningData.cleaning_checklist.general_notes}</p>
                </div>
              )}
              
              <div className="space-y-6">
                {Object.entries(cleaningData.cleaning_checklist).map(([roomType, rooms]) => {
                  // Skip general_notes as it's already displayed
                  if (roomType === 'general_notes') return null;
                  
                  // Ensure rooms is an array before mapping
                  if (!Array.isArray(rooms)) return null;
                  
                  // Skip empty room arrays
                  if (rooms.length === 0) return null;
                  
                  return (
                    <div key={roomType} className="space-y-4">
                      <h4 className="text-md font-semibold capitalize">{roomType.replace('_', ' ')}</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {rooms.map((room, index) => {
                          // Skip rooms without required properties
                          if (!room || !room.category || !Array.isArray(room.tasks)) {
                            console.warn('Invalid room data:', room);
                            return null;
                          }
                          
                          return (
                            <div key={`${roomType}-${index}-${Math.random().toString(36).substring(2, 7)}`} 
                                 className="border rounded-md p-3 bg-gray-50">
                              <h5 className="font-medium text-sm mb-2">{room.category}</h5>
                              
                              <ul className="list-disc pl-5 mb-3 space-y-1">
                                {room.tasks.map((task, taskIndex) => (
                                  <li key={`task-${taskIndex}-${Math.random().toString(36).substring(2, 7)}`} 
                                      className="text-sm">{task}</li>
                                ))}
                              </ul>
                              
                              {room.notes && (
                                <div className="text-xs text-gray-600 italic border-t pt-2">
                                  <span className="font-medium">Note:</span> {room.notes}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                
                {/* Show a message if no rooms were found */}
                {Object.entries(cleaningData.cleaning_checklist)
                  .filter(([key, value]) => key !== 'general_notes' && Array.isArray(value) && value.length > 0)
                  .length === 0 && (
                    <div className="p-4 bg-gray-50 rounded-md text-center">
                      <p className="text-gray-500">No specific rooms were identified in the transcript.</p>
                    </div>
                  )
                }
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
