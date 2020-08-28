module.exports = function instantAcceptMyInvites(mod) {
    mod.hook('S_BEGIN_THROUGH_ARBITER_CONTRACT', 1,(event) => {
        if(event.sender == 'Not.Yang' || event.sender == 'Saiyan.Yang' || event.sender == 'Kookey' || event.sender == 'Saiyan.Kookey') {
            mod.send('C_REPLY_THROUGH_ARBITER_CONTRACT', 1, {
                type: 4,
                id: event.id,
                response: 1,
                recipient: event.sender
            })
        }
    });

    mod.command.add('leo', () => { 
        let test2 = new Buffer.alloc(1, Number());
        mod.send('C_REQUEST_CONTRACT', 1, {
            type: 57,
            unk2: 0,
            unk3: 0,
            unk4: 2,
            name: 'Not.Yang',
            data: test2
       })
    });

    mod.command.add('mel', () => { 
       let test = new Buffer.alloc(1, Number());
       mod.send('C_REQUEST_CONTRACT', 1, {
            type: 57,
            unk2: 0,
            unk3: 0,
            unk4: 2,
            name: 'Kookey',
            data: test
       })
    });
}