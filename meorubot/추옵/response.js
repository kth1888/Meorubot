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
   var str = br.readLine();

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
   if(room_name.indexOf(room)!=-1 && msg.indexOf('!추옵 ') != -1){
      var option=msg.split(' ');
      if (option[1]=='파프니르' || option[1]=='앱솔랩스' || option[1]=='아케인셰이드' || option[1]=='네크로' || option[1]=='반레온' || option[1]=='쟈이힌' || option[1]=='여제' || option[1]=='우트가르드' || option[1]=='자쿰' || option[1]=='제네시스'){
         option[1]=option[1].replace('파프니르','파프');
         option[1]=option[1].replace('앱솔랩스','앱솔');
         option[1]=option[1].replace('아케인셰이드','아케인');
      }
      if (option.length == 3){
         option[2]=option[2].toUpperCase();
      }
      if (option[1] == '제로'){
         replier.reply(Command.output(option[0]+' '+option[1]));
         return;
      }
      if (option[1] == '해카세'){
         replier.reply(Command.output(option[0]+' '+option[1]));
         return;
      }
      var data=Command.output(option[0]+' '+option[1]);
      if (data.indexOf('*'+option[2]+'\n') == -1){
         replier.reply(data);
         return;
      }
      var str=data.split('*'+option[2]+'\n')[1].split('\n\n')[0];
      replier.reply(str);
   }
}
