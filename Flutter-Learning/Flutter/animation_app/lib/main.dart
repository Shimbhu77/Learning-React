import 'package:animation_app/ClipRRectImage.dart';
import 'package:animation_app/MapList.dart';
import 'package:animation_app/SharedPref.dart';
import 'package:flutter/material.dart';

void main() {
  return runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Shimbhu's App",
      theme: ThemeData(primarySwatch: Colors.blue),
      // home: MyHomePage(),
      // home: ClipRRectImage(),
      // home: MapList(),
      home: SharedPref(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() {
    return MyHomePageState();
  }
}

class MyHomePageState extends State<MyHomePage> {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Shimbhu's App"),
      ),
      body: ListWheelScrollView(
          itemExtent: 200,
          children: list.map((value) => Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
                  child: Center(
                    child: Text(
                      "$value",
                      style: TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.bold,
                          fontStyle: FontStyle.italic,
                          color: Colors.purple.shade400),
                    ),
                  ),
                  decoration: BoxDecoration(
                    color: Colors.green.shade400,
                    borderRadius: BorderRadius.circular(10)
                  ),
                  width: double.infinity,
                ),
          ),
              ).toList(),
              ),
    );
  }
}
