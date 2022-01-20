const scriptName="무릉.js"; //https://www.inven.co.kr/board/maple/2304/17003 출처 댓글쪽으로 확인
const room_name=["메이플 머루길드 개발진"];  //여기에 채팅방 이름을 입력하세요

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

   if(room !=("방이름") && msg.indexOf('!무릉 ') != -1){
      var murung=msg.split(' ');
      var url = Utils.getWebText("https://maple.gg/u/" + murung[1]);


      if(url.indexOf('검색결과가 없습니다.') != -1){
         replier.reply('[' + murung[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
         return;
      }

      var data = url.split('text-white">')[3].split('더시드')[0].replace(/(<([^>]+)>)/g,"");
      data = data.replace(/ /gi, '');
      data = data.replace(/\n/gi, '');

      if (data.indexOf('기록이없습니다.') != -1){
         replier.reply('[' + murung[1] + ']\n' + '기록이 없습니다');
         return;
      }

      else{
         var info = data.split('층')[2].split('월드')[0];
         var floor = data.split('록')[1].split('층')[0];
         var time = data.split('층')[1].split('Lv')[0];
         var date = data.split('위')[2];
         date = date.replace('기준일:', ' ');
         var old = data.split('예전 무릉 최고')[0].split('Lv')[1];
         old = old.replace('.', 'Lv.');
         old = old.replace('/', '\n직업 :');
         old = old.replace('기준일:', '\n기준일 :');
         old = old.replace('">예전무릉최고', '\n최고 기록 :');

         replier.reply('[' + murung[1] + ']\n' + info + '\n기록: ' + floor + '층\n시간: ' + time + '\n날짜: ' + date + '\n\n<예전 무릉> \n레벨 : ' + old);
      }
   }
}
