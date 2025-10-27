import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModeTabs from './components/ModeTabs';
import Stories from './components/insta/Stories';
import Feed from './components/insta/Feed';
import ChatList from './components/wa/ChatList';
import ChatWindow from './components/wa/ChatWindow';
import Contacts from './components/imo/Contacts';
import FeatureGrid from './components/FeatureGrid';
import AppShowcase from './components/AppShowcase';
import { chats, messagesByChatId, contacts, stories, posts } from './data/mockData';

export default function App() {
  const [mode, setMode] = useState('instagram');
  const [activeChatId, setActiveChatId] = useState(chats[0]?.id ?? null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Hero />
        <section id="app" className="mt-10">
          <ModeTabs mode={mode} onChange={setMode} />
          {mode === 'instagram' && (
            <div className="mt-6 grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Stories stories={stories} />
                <Feed posts={posts} />
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-semibold mb-2">Suggested</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Follow: @tech.design</li>
                    <li>Follow: @travel.world</li>
                    <li>Follow: @music.vibes</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {mode === 'whatsapp' && (
            <div className="mt-6 grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <ChatList
                  chats={chats}
                  activeChatId={activeChatId}
                  onSelect={setActiveChatId}
                />
              </div>
              <div className="lg:col-span-2">
                <ChatWindow
                  chat={chats.find(c => c.id === activeChatId) || chats[0]}
                  messages={messagesByChatId[activeChatId] || []}
                />
              </div>
            </div>
          )}
          {mode === 'imo' && (
            <div className="mt-6">
              <Contacts contacts={contacts} />
            </div>
          )}
        </section>
        <FeatureGrid />
        <AppShowcase />
      </main>
    </div>
  );
}
