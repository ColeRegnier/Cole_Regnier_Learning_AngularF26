export interface ContentEvent {
  name: string;
  action: 'accept-independence' | 'deny-independence' | 'select';
}
