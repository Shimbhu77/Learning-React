import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Shimbhu'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ), 
      
      //Row
      // body: Container(
      //    height: 300,
      //    width: 400,
      //    child: const Row(
      //     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //     crossAxisAlignment: CrossAxisAlignment.end,
      //     children: [
      //       Text("A",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
      //       Text("B",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
      //       Text("C",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
      //       Text("D",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
      //       Text("E",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
      //       Text("F",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
      //       ]
      //     ),
      // ),

    //   body: Center(
    //       child: InkWell(
    //           onTap: () {
    //             print("clicked on container.");
    //           },
    //           onDoubleTap: () {
    //             print("double clicked on container.");
    //           },
    //           onLongPress: () {
    //             print(" long press clicked on container.");
    //           },
    //           child: Container(
    //               height: 300,
    //               width: 400,
    //               color: Colors.amber,
    //               child: Center(
    //                 child: InkWell(
    //                     onTap: () {
    //                       print("clicked on Text!");
    //                     },
    //                     child: const Text("Click Me!",
    //                         style: TextStyle(
    //                             fontSize: 20, fontWeight: FontWeight.bold))),
    //               )))),
    // );
     body: Padding(
       padding: EdgeInsets.all(10),

       child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
         child: Row(
           children: [
                    Container(width: 400,height: 400,color: Colors.cyan,margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 167, 188, 190),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 212, 0, 145),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 35, 0, 212),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 212, 0, 92),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 57, 212, 0),margin: EdgeInsets.all(10),),
             SingleChildScrollView(
               child: Column(
                  children: [
                    Container(width: 400,height: 400,color: Colors.cyan,margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 167, 188, 190),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 212, 0, 145),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 35, 0, 212),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 212, 0, 92),margin: EdgeInsets.all(10),),
                    Container(width: 400,height: 400,color: const Color.fromARGB(255, 57, 212, 0),margin: EdgeInsets.all(10),),
                  ]
               ),
             ),
           ],
         ),
       ),
       
     ),
    );
  }
}