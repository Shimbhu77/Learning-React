import 'package:flutter/material.dart';
import 'package:screen_change/main.dart';

class MyPage extends StatelessWidget
{
  
  var name = TextEditingController();

  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
      appBar: AppBar(title: Text("Shimbhu's AI")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
          Text("A Warm Welcome By ShimbhuAI.",style: TextStyle(fontSize: 30,fontStyle: FontStyle.italic,color: Colors.purple.shade400),),
          SizedBox(height: 50,),
          TextField(
           controller: name,
          ),
          SizedBox(height: 50,),
          ElevatedButton(style: ButtonStyle(
            backgroundColor: MaterialStateProperty.all<Color>(Colors.blueGrey.shade300)
           ),onPressed: (){
            Navigator.push(context, MaterialPageRoute(builder: (context){
               return MyHomePage(name.text.toString());
            }));
      
          }, child: Text("Next Screen",style: TextStyle(fontSize: 30,fontStyle: FontStyle.italic,color: Colors.brown),))
      
        ]),
      ),
    );
  }
}