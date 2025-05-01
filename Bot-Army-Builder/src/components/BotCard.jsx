import React from "react";

function BotCard({ bot, onClick, onDelete }) {
    return (
      <div className="bot-card" onClick={() => onClick(bot)}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>{bot.catchphrase}</p>
        <div className="bot-info">
          <span>🛡 {bot.armor}</span>
          <span>⚔ {bot.damage}</span>
          <span>❤️ {bot.health}</span>
        </div>
        {onDelete && (
          <button onClick={(e) => {
            e.stopPropagation();
            onDelete(bot);
          }}>Delete</button>
        )}
      </div>
    );
  }
  
  export default BotCard;

  