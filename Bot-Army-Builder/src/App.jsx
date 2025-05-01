import React, { useState } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';

const App = () => {
  const [botsInArmy, setBotsInArmy] = useState([]);

  const handleEnlist = (bot) => {
  
    if (!botsInArmy.find(b => b.id === bot.id)) {
      setBotsInArmy([...botsInArmy, bot]);
    }
  };

  const handleRelease = (botToRemove) => {
    setBotsInArmy(botsInArmy.filter(bot => bot.id !== botToRemove.id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <YourBotArmy botsInArmy={botsInArmy} handleRelease={handleRelease} />
      <BotCollection handleEnlist={handleEnlist} />
    </div>
  );
};

export default App;
