const room_name=["메이플 머루길드 개발진", "메이플 머루길드 단톡방"];  //여기에 채팅방 이름을 입력하세요
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
    if(room_name.indexOf(room)!=-1 && msg==('!도움말')) {
       var data=Command.output("도움말 도움말");
       replier.reply(data);
  }
}
