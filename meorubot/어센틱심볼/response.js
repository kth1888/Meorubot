const room_name=["메이플 머루길드 개발진", "메이플 머루길드 단톡방"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(room_name.indexOf(room)!=-1 && (msg.indexOf('!어센틱 ') != -1 || msg.indexOf('!어센틱심볼 ') != -1 || msg.indexOf('!심볼2 ') != -1)){
      var symbol=msg.split(' ');
      var total_req=0;
      var total_meso=0;
      var total_meso2=0;

      if(symbol.length != 3){
         replier.reply('두개의 수를 입력해야 합니다.');
         return;
      }

      for(i=1;i<3;i++){
         if(symbol[i]<1 || symbol[i]>11){
            replier.reply( '1~11의 수를 입력해야 합니다.');
            return;
         }
      }
      for (i=Number(symbol[1]);i<Number(symbol[2]);i++){
         total_req+=i*i+28;
         total_meso+=96900000+88500000*i;
         total_meso2+=106600000+97300000*i;
      }

      total_meso=total_meso.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      total_meso2=total_meso2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      replier.reply(symbol[1]+'에서 '+symbol[2]+'레벨까지\n필요 어센틱심볼 개수 : '+total_req+'\n세르니움 : '+total_meso+' 메소\n아르크스 : '+total_meso2+' 메소');
   }
}



/*심볼 ~에서 ~레벨까지
요구량: ~~~
세르니움:~~메소
아르크스:~~메소
*/
