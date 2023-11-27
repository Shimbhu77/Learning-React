
import 'package:flutter/material.dart';

// void main()
// {
//   runApp(Text("Hello Shimbhu!", textDirection: TextDirection.ltr));
// }

void main()
{
  runApp(MyApp());
}

// class MyApp extends StatelessWidget
// {
//   @override
//   Widget build(BuildContext context) {
//     return Text("Hello Shimbhu Kumawat!", textDirection: TextDirection.ltr);
//   }

// }

// class MyApp extends StatelessWidget
// {
//   @override
//   Widget build(BuildContext context) {

//     return const Scaffold(Text("Hello Shimbhu!"));
//   }

// }

class MyApp extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {

  //  const MyApp({super.key});

    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text("Hello Shimbhu's World."),
        ),
      ),
      );
  }

}

