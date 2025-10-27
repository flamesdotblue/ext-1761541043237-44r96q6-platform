export const stories = [
  { id: 's1', username: 'alex', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop' },
  { id: 's2', username: 'mila', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop' },
  { id: 's3', username: 'devon', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop' },
  { id: 's4', username: 'sara', avatar: 'https://images.unsplash.com/photo-1502823403499-6ccb9cd39b57?q=80&w=300&auto=format&fit=crop' },
  { id: 's5', username: 'james', avatar: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=300&auto=format&fit=crop' },
];

export const posts = [
  {
    id: 'p1',
    user: { name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop' },
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    caption: 'Sunset hikes hit different.',
    likes: 2451,
    location: 'Yosemite, CA',
    time: '2 hours ago'
  },
  {
    id: 'p2',
    user: { name: 'Mila Park', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop' },
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
    caption: 'City lights and late nights.',
    likes: 981,
    location: 'Seoul, KR',
    time: '1 day ago'
  }
];

export const chats = [
  {
    id: 'c1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'Let’s meet at 6?',
    lastTime: '5:32 PM',
    status: 'online'
  },
  {
    id: 'c2',
    name: 'Design Crew',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'New Figma file shared',
    lastTime: '4:10 PM',
    status: 'last seen today at 5:05 PM'
  }
];

export const messagesByChatId = {
  c1: [
    { id: 'm1', text: 'Hey! Ready for the hike?', time: '5:28 PM', fromMe: false },
    { id: 'm2', text: 'Yup! Meeting at the trailhead.', time: '5:30 PM', fromMe: true },
    { id: 'm3', text: 'Perfect. See you at 6!', time: '5:32 PM', fromMe: false },
  ],
  c2: [
    { id: 'm1', text: 'Mockups look great!', time: '4:07 PM', fromMe: true },
    { id: 'm2', text: 'Thanks! Sent the new file.', time: '4:10 PM', fromMe: false },
  ]
};

export const contacts = [
  { id: 'i1', name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', status: 'online' },
  { id: 'i2', name: 'Mila Park', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop', status: 'Available' },
  { id: 'i3', name: 'Devon Reed', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop', status: 'Busy' },
];
