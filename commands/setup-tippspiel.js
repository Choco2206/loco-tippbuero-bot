const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-tippspiel')
    .setDescription('Postet die Anmeldung für das Loco Tippbüro.'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xb00020)
      .setTitle('🌍 LOCO TIPPBÜRO')
      .setDescription(
        [
          '**Die WM 2026 steht vor der Tür.**',
          '',
          'Hier startet unser internes Loco Tippspiel.',
          '',
          'Drück auf **Teilnehmen**, wenn du dabei sein willst.',
        ].join('\n')
      );

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('tippbuero_join')
        .setLabel('🎯 Teilnehmen')
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId('tippbuero_rules')
        .setLabel('📋 Regeln')
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
