import 'package:flutter/material.dart';

class ClipRRectImage extends StatelessWidget
{
  @override
  Widget build(BuildContext context)
  {
     return Scaffold(
      appBar: AppBar(title: Text("Shimbhu's App")),
      // body: Container(child: Image.asset('assets/images/nature.jpeg')),
      // body: Container(child: Image.asset('web/icons/nature.jpeg')),
      body: Center(
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: Container(width: 200,height: 200,color: Colors.lightBlue,)
          ),
      ),
     );
  }
}