const room_name=["메이플 머루길드 개발진"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(room_name.indexOf(room)!=-1 && (msg.indexOf('!심볼 ') != -1) || msg.indexOf('!아케인 ') || msg.indexOf('!아케인심볼 ')){
      msg=msg.replace('!심볼 ','');
      var symbol=msg.split(' ');
      var total_req=0;
      var total_meso=0;
      var total_meso2=0;
      var total_meso3=0;
      var total_meso4=0;

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
         total_meso+=3110000+3960000*i;
         total_meso2+=6220000+4620000*i;
         total_meso3+=9330000+5280000*i;
         total_meso4+=11196000+5940000*i;
      }

      total_meso=total_meso.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      total_meso2=total_meso2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      total_meso3=total_meso3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      total_meso4=total_meso4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      replier.reply(symbol[0]+'에서 '+symbol[1]+'레벨까지\n요구량:'+total_req+'\n여로:'+total_meso+'메소\n츄츄   :'+total_meso2+'메소\n레헬른   :'+total_meso3+'메소\n그외 나머지   :'+total_meso4+'메소');
   }
}
/*심볼 ~에서 ~레벨까지
요구량: ~~~
합메소:~~메소
여로:~~메소
에서 밑으로 바뀜

심볼 ~에서 ~레벨까지
요구량: ~~~
여로:~~메소
츄츄:~~메소
레헬른:~~메소
그 외 나머지:~~메소*/
