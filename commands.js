const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'create',
        description: 'create a short-url',
      },
    // {
    //   name: 'ping',
    //   description: 'Replies with Pong!',
    // },
  ];
  const rest = new REST({ version: '10' }).setToken(
    ''
);
(async()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1368187403646275697'), { 
            body: commands
         });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();
