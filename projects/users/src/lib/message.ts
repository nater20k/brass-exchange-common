export interface Thread {
  id?: string;
  messages?: Message[];
  owners: string[];
}

export interface Message {
  body: string;
  sendDate: Date;
  sender: {
    username: string;
  };
  recipient: {
    username: string;
    hasReadMessage: boolean;
  };
  threadId?: string;
}

export interface ThreadMetaData {
  id: string;
  recipient: string;
  messageCount?: number;
}
