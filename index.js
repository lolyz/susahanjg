//saving documents to db and generating link
bot.on('document', async (ctx) => {
    document = ctx.message.document
    //console.log(ctx);
    
    fileDetails1 = {
            file_name: document.file_name,
            userId:ctx.from.id,
            file_id: document.file_id,
            mediaId: ctx.message.media_group_id,
            caption: ctx.message.caption,
            file_size: document.file_size,
            uniqueId: document.file_unique_id,
            type: 'document'
        }
        //console.log(fileDetails1.caption);    
    
    if(fileDetails1.mediaId == undefined){
        if(fileDetails1.file_name == undefined){
            fileDetails2 = {
                file_name: today2(ctx),
                userId:ctx.from.id,
                file_id: document.file_id,
                caption: ctx.message.caption,
                file_size: document.file_size,
                uniqueId: document.file_unique_id,
                type: 'document'
            }
            //console.log(fileDetails2.caption);
        }else{
            var exstension = document.file_name;
            var regex = /\.[A-Za-z0-9]+$/gm
            var doctext = exstension.replace(regex, '');
            fileDetails = {
                file_name: doctext,
                userId:ctx.from.id,
                file_id: document.file_id,
                caption: ctx.message.caption,
                file_size: document.file_size,
                uniqueId: document.file_unique_id,
                type: 'document'
            }
            //console.log(fileDetails.caption);
        }
    }else{
        if(fileDetails1.file_name == undefined){
            fileDetails4 = {
                file_name: today2(ctx),
                userId:ctx.from.id,
                file_id: document.file_id,
                mediaId: ctx.message.media_group_id,
                caption: ctx.message.caption,
                file_size: document.file_size,
                uniqueId: document.file_unique_id,
                type: 'document'
            }
            //console.log(fileDetails4.caption);
        }else{
            var exstension = document.file_name;
            var regex = /\.[A-Za-z0-9]+$/gm
            var doctext = exstension.replace(regex, '');
            fileDetails3 = {
                file_name: doctext,
                userId:ctx.from.id,
                file_id: document.file_id,
                mediaId: ctx.message.media_group_id,
                caption: ctx.message.caption,
                file_size: document.file_size,
                uniqueId: document.file_unique_id,
                type: 'document'
            }
            //console.log(fileDetails3.caption);
        }
    }
    
    if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
        if(!fileDetails1.mediaId){
            if(!fileDetails1.file_name){
                saver.saveFile(fileDetails2)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Document disimpan \n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)
                    return ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                        parse_mode:'HTML'
                    })
            }else{
                saver.saveFile(fileDetails)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Document disimpan \n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)
                    return ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                        parse_mode:'HTML'
                    })
            }
        }else{
            if(!fileDetails1.file_name){
                saver.saveFile(fileDetails4)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)                   
                    return ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
            }else{
                saver.saveFile(fileDetails3)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n<b>ID grup:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)                   
                    return ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithDocument(document.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
            }
        }
    }else{
        //try{
            var botStatus3 = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
            var member3 = await bot.telegram.getChatMember(channelId, ctx.from.id)
            //console.log(member3);
            if(!member3 || member3.status == 'left' || member3.status == 'kicked'){
                const profile6 = await bot.telegram.getUserProfilePhotos(ctx.chat.id)
                if(!profile6 || profile6.total_count == 0)
                    return ctx.reply(`<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,{
                        parse_mode:'HTML',
                        disable_web_page_preview: true,
                        reply_markup:{
                            inline_keyboard:inKey2
                        }
                    })
                    ctx.replyWithPhoto(profile6.photos[0][0].file_id,{caption: `<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,
                        parse_mode:'HTML',
                        disable_web_page_preview: true,
                        reply_markup:{
                            inline_keyboard:inKey2
                        }
                    })
            }else{
                await saver.checkBan(`${ctx.from.id}`).then((res) => {
                //console.log(res);
                if(res == true) {
                    if(ctx.chat.type == 'private') {
                        ctx.reply(`${messagebanned(ctx)}`)
                    }
                }else{
                    if(!fileDetails1.mediaId){
                        if(!fileDetails1.file_name){
                            saver.saveFile(fileDetails2)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Document disimpan \n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)
                                return ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                        }else{
                            saver.saveFile(fileDetails)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Document disimpan \n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)
                                return ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Document disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                        }
                    }else{
                        if(!fileDetails1.file_name){
                            saver.saveFile(fileDetails4)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)                   
                                return ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                        }else{
                            saver.saveFile(fileDetails3)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)                   
                                return ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithDocument(document.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${doctext}\n<b>Size:</b> ${document.file_size} B\n<b>ID file:</b> ${document.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${document.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                        }
                    }
                }
            })
        }
        //}
        //catch(error){
        //    ctx.reply(`${messagebotnoaddgroup(ctx)}`)
        //}
    }

})

//video files
bot.on('video', async(ctx) => {
    video = ctx.message.video
    //console.log(ctx);

    fileDetails1 = {
            file_name: video.file_name,
            userId:ctx.from.id,
            file_id: video.file_id,
            mediaId: ctx.message.media_group_id,
            caption: ctx.message.caption,
            file_size: video.file_size,
            uniqueId: video.file_unique_id,
            type: 'video'
        }
        //console.log(fileDetails1.caption);    

    if(fileDetails1.mediaId == undefined){
        if(fileDetails1.file_name == undefined){
            fileDetails2 = {
                file_name: today2(ctx),
                userId:ctx.from.id,
                file_id: video.file_id,
                caption: ctx.message.caption,
                file_size: video.file_size,
                uniqueId: video.file_unique_id,
                type: 'video'
            }
            //console.log(fileDetails2.caption);
        }else{
            var exstension = video.file_name;
            var regex = /\.[A-Za-z0-9]+$/gm
            var vidext = exstension.replace(regex, '');
            fileDetails = {
                file_name: vidext,
                userId:ctx.from.id,
                file_id: video.file_id,
                caption: ctx.message.caption,
                file_size: video.file_size,
                uniqueId: video.file_unique_id,
                type: 'video'
            }
            //console.log(fileDetails.caption);
        }
    }else{
        if(fileDetails1.file_name == undefined){
            fileDetails4 = {
                file_name: today2(ctx),
                userId:ctx.from.id,
                file_id: video.file_id,
                mediaId: ctx.message.media_group_id,
                caption: ctx.message.caption,
                file_size: video.file_size,
                uniqueId: video.file_unique_id,
                type: 'video'
            }
            //console.log(fileDetails4.caption);
        }else{
            var exstension = video.file_name;
            var regex = /\.[A-Za-z0-9]+$/gm
            var vidext = exstension.replace(regex, '');
            fileDetails3 = {
                file_name: vidext,
                userId:ctx.from.id,
                file_id: video.file_id,
                mediaId: ctx.message.media_group_id,
                caption: ctx.message.caption,
                file_size: video.file_size,
                uniqueId: video.file_unique_id,
                type: 'video'
            }
            //console.log(fileDetails3.caption);
        }
    }

    if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
        if(!fileDetails1.mediaId){
            if(!fileDetails1.file_name){
                saver.saveFile(fileDetails2)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Video disimpan \n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)
                    return ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                        parse_mode:'HTML'
                    })
            }else{
                saver.saveFile(fileDetails)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Video disimpan \n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)
                    return ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                        parse_mode:'HTML'
                    })
            }
        }else{
            if(!fileDetails1.file_name){
                saver.saveFile(fileDetails4)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)                   
                    return ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
            }else{
                saver.saveFile(fileDetails3)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)                   
                    return ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithVideo(video.file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
            }
        }
    }else{
        //try{
            var botStatus3 = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
            var member3 = await bot.telegram.getChatMember(channelId, ctx.from.id)
            //console.log(member3);
            if(!member3 || member3.status == 'left' || member3.status == 'kicked'){
                const profile6 = await bot.telegram.getUserProfilePhotos(ctx.chat.id)
                if(!profile6 || profile6.total_count == 0)
                    return ctx.reply(`<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,{
                        parse_mode:'HTML',
                        disable_web_page_preview: true,
                        reply_markup:{
                            inline_keyboard:inKey2
                        }
                    })
                    ctx.replyWithPhoto(profile6.photos[0][0].file_id,{caption: `<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,
                        parse_mode:'HTML',
                        disable_web_page_preview: true,
                        reply_markup:{
                            inline_keyboard:inKey2
                        }
                    })
            }else{
                await saver.checkBan(`${ctx.from.id}`).then((res) => {
                //console.log(res);
                if(res == true) {
                    if(ctx.chat.type == 'private') {
                        ctx.reply(`${messagebanned(ctx)}`)
                    }
                }else{
                    if(!fileDetails1.mediaId){
                        if(!fileDetails1.file_name){
                            saver.saveFile(fileDetails2)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Video disimpan \n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)
                                return ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n<b>✔️ Video disimpan \nDari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                        }else{
                            saver.saveFile(fileDetails)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Video disimpan \n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)
                                return ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Video disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                        }
                    }else{
                        if(!fileDetails1.file_name){
                            saver.saveFile(fileDetails4)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)                   
                                return ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                        }else{
                            saver.saveFile(fileDetails3)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)                   
                                return ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithVideo(video.file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${vidext}\n<b>Size:</b> ${video.file_size} B\n<b>ID file:</b> ${video.file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${video.file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                        }
                    }
                }
            })
        }
        //}
        //catch(error){
        //    ctx.reply(`${messagebotnoaddgroup(ctx)}`)
        //}
    }

})

//photo files
bot.on('photo', async(ctx) => {
    photo = ctx.message.photo
    //console.log(ctx);

    fileDetails1 = {
            file_name: photo[1].file_name,
            userId:ctx.from.id,
            file_id: photo[1].file_id,
            mediaId: ctx.message.media_group_id,
            caption: ctx.message.caption,
            file_size: photo[1].file_size,
            uniqueId: photo[1].file_unique_id,
            type: 'photo'
        }
        //console.log(fileDetails1.caption);    

    if(fileDetails1.mediaId == undefined){
        if(fileDetails1.file_name == undefined){
            fileDetails2 = {
                file_name: today2(ctx),
                userId:ctx.from.id,
                file_id: photo[1].file_id,
                caption: ctx.message.caption,
                file_size: photo[1].file_size,
                uniqueId: photo[1].file_unique_id,
                type: 'photo'
            }
            //console.log(fileDetails2.caption);
        }else{
            var exstension = photo[1].file_name;
            var regex = /\.[A-Za-z0-9]+$/gm
            var photext = exstension.replace(regex, '');
            fileDetails = {
                file_name: photext,
                userId:ctx.from.id,
                file_id: photo[1].file_id,
                caption: ctx.message.caption,
                file_size: photo[1].file_size,
                uniqueId: photo[1].file_unique_id,
                type: 'photo'
            }
            //console.log(fileDetails.caption);
        }
    }else{
        if(fileDetails1.file_name == undefined){
            fileDetails4 = {
                file_name: today2(ctx),
                userId:ctx.from.id,
                file_id: photo[1].file_id,
                mediaId: ctx.message.media_group_id,
                caption: ctx.message.caption,
                file_size: photo[1].file_size,
                uniqueId: photo[1].file_unique_id,
                type: 'photo'
            }
            //console.log(fileDetails4.caption);
        }else{
            var exstension = photo[1].file_name;
            var regex = /\.[A-Za-z0-9]+$/gm
            var photext = exstension.replace(regex, '');
            fileDetails3 = {
                file_name: photext,
                userId:ctx.from.id,
                file_id: photo[1].file_id,
                mediaId: ctx.message.media_group_id,
                caption: ctx.message.caption,
                file_size: photo[1].file_size,
                uniqueId: photo[1].file_unique_id,
                type: 'photo'
            }
            //console.log(fileDetails3.caption);
        }
    }

    if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
        if(!fileDetails1.mediaId){
            if(!fileDetails1.file_name){
                saver.saveFile(fileDetails2)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Photo disimpan \n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)
                    return ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                        parse_mode:'HTML'
                    })
            }else{
                saver.saveFile(fileDetails)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Photo disimpan \n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)
                    return ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                        parse_mode:'HTML'
                    })
            }
        }else{
            if(!fileDetails1.file_name){
                saver.saveFile(fileDetails4)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)                   
                    return ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
            }else{
                saver.saveFile(fileDetails3)
                if(ctx.chat.type == 'private') {
                    ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                        parse_mode: 'HTML',
                        disable_web_page_preview: true,
                        reply_to_message_id: ctx.message.message_id
                    })
                }
                if(!ctx.message.caption)                   
                    return ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
                    ctx.replyWithPhoto(photo[1].file_id, {
                        chat_id: process.env.LOG_CHANNEL,
                        caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                        parse_mode:'HTML'
                    })
            }
        }
    }else{
        //try{
            var botStatus3 = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
            var member3 = await bot.telegram.getChatMember(channelId, ctx.from.id)
            //console.log(member3);
            if(!member3 || member3.status == 'left' || member3.status == 'kicked'){
                const profile6 = await bot.telegram.getUserProfilePhotos(ctx.chat.id)
                if(!profile6 || profile6.total_count == 0)
                    return ctx.reply(`<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,{
                        parse_mode:'HTML',
                        disable_web_page_preview: true,
                        reply_markup:{
                            inline_keyboard:inKey2
                        }
                    })
                    ctx.replyWithPhoto(profile6.photos[0][0].file_id,{caption: `<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,
                        parse_mode:'HTML',
                        disable_web_page_preview: true,
                        reply_markup:{
                            inline_keyboard:inKey2
                        }
                    })
            }else{
                await saver.checkBan(`${ctx.from.id}`).then((res) => {
                //console.log(res);
                if(res == true) {
                    if(ctx.chat.type == 'private') {
                        ctx.reply(`${messagebanned(ctx)}`)
                    }
                }else{
                    if(!fileDetails1.mediaId){
                        if(!fileDetails1.file_name){
                            saver.saveFile(fileDetails2)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Photo disimpan \n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)
                                return ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails2.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                        }else{
                            saver.saveFile(fileDetails)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Photo disimpan \n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)
                                return ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Photo disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}`,
                                    parse_mode:'HTML'
                                })
                        }
                    }else{
                        if(!fileDetails1.file_name){
                            saver.saveFile(fileDetails4)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)                   
                                return ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: config.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${fileDetails4.file_name}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                        }else{
                            saver.saveFile(fileDetails3)
                            if(ctx.chat.type == 'private') {
                                ctx.reply(`✔️ Grup disimpan \n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_unique_id}\n<b>ID group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                            }
                            if(!ctx.message.caption)                   
                                return ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                                ctx.replyWithPhoto(photo[1].file_id, {
                                    chat_id: process.env.LOG_CHANNEL,
                                    caption: `${ctx.message.caption}\n\n✔️ Grup disimpan \n<b>Dari:</b> ${ctx.from.id}\n<b>Nama:</b> <a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>\n\n<b>Nama file:</b> ${photext}\n<b>Size:</b> ${photo[1].file_size} B\n<b>ID file:</b> ${photo[1].file_id}\n<b>ID Group:</b> ${ctx.message.media_group_id}\n\nhttps://t.me/${process.env.BOTUSERNAME}?start=${photo[1].file_unique_id}\nhttps://t.me/${process.env.BOTUSERNAME}?start=grp_${ctx.message.media_group_id}`,
                                    parse_mode:'HTML'
                                })
                        }
                    }
                }
            })
        }
        //}
        //catch(error){
        //    ctx.reply(`${messagebotnoaddgroup(ctx)}`)
        //}
    }

})

bot.command('stats',async(ctx)=>{
    stats = await saver.getUser().then((res)=>{
        if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
            ctx.reply(`📊 Total pengguna: <b>${res.length}</b>`,{parse_mode:'HTML'})
        }
        
    })
    stats = await saver.getMedia().then((res)=>{
        if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
            ctx.reply(`📊 Total media: <b>${res.length}</b>`,{parse_mode:'HTML'})
        }

    })
    stats = await saver.getBan().then((res)=>{
        if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
            ctx.reply(`📊 Total pengguna melanggar: <b>${res.length}</b>`,{parse_mode:'HTML'})
        }
        
    })
    stats = await saver.getGroup().then((res)=>{
        if(ctx.from.id == process.env.ADMIN || ctx.from.id == process.env.ADMIN1 || ctx.from.id == process.env.ADMIN2){
            ctx.reply(`📊 Total grup terdaftar: <b>${res.length}</b>`,{parse_mode:'HTML'})
        }
        
    })
})

//getting files as inline result
bot.on('inline_query',async(ctx)=>{
    query = ctx.inlineQuery.query
    if(query.length>0){
        // pastikan input sesuai regex
        const type_reg = /(document|video|photo)?\s(\w*)/;
        var reg_veriv = type_reg.exec(query)
        
        if(!reg_veriv) return;
        if(!reg_veriv[1])return;

        var file_type = reg_veriv[1];
        var keyword = reg_veriv[2];

        let searchResult = saver.getfileInline(keyword).then((res)=>{
            let result = res.filter(e => e.type == file_type).map((ctx,index)=>{
                    var data = {
                        type:ctx.type,
                        id:ctx._id,
                        title:ctx.file_name,
                        caption:ctx.caption,
                        reply_markup:{
                            inline_keyboard:[
                                [{text:"Pencarian",switch_inline_query:''}]
                            ]
                        }
                    }
                    data[`${ctx.type}_file_id`] = ctx.file_id;
                    return data;
                }
            )
            ctx.answerInlineQuery(result)
        })
    }else{
        //console.log('query not found');
    } 
})
