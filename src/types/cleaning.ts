export interface CleaningTask {
  category: string;
  tasks: string[];
  notes: string;
}

export interface CleaningChecklistData {
  // Room types
  bathrooms?: CleaningTask[];
  bedrooms?: CleaningTask[];
  kitchens?: CleaningTask[];
  livingRooms?: CleaningTask[];
  diningRooms?: CleaningTask[];
  offices?: CleaningTask[];
  outdoorAreas?: CleaningTask[];
  // Notes
  general_notes: string;
  // Allow for other room types
  [key: string]: CleaningTask[] | string | undefined;
}

export interface CleaningChecklist {
  cleaning_checklist: CleaningChecklistData;
}
