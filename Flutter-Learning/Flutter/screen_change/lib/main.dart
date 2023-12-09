import 'package:flutter/material.dart';
import 'package:screen_change/MyPage.dart';
import 'package:screen_change/SplashPage.dart';

void main(){
  return runApp(MyApp());
}

class MyApp extends StatelessWidget
{
  @override
  Widget build(BuildContext context)
  {
     return MaterialApp(
      title: "Shimbhu's App",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: SplashPage(),
     );
  }
}

class MyHomePage extends StatefulWidget
{
  @override
  State<MyHomePage> createState() {
    return  MyHomePageState();
  }
  // @override
  // State<MyHomePage> createState(){
  //   MyHomePageState();
  // };
}

class MyHomePageState extends State<MyHomePage>
{
  @override
  Widget build(BuildContext context)
  {
     return Scaffold(
      appBar: AppBar(title: Text("Shimbhu"),),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(child: Text("Welcome to Home Page.",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.purple.shade300),)),
          SizedBox(height: 50,),
          ElevatedButton(style: ElevatedButton.styleFrom(fixedSize: Size(200,60)),onPressed: (){
          Navigator.push(context, MaterialPageRoute(builder: (context){
               return MyPage();
          }));
          }, child: Text("Next",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),))
        ],
      ),
     );
  }
}