const room_name=["메이플 머루길드 개발진", "메이플 머루길드 단톡방"];  //여기에 채팅방 이름을 입력하세요
Jsoup = org.jsoup.Jsoup
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
     if(msg=="!온도"){
       var temperature = Device.getBatteryTemp()
       if(temperature < 36.5){
          replier.reply('제 온도가 ' + Device.getBatteryTemp() + '°C 에요!\n싸늘하게 식었네요');
       }
       else{
         replier.reply('제 온도가 ' + Device.getBatteryTemp() + '°C 에요!\n저, 좀 더워요');
       }
       return;
     }
     if(msg=="!한강물온도" || msg=="!물온도" || msg=="!한강" || msg=="!한강수온" || msg=="!수온"){
       var hangang_random = Math.floor(Math.random() * 4)
       var hangang = Utils.getWebText("https://api.hangang.msub.kr/").replace(/(<([^>]+)>)/ig,"").trim();
       hangang = JSON.parse(hangang)
       switch(hangang_random) {
         case 0:
          replier.reply(""+hangang.station + "에서 측정한 한강 수온 이에요\n"+hangang.temp+"℃ 에요 다음 큐브는 잘될거에요");
          break;
         case 1:
          replier.reply(""+hangang.station + "에서 측정한 한강 수온 이에요\n"+hangang.temp+"℃ 에요 다음 스타포스는 잘될거에요");
          break;
         case 2:
          replier.reply(""+hangang.station + "에서 측정한 한강 수온 이에요\n"+hangang.temp+"℃ 에요 아직 한강물은 추워요");
          break;
         default:
          replier.reply(""+hangang.station + "에서 측정한 한강 수온 이에요\n"+hangang.temp+"℃ 에요 다음에는 칠흑이 뜰거에요");
          break;
      }
      return;
     }
     if(msg.indexOf('!스카우터 ') != -1){
        var scout=msg.split(' ');
        var url = Utils.getWebText("https://maple.gg/u/"+scout[1]);
        var scout_rank = 0;

        if(url.indexOf('검색결과가 없습니다.') != -1){
           replier.reply('[' + scout[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
           return;
        }

        var data_murung = url.split('text-white">')[3].split('더시드')[0].replace(/(<([^>]+)>)/g,"");
        data_murung = data_murung.replace(/ /gi, '');
        data_murung = data_murung.replace(/\n/gi, '');

        if (data_murung.indexOf('기록이없습니다.') != 1){
           var scout_floor = Number(data_murung.split('록')[1].split('층')[0]);
           if (scout_floor >= 45){
             scout_rank += scout_floor * 4;
           }
           else{
             scout_rank += scout_floor * 3;
           }
        }
        var data_union = url.split('bg-yellow">')[1].split('업적')[0].replace(/(<([^>]+)>)/g,"");
        data_union = data_union.replace(/ /gi, '');
        data_union = data_union.replace(/\n/gi, '');

        if (data_union.indexOf('기록이없습니다.') != 1){
           var scout_union = Number(data_union.split('유니온')[1].split('Lv')[0];);
           if (scout_union >= 8000){
             scout_rank += 250
           }
           else{
             scout_rank += scout_union / 40
           }
        }
        var data_level = url.split('user-summary-item">')[1].split(')</li>')[0].replace(/(<([^>]+)>)/g,"");
        replier.reply(data_level);
        replier.reply(scout_rank);
        replier.reply(scout_floor);
        replier.reply(scout_union);
        return 0;
     }
}
