const scriptName="스타포스.js";
const room_name=["메이플 머루길드 개발진"];  //여기에 채팅방 이름을 입력하세요

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const Command = {};
Command.output = function(msg) {

   var output_question = msg.replace('!','').split(' ');
   var dir='';

   for(i=0;i<output_question.length;i++) {
      dir+='/';
      dir+=output_question[i];
   }

   var file = new java.io.File(sdcard+'/jadebot'+dir+'.txt');
      if(!(file.exists())) {
         return '잘못된 값입니다.';
      }
   var fis = new java.io.FileInputStream(file);
   var isr = new java.io.InputStreamReader(fis);
   var br = new java.io.BufferedReader(isr);
   var str = br.readLine();      //파일의 내용

   var line = "";

   while((line = br.readLine()) !== null) {
      str += "\n" + line;
   }

   fis.close();
   isr.close();
   br.close();
   return str;
};

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
   if(room_name.indexOf(room)!=-1 && msg.indexOf('!스타포스 ') != -1){
      var star=msg.split(' ');
      if (star[1] != 130 && star[1] != 140 && star[1] != 150 && star[1] != 160 && star[1] != 200){
         replier.reply('레벨제한은 130,140,150,160,200만 가능합니다.');
         return;
      }
      if (star[1] == 130 && star[2] > 20){
         replier.reply('130제는 20성까지 강화할 수 있습니다.');
         return;
      }
      var data=Command.output(star[0]+' '+star[1]);
      if (data.indexOf('*'+star[2]+'성 ') == -1){
         replier.reply('1~22성의 값을 넣어야 합니다.');
         return;
      }
      var str=data.split('*'+star[2]+'성 ')[1].split('\n\n')[0];
      replier.reply('방어구 '+star[2]+'성 '+str);
   }
}
