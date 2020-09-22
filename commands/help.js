const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Dough Help Menu")
        .setThumbnail("https://i.pinimg.com/originals/42/ee/e0/42eee03082d6c3ef8f8fb7d270d65ad8.jpg")
        .setFooter("Made by Syrvfjd♡#6149")
        .addFields(
            { name: "💡Openbaar", value: "`?help`" },
            { name: "📌Moderatie", value: "`SOON`" },
            { name: "💸Premium", value: "`SOON`" },
            { name: "📝Tickets", value: "`SOON`" },
            { name: "⚙️Setup", value: "`SOON`" },
        )

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "help"
}