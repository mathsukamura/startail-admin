export interface ChatMessage {
  sender: string;
  message: string;
  timestamp: string;
}

export interface ChatUser {
  id: string;
  profile: string;
  username: string;
  fullName: string;
  title: string;
  messages: ChatMessage[];
}

export const conversations: ChatUser[] = [
  {
    id: 'conv1',
    profile: '/images/user/user-01.jpg',
    username: 'alex_dev',
    fullName: 'Alex John',
    title: 'Senior Backend Dev',
    messages: [
      { sender: 'You', message: 'See you later, Alex!', timestamp: '2024-08-24T11:15:15' },
      { sender: 'Alex', message: 'Alright, talk to you later!', timestamp: '2024-08-24T11:11:30' },
      { sender: 'You', message: 'For sure. Anyway, I should get back to reviewing the project.', timestamp: '2024-08-23T09:26:50' },
      { sender: 'Alex', message: 'Yeah, let me know what you think.', timestamp: '2024-08-23T09:25:15' },
      { sender: 'You', message: "Oh, nice! I've been waiting for that. I'll check it out later.", timestamp: '2024-08-23T09:24:30' },
      { sender: 'Alex', message: "They've added a dark mode option! It looks really sleek.", timestamp: '2024-08-23T09:23:10' },
      { sender: 'You', message: "No, not yet. What's new?", timestamp: '2024-08-23T09:22:00' },
      { sender: 'Alex', message: 'By the way, have you seen the new feature update?', timestamp: '2024-08-23T09:21:05' },
      { sender: 'You', message: 'Will do! Thanks, Alex.', timestamp: '2024-08-23T09:20:10' },
      { sender: 'Alex', message: 'Great! Let me know if you need any help.', timestamp: '2024-08-23T09:19:20' },
      { sender: 'You', message: 'Almost done. Just need to review a few things.', timestamp: '2024-08-23T09:18:45' },
      { sender: 'Alex', message: "I'm good, thanks! Did you finish the project?", timestamp: '2024-08-23T09:17:10' },
      { sender: 'You', message: "Hey Alex, I'm doing well! How about you?", timestamp: '2024-08-23T09:16:30' },
      { sender: 'Alex', message: 'Hey Bob, how are you doing?', timestamp: '2024-08-23T09:15:00' },
    ],
  },
  {
    id: 'conv2',
    profile: '/images/user/user-02.jpg',
    username: 'taylor_grande',
    fullName: 'Taylor Grande',
    title: 'Tech Lead',
    messages: [
      { sender: 'You', message: "Sure, I'll review the document now.", timestamp: '2024-08-24T10:30:00' },
      { sender: 'Taylor', message: 'Can you check the latest pull request?', timestamp: '2024-08-24T10:28:00' },
      { sender: 'You', message: 'Hey Taylor! Ready for the sprint review?', timestamp: '2024-08-24T10:25:00' },
      { sender: 'Taylor', message: 'Hi! Yes, almost done with the slides.', timestamp: '2024-08-24T10:20:00' },
    ],
  },
  {
    id: 'conv3',
    profile: '/images/user/user-03.jpg',
    username: 'john_doe',
    fullName: 'John Doe',
    title: 'QA Engineer',
    messages: [
      { sender: 'You', message: "I'll fix it right away.", timestamp: '2024-08-23T14:10:00' },
      { sender: 'John', message: 'Found a bug in the login flow.', timestamp: '2024-08-23T14:05:00' },
      { sender: 'You', message: 'Hey John, any issues with the build?', timestamp: '2024-08-23T14:00:00' },
    ],
  },
  {
    id: 'conv4',
    profile: '/images/user/user-04.jpg',
    username: 'megan_flux',
    fullName: 'Megan Flux',
    title: 'Jr Developer',
    messages: [
      { sender: 'Megan', message: 'Thanks for the code review feedback!', timestamp: '2024-08-22T16:30:00' },
      { sender: 'You', message: 'Great job on the component! Just a few suggestions.', timestamp: '2024-08-22T16:25:00' },
    ],
  },
  {
    id: 'conv5',
    profile: '/images/user/user-05.jpg',
    username: 'david_brown',
    fullName: 'David Brown',
    title: 'Senior UI/UX Designer',
    messages: [
      { sender: 'David', message: 'The new mockups are ready for review.', timestamp: '2024-08-24T09:00:00' },
      { sender: 'You', message: "Perfect, I'll check them out.", timestamp: '2024-08-24T09:05:00' },
      { sender: 'David', message: 'Let me know if the spacing looks right.', timestamp: '2024-08-24T09:10:00' },
    ],
  },
  {
    id: 'conv6',
    profile: '/images/user/user-06.jpg',
    username: 'julia_carter',
    fullName: 'Julia Carter',
    title: 'Product Designer',
    messages: [
      { sender: 'Julia', message: 'Can we sync on the dashboard redesign?', timestamp: '2024-08-23T11:00:00' },
      { sender: 'You', message: 'Sure! How about 3pm today?', timestamp: '2024-08-23T11:05:00' },
    ],
  },
];
