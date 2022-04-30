const client = require("../index");
const { MessageEmbed } = require('discord.js');
const User = require('../user.js');
const Guild = require('../guild.js');
client.on("messageReactionAdd", async (messageReaction, user) => {
    let message = messageReaction.message;
    if (!message.guild) return;
    if (message.channel.id != "838129479599259749") return;
    if (messageReaction.emoji.id !== "772346227232604180")  return;
        let member = message.guild.members.cache.get(user.id)
        if (member.user.bot) return;
        member.roles.add("834034619766407198");
        member.roles.remove("838150207246041129")
});
client.on("messageReactionAdd", async (messageReaction, user) => {
    let message = messageReaction.message;
    if (!message.guild) return;
    if (message.channel.id != "918071693099040778") return;
    if (messageReaction.emoji.id !== "918178969587707954")  return;
        let member = message.guild.members.cache.get(user.id)
        if (member.user.bot) return;
        member.roles.add("918177185032962148");
        let emb = new MessageEmbed()
        .setDescription(`> __**УСЛОВИЯ:**__
        \`\`\`
        ПОБЕДИТЕЛЬ будет ОДИН, поэтому вы будете бороться за ГЛАВНЫЙ ПРИЗ Nintendo Switch!\`\`\`
        🔹 1. Создать бессрочную ссылку-приглашение от вашего имени и пригласить минимум 10 участников.
        🔹2. Подписаться на YouTube канал https://youtube.com/channel/UCJ82L9yje1a5CcbGBBPmDJw
        🔹4. Получить 5 уровень на сервере (уровень повышается за актив, читайте <#771810324419444737>)
        🔹5. Минимальное количество часов в войсе - 10 часов за всё время нахождения на сервере!
        \`\`\`
        Мы постарались предоставить достаточно времени для выполнения всех условий розыгрыша, поэтому требования вполне реальны\`\`\`
        > __**ПРАВИЛА:**__
        \`\`\`
        1.Не пытайтесь обмануть организаторов розыгрыша. За обман вы будете забанены на сервере на 100+ дней
        2.Запрещено приглашать твинки/ботов/пустые аккаунты. За нарушение будете сняты с конкурса/забанены на 20+ дней
        3.Разрешено использовать иные социальные сети для привлечения участников\`\`\`
        > __**ПРОВЕРКА:**__
        🔹После того, как вы получили данное сообщение, вам открылся канал <#918078848015429682>
        \`\`\`
        1. Вам нужно скинуть скрины с подпиской на канал #проверка
        2. Мы проверим количество приглашённых участников, ваш уровень и подписку!\`\`\`
        \`\`\`
        Если вы выполнили все условия, вам выдадут номер, внесут в таблицу и предоставят доступ к просмотру списка\`\`\`
        \`\`\`
        Если вы не прошли проверку, вам скажут причину и вы сможете доделать оставшиеся условия!\`\`\``)
      member.send({embeds:[emb]})
});