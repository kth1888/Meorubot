const room_name=["메이플 머루길드 개발진"];  //여기에 채팅방 이름을 입력하세요
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
}
