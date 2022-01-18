const scriptName="작분석.js";
const room_name=["메이플 머루길드 개발진"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(room_name.indexOf(room)!=-1 && msg.indexOf('!작분석 ') != -1){
      var lv130 = [6,7,7,8,9];
      var lv140 = [7,8,8,9,10,11,12];
      var lv150 = [8,9,9,10,11,12,13];
      var lv160 = [9,9,10,11,12,13,14];
      var lv200 = [13,13,14,14,15,16,17];
      var analyze=msg.split(' ');
      for (i=0;i<4;i++) {
         analyze[i]=Number(analyze[i]);
      }
      if(analyze.length != 5){
         replier.reply( '입력한 값이 잘못되었습니다');
         return;
      }
      if(analyze[3]!=130 && analyze[3]!=140 && analyze[3]!=150 && analyze[3]!=160 && analyze[3]!=200){
         replier.reply('레벨제한이 잘못되었습니다');
         return;
      }
      if(analyze[3]==130 && analyze[4]>20){
         replier.reply('130제는 20성까지만 가능합니다');
         return;
      }
      if(analyze[4]<1 || analyze[4]>22){
         replier.reply('1~22성까지만 입력해야 합니다');
         return;
      }
      for (i=analyze[4];i>=1;i--){
         if(i>=16){
            if(analyze[3]==130){
               analyze[1]-=lv130[i-16];
            }
            else if(analyze[3]==140){
               analyze[1]-=lv140[i-16];
            }
            else if(analyze[3]==150){
               analyze[1]-=lv150[i-16];
            }
            else if(analyze[3]==160){
               analyze[1]-=lv160[i-16];
            }
            else if(analyze[3]==200){
               analyze[1]-=lv200[i-16];
            }
         }
         if(i<=15){
            analyze[1]-=Math.floor((analyze[1]+50)/51);
         }
      }

      var str = analyze[3]+'제 '+analyze[4]+'성 강화\n작으로 상승한 공: '+(Number(analyze[1])-Number(analyze[2]))
      replier.reply(str);
   }
}
