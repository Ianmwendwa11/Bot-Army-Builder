import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [botsInArmy, setBotsInArmy] = useState([]);


  const handleEnlist = (bot) => {
    const botClass = bot.bot_class;
    if (botsInArmy.some(b => b.bot_class === botClass)) {
      alert('You can only enlist one bot per class!');
    } else {
      setBotsInArmy([...botsInArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    setBotsInArmy(botsInArmy.filter(b => b.id !== bot.id));
  };

  return (
    <div>
      <h1>Bot Army Builder</h1>
      <YourBotArmy botsInArmy={botsInArmy} handleRelease={handleRelease} />
      <BotCollection handleEnlist={handleEnlist} />
    </div>
  );
};

export default App;
