export interface Message {
  messageContent: string;
  dateSent: Date;
  instrumentId?: string;
  hasBeenRead: boolean;
}

export interface Thread {
  id?: string;
  readerIds: string[];
  messages?: Message[];
}
