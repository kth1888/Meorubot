const room_name=["메이플 머루길드 개발진"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(room_name.indexOf(room)!=-1 && (msg.indexOf('!어센틱심볼 ') != -1) || msg.indexOf('!어센틱 ')){
      msg=msg.replace('!어센틱 ','');
      var symbol=msg.split(' ');
      var total_req=0;
      var total_meso=0;
      var total_meso2=0;

      if(symbol.length != 2){
         replier.reply('두개의 수를 입력해야 합니다.');
         return;
      }

      for(i=0;i<2;i++){
         if(symbol[i]<1 || symbol[i]>20){
            replier.reply( '1~20의 수를 입력해야 합니다.');
            return;
         }
      }

      for (i=Number(symbol[0]);i<Number(symbol[1]);i++){
         total_req+=i*i+11;
         total_meso+=96900000+88500000*i;
         total_meso2+=106600000+97300000*i;
      }

      total_meso=total_meso.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      total_meso2=total_meso2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      replier.reply(symbol[0]+'에서 '+symbol[1]+'레벨까지\n요구량:'+total_req+'\n세르니움:'+total_meso+'메소\n아르크스:'+total_meso2+'메소');
   }
}



/*심볼 ~에서 ~레벨까지
요구량: ~~~
세르니움:~~메소
아르크스:~~메소
*/
