import BotCard from './BotCard';
import React from 'react';

const YourBotArmy = ({ botsInArmy, handleRelease }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army ({botsInArmy.length})</h2>
      {botsInArmy.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        botsInArmy.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => handleRelease(bot)}>Release</button>
          </div>
        ))
      )}
    </div>
  );
};

export default YourBotArmy;
