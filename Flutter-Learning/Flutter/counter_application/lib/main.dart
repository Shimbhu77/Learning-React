import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

void main()
{
  return runApp(MyApp());

}

class MyApp extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Shimbhu's App",
      theme: ThemeData(primarySwatch: Colors.blue),
      home:  MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget
{
  @override
  State<MyHomePage> createState() {
    return MyHomePageState();
  }
}

class MyHomePageState extends State<MyHomePage>
{
  var count = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Shimbhu"),),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Count : $count",style: TextStyle(fontSize: 30,fontStyle: FontStyle.italic),),
            SizedBox(height: 10,),
            ElevatedButton(onPressed: (){

              // this is also right
            //  count++;
            //  print(count);

            //  setState(() {
               
            //  });
            
             setState(() {
               count++;
               print(count);
             });
            }, child: Text("Increment")),
            SizedBox(height: 10,),
            ElevatedButton(onPressed: (){

              // this is also right
            //  count--;
            //  print(count);

            //  setState(() {
               
            //  });
            if(count>0)
            {
              setState(() {

               count--;
               print(count);
             });
            }
            
            }, child: Text("Decrement")),
          ],
        ),
      ),
    );
  }
}