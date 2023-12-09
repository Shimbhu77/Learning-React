import 'dart:async';

import 'package:flutter/material.dart';
import 'package:screen_change/MyPage.dart';

class SplashPage extends StatefulWidget
{
  @override
  State<SplashPage> createState()
  {
      return SplashPageState();
  }
}

class SplashPageState extends State<SplashPage>
{

  @override
  void initState() {
    super.initState();

    Timer(Duration(seconds: 5),() {
      Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => MyPage()));
    });

    // Timer(duration, () { })

  }

  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
         color: Colors.green.shade300,
         child: Center(child: Text("Shimbhu's AI",style: TextStyle(fontSize: 30,fontStyle: FontStyle.italic,color: Colors.purple.shade400),)),
      ),
    );
  }
}